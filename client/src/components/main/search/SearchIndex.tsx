import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';
import { getSearchedMovie } from '../../../service/movieService';
import { transformMovieData } from '../../../utils/dataTransForm';
import { strValidation } from '../../../utils/validation';
import MovieAlbumList from '../movies/list/MovieAlbumList';
import SearchInput from './SearchInput';

const FIRST_PAGE = 1;
const STALE_TIME = 1000 * 60 * 60;

const SearchIndex = () => {
  const [searchParams] = useSearchParams();
  const [keyword, setKeyword] = useState('');
  const [enabled, setEnabled] = useState(false);

  const {
    data: movies,
    fetchNextPage,
    hasNextPage,
    status
  } = useInfiniteQuery(
    ['getSearchedMovie', keyword],
    ({ pageParam = FIRST_PAGE }) => getSearchedMovie(keyword, pageParam),
    {
      getNextPageParam: ({ data }) => {
        const { page, total_pages } = data;
        return page < total_pages && page + 1;
      },
      staleTime: STALE_TIME,
      enabled
    }
  );

  const observeRef = useInfiniteScroll({ fetchNextPage, hasNextPage });

  useEffect(() => {
    const query = searchParams.get('query') || '';
    setKeyword(query);

    if (strValidation(query).isNotEmpty()) {
      setEnabled(true);
    }
  }, [searchParams, setKeyword]);

  return (
    <Container sx={{ pl: '0 !important' }}>
      <SearchInput keyword={keyword} sx={{ mb: 4 }} />
      <MovieAlbumList status={status} ref={observeRef} movies={transformMovieData(movies)} readonly />
    </Container>
  );
};

export default SearchIndex;
