import { Stack, styled } from '@mui/material';
import { AxiosResponse } from 'axios';
import { InfiniteData, useInfiniteQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';
import { getMovie } from '../../../service/movieService';
import { filteredPath } from '../../../state/moviesState';
import MovieAlbumList from './MovieAlbumList';
import MovieFilterLayer from './MovieFilterLayer';

const FIRST_PAGE = 1;
const STALE_TIME = 1000 * 60 * 60;

const MoviesIndex = () => {
  const path = useRecoilValue(filteredPath);

  const {
    data: movies,
    fetchNextPage,
    hasNextPage,
    status
  } = useInfiniteQuery(['getFilterdMovies', path], ({ pageParam = FIRST_PAGE }) => getMovie(path, pageParam), {
    getNextPageParam: ({ data }) => {
      const { page, total_pages } = data;
      return page < total_pages && page + 1;
    },
    staleTime: STALE_TIME
  });
  const observeRef = useInfiniteScroll({ fetchNextPage, hasNextPage });

  return (
    <>
      <WrapStack>
        <Stack direction='row' spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <MovieFilterLayer />
        </Stack>
      </WrapStack>
      <MovieAlbumList status={status} ref={observeRef} movies={movies ? transformMovieData(movies) : []} />
    </>
  );
};

const transformMovieData = (movies: InfiniteData<AxiosResponse<any, any>>) => {
  return movies.pages.flatMap(({ data }) => data.results);
};

const WrapStack = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap-reverse',
  justifyContent: 'flex-end',
  marginBottom: theme.spacing(3)
}));

export default MoviesIndex;
