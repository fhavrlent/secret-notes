import { useMutation } from 'react-query';
import axios from 'axios';

type Params = {
  note: string;
  onSuccess: (id: string) => void;
};

export const usePostNote = () =>
  useMutation(
    ({ note }: Params) =>
      axios.post<{ id: string }>('https://run.mocky.io/v3/1b1bfb7c-5522-44a3-98bb-ae47cea1c47d', {
        note,
      }),
    {
      onSuccess: ({ data: { id } }, { onSuccess }) => onSuccess(id),
    },
  );
