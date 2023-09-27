import { commonRequest } from '../api/requestInstance';

export const getMovie = (path: string) => {
  return commonRequest.get(path);
};
