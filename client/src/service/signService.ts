import { commonRequest } from '../api/requestInstance';
import { MOVIE_PATH } from '../api/requestPaths';

export const getPoster = () => {
  const url = MOVIE_PATH.POPULAR_PATH;
  return commonRequest.get(url);
};
