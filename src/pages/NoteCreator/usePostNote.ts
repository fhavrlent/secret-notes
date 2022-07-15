import { useMutation } from 'react-query';
import axios from 'axios';

import { API_URL } from '../../constants';

type Params = {
  note: string;
  onSuccess: (id: string) => void;
};

export const usePostNote = () =>
  useMutation(
    ({ note }: Params) =>
      axios.post<{ data: { id: string } }>(`${API_URL}/note`, {
        note,
      }),
    {
      onSuccess: (
        {
          data: {
            data: { id },
          },
        },
        { onSuccess },
      ) => onSuccess(id),
    },
  );
