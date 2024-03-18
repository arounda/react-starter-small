import { QueryFunctionContext } from '@tanstack/react-query';
import axios from 'axios';

type QueryKey = [string, string];

export const getData = async ({ queryKey }: QueryFunctionContext<QueryKey>) => {
  const [, url] = queryKey;
  const response = await axios.get(url);
  return response.data;
};
