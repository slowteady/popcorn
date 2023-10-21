import { movieDataRequest } from '../api/movie/movieApiInstance';

export const getMovie = (path: string, page?: number) => {
  return page ? movieDataRequest.get(path, { params: page }) : movieDataRequest.get(path);
};
