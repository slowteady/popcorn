import { AxiosResponse } from 'axios';
import { InfiniteData } from 'react-query';

export const transformMovieData = (movies: InfiniteData<AxiosResponse<any, any>> | undefined) => {
  return movies ? movies.pages.flatMap(({ data }) => data.results) : [];
};
