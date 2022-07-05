import { useState } from 'react';

import { encryptValue, getRandomPassword } from '../../utils';
import { usePostNote } from './usePostNote';

export const useNoteCreator = () => {
  const [value, setValue] = useState('');

  const { mutate, isLoading } = usePostNote();

  const sendNote = async () => {
    const randomPassword = getRandomPassword();
    const encryptedNote = encryptValue(randomPassword, randomPassword);
    mutate({ note: encryptedNote, onSuccess: (id) => console.log(`${id}#${randomPassword}`) });
  };

  return { value, setValue, isLoading, sendNote };
};
