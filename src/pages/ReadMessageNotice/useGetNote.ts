import axios from 'axios';
import { useQuery } from 'react-query';
import { API_URL } from '../../constants';

export const useGetNote = (id?: string) =>
  useQuery(
    'note',
    async () => {
      const { data } = await axios.get<{ note: string }>(`${API_URL}/note/${id}`);
      return data;
    },
    {
      enabled: false,
    },
  );
