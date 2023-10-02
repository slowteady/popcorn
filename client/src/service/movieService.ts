import { movieDataRequest } from '../api/movie/movieApiInstance';

export const getMovie = (path: string) => {
  return movieDataRequest.get(path);
};
