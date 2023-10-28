import { Box, Button, styled } from '@mui/material';
import { useRef, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import useInfiniteScroll from '../../../../hooks/useInfiniteScroll';
import { getSearchedMovie } from '../../../../service/movieService';
import { transformMovieData } from '../../../../utils/dataTransForm';
import { strValidation } from '../../../../utils/validation';
import { InputProps } from '../../../theme/common/commonSx';
import MovieAlbumList from '../../movies/list/MovieAlbumList';
import Input from '../utils/Input';

const SEARCH_ICON = 'eva:search-fill';
const PLACEHOLDER = '영화를 검색해주세요';
const FIRST_PAGE = 1;
const STALE_TIME = 1000 * 60 * 60;

const CollectionAddBody = () => {
  const [keyword, setKeyword] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

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
      enabled: strValidation(keyword).isNotEmpty()
    }
  );

  const observeRef = useInfiniteScroll({ fetchNextPage, hasNextPage });

  const doSearch = () => {
    if (inputRef && inputRef.current && strValidation(inputRef.current.value).isNotEmpty()) {
      setKeyword(inputRef.current.value);
    }
  };

  return (
    <>
      <StyledBox>
        <Input
          setKeyword={setKeyword}
          placeholder={PLACEHOLDER}
          InputProps={InputProps({ icon: SEARCH_ICON, sx: iconSx })}
          ref={inputRef}
          sx={{ width: 280 }}
        />
        <Button onClick={doSearch} variant='contained' sx={{ m: 2.5 }}>
          Search
        </Button>
      </StyledBox>
      <MovieAlbumList movies={transformMovieData(movies)} status={status} ref={observeRef} readonly={false} />
    </>
  );
};

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(5)
}));

const iconSx = {
  ml: 1,
  width: 20,
  height: 20,
  color: 'text.disabled'
};

export default CollectionAddBody;
