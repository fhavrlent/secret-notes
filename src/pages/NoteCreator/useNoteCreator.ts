import { useState } from 'react';

import { encryptValue, getRandomPassword } from '../../utils';
import { usePostNote } from './usePostNote';

export const useNoteCreator = () => {
  const [value, setValue] = useState('');

  const { mutate, isLoading } = usePostNote();

  const sendNote = () => {
    const randomPassword = getRandomPassword();
    const encryptedNote = encryptValue(randomPassword, randomPassword);
    mutate(encryptedNote);
    setValue(encryptedNote);
  };

  return { value, setValue, isLoading, sendNote };
};
