import { movieBasedRequest, movieDataRequest } from '../api/movie/movieApiInstance';
import { MOVIE_PATH } from '../api/movie/movieApiPaths';

export const getMovie = (path: string, page?: number) => {
  return page ? movieDataRequest.get(path, { params: { page } }) : movieDataRequest.get(path);
};

export const getMovieDetail = (id: number) => {
  return movieDataRequest.get(`/${id}`);
};

export const getMovieDetailCredits = (id: number) => {
  return movieDataRequest.get(`/${id}${MOVIE_PATH.CREDITS_PATH}`);
};

export const getSearchedMovie = (query: string, page: number) => {
  return movieBasedRequest.get(`${MOVIE_PATH.SEARCH_PATH}`, { params: { query, page } });
};
