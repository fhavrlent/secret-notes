import { Textarea, Button, LoadingOverlay, Input, Group, Stack } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React, { HTMLAttributes } from 'react';

import { useNoteCreator } from './useNoteCreator';

export const NoteCreator = () => {
  const { setValue, value, sendNote, isLoading, messageUrl, copyUrl } = useNoteCreator();

  const isTabletOrLarger = useMediaQuery('(min-width: 768px)');

  return (
    <>
      <div style={{ position: 'relative' }}>
        <LoadingOverlay visible={isLoading} />
        <Textarea
          autosize
          maxRows={15}
          minRows={15}
          onChange={(event) => setValue(event.target.value)}
          placeholder='Write your note here...'
          value={value}
        />
      </div>
      <Group mt={10} grow>
        <ConditionalWrapper
          condition={!isTabletOrLarger}
          element={({ children, ...rest }) => (
            <Stack align='stretch' {...rest}>
              {children}
            </Stack>
          )}
        >
          <Group grow>
            <ConditionalWrapper
              condition={!isTabletOrLarger}
              element={({ children, ...rest }) => (
                <Stack align='stretch' {...rest}>
                  {children}
                </Stack>
              )}
            >
              <Button
                color='indigo'
                onClick={sendNote}
                disabled={isLoading || !value || !!messageUrl}
              >
                Encrypt
              </Button>
              <Button onClick={copyUrl} disabled={!messageUrl}>
                Copy Link
              </Button>
            </ConditionalWrapper>
          </Group>
          <Input
            readOnly
            value={messageUrl}
            title='encrypted note url'
            placeholder='Encrypted note url'
          />
        </ConditionalWrapper>
      </Group>
    </>
  );
};

type ConditionalWrapperProps = {
  condition: boolean;
  children?: React.ReactNode;
  element: React.FC<{ children: React.ReactNode } & HTMLAttributes<HTMLDivElement>>;
  className?: string;
};

const ConditionalWrapper = ({
  condition,
  children,
  element: Element,
  className,
}: ConditionalWrapperProps): JSX.Element => {
  const childrenWithClass = React.Children.map(children, (el) => {
    return React.cloneElement(el as never, { className });
  });

  return condition ? (
    <Element className={className}>{childrenWithClass}</Element>
  ) : (
    <>{childrenWithClass}</>
  );
};
