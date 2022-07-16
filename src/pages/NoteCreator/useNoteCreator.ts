import { useState } from 'react';
import { showNotification } from '@mantine/notifications';

import { encryptValue, getRandomPassword } from '../../utils';
import { usePostNote } from './usePostNote';

export const useNoteCreator = () => {
  const [value, setValue] = useState('');
  const [messageUrl, setMessageUrl] = useState('');

  const { mutate, isLoading } = usePostNote();

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(messageUrl);
      showNotification({
        title: 'Success',
        message: 'Copied to clipboard',
        disallowClose: true,
        color: 'green',
      });
    } catch {
      showNotification({
        title: 'Error',
        message: 'Copy failed',
        disallowClose: true,
        color: 'red',
      });
    }
  };

  const sendNote = async () => {
    const randomPassword = getRandomPassword();
    const encryptedNote = encryptValue(value, randomPassword);

    mutate({
      note: encryptedNote,
      onSuccess: (id) => setMessageUrl(`${window.location.href}${id}#${randomPassword}`),
    });
  };

  return { value, setValue, isLoading, sendNote, messageUrl, copyUrl };
};
