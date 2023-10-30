import { AxiosResponse } from 'axios';
import { InfiniteData } from 'react-query';
import { MOVIE_PATH } from '../api/path/movieApiPaths';

export const transformMovieData = (movies: InfiniteData<AxiosResponse<any, any>> | undefined) => {
  return movies ? movies.pages.flatMap(({ data }) => data.results) : [];
};

export const changePosterPath = (path: string) => {
  const baseUrl = process.env.REACT_APP_IMAGE_BASE_URL;
  const imagePath = MOVIE_PATH.IMAGE_SIZE_780;

  return `${baseUrl}${imagePath}${path}`;
};
