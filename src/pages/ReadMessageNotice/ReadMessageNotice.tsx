import { Button, LoadingOverlay, Text, Textarea } from '@mantine/core';
import { useParams } from 'react-router-dom';

import { decryptValue } from '../../utils';
import { useGetNote } from './useGetNote';

export const ReadMessageNotice = () => {
  const { messageId } = useParams<{ messageId: string }>();
  const messagePassword = window.location.hash.replace('#', '');

  const { refetch, data, isFetching, isError } = useGetNote(messageId);

  const { note } = data ?? {};

  const decryptedMessage = note ? decryptValue(note, messagePassword) : '';

  return (
    <>
      <Text size='lg'>
        <strong>Read Message Notice</strong>
      </Text>
      <Text mt='sm' mb='sm'>
        You are about to read a message, it will be deleted after that.
      </Text>
      <Button mb='lg' color='red' onClick={() => refetch()} disabled={!!data?.note || isError}>
        Read the message
      </Button>
      <div style={{ position: 'relative' }}>
        <LoadingOverlay visible={isFetching} />
        <Textarea autosize maxRows={15} minRows={15} value={decryptedMessage} readOnly />
      </div>
    </>
  );
};
