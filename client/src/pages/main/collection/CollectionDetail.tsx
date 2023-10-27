import { Box, Container, Typography } from '@mui/material';
import { AxiosResponse } from 'axios';
import { InfiniteData, useInfiniteQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import MovieAlbumList from '../../../components/main/movies/list/MovieAlbumList';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';
import { getCollectionDetail } from '../../../service/collectionService';
import { getCookie } from '../../../utils/cookieManager';
import DetailButtons from './DetailButtons';

const LIST_COUNT = 20;
const FIRST_PAGE = 1;
const STALE_TIME = 1000 * 60 * 60;

const CollectionDetail = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id') || '';

  const {
    data: collection,
    fetchNextPage,
    hasNextPage,
    status
  } = useInfiniteQuery(
    ['getCollectionDetail', id],
    ({ pageParam = FIRST_PAGE }) => getCollectionDetail(id, pageParam, LIST_COUNT),
    {
      getNextPageParam: ({ data }) => {
        const { page, totalPages } = data;
        return page < totalPages && page + 1;
      },
      staleTime: STALE_TIME
    }
  );

  const observeRef = useInfiniteScroll({ fetchNextPage, hasNextPage });

  return (
    <Container>
      {collection &&
        (() => {
          const title = getCollectionTitle(collection);
          return (
            <Typography title={title} variant='h4' noWrap>
              {title}
            </Typography>
          );
        })()}

      <DetailButtons isOwner={collection ? isOwner(collection) : false} collectionId={id} />

      {collection &&
        (() => {
          const movies = transformMovieData(collection);
          return (
            <Box sx={{ my: 2 }}>
              <MovieAlbumList status={status} movies={movies} ref={observeRef} />
            </Box>
          );
        })()}
    </Container>
  );
};

const transformMovieData = (collection: InfiniteData<AxiosResponse<any, any>>) => {
  return collection.pages.flatMap(({ data }) => {
    const { movie = [] } = data.collection;
    return movie;
  });
};

const getCollectionTitle = (collection: InfiniteData<AxiosResponse<any, any>>) => {
  const { collectionTitle: title = '-' } = collection.pages[0].data.collection;
  return title;
};

const isOwner = (collection: InfiniteData<AxiosResponse<any, any>>) => {
  const { user } = collection.pages[0].data.collection;
  const userId = user.userId;
  const id = getCookie('AUTH_TOKEN')._id;

  return userId && id ? userId === id : false;
};

export default CollectionDetail;
