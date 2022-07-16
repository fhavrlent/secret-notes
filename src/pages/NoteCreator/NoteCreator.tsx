import { Textarea, Button, LoadingOverlay, Input, Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

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
      <Group mt={10} grow direction={isTabletOrLarger ? 'row' : 'column'}>
        <Group grow direction={isTabletOrLarger ? 'row' : 'column'}>
          <Button color='indigo' onClick={sendNote} disabled={isLoading || !value || !!messageUrl}>
            Encrypt
          </Button>
          <Button onClick={copyUrl} disabled={!messageUrl}>
            Copy Link
          </Button>
        </Group>
        <Input
          readOnly
          value={messageUrl}
          title='encrypted note url'
          placeholder='Encrypted note url'
        />
      </Group>
    </>
  );
};
