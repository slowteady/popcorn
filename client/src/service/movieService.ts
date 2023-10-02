import { commonRequest } from '../api/movie/requestInstance';

export const getMovie = (path: string) => {
  return commonRequest.get(path);
};
