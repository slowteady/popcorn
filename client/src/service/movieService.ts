import { commonRequest } from '../api/movie/movieApiInstance';

export const getMovie = (path: string) => {
  return commonRequest.get(path);
};
