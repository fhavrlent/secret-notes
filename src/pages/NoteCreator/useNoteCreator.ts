import { useState } from 'react';

import { encryptValue, getRandomPassword } from '../../utils';
import { usePostNote } from './usePostNote';

export const useNoteCreator = () => {
  const [value, setValue] = useState('');
  const [messageUrl, setMessageUrl] = useState('');

  const { mutate, isLoading } = usePostNote();

  const copyUrl = () => navigator.clipboard.writeText(messageUrl);

  const sendNote = async () => {
    const randomPassword = getRandomPassword();
    const encryptedNote = encryptValue(randomPassword, randomPassword);

    mutate({
      note: encryptedNote,
      onSuccess: (id) => setMessageUrl(`${window.location.href}${id}#${randomPassword}`),
    });
  };

  return { value, setValue, isLoading, sendNote, messageUrl, copyUrl };
};
