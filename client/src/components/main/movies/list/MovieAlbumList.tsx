import { Grid, styled } from '@mui/material';
import { RefObject, forwardRef } from 'react';
import { QueryStatus } from 'react-query';
import { MoviesData } from '../../../../types/movie';
import { IconMsg } from '../../../common/icon/IconMsg';
import QueryStatusHandler from '../../../hoc/QueryStatusHandler';
import MovieCard from './MovieCard';

const NODATA_MESSAGE = '데이터가 없습니다.';
const NODATA_ICON = 'material-symbols:no-sim-outline-rounded';

interface MovieAlbumListProps {
  status: QueryStatus;
  movies: MoviesData[];
  ref?: RefObject<HTMLDivElement>;
}

const MovieAlbumList = forwardRef<HTMLDivElement, MovieAlbumListProps>(({ movies, status }, ref) => {
  return (
    <>
      <QueryStatusHandler status={status} sx={centerSx}>
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
          {movies && movies.length > 0 ? (
            movies.map((movie, index) => {
              return (
                <Grid key={index} item {...movieCardSx}>
                  <MovieCard movies={movie} />
                </Grid>
              );
            })
          ) : (
            <IconMsg icon={NODATA_ICON} width={128} message={NODATA_MESSAGE} sx={centerSx} />
          )}
          {ref && <ObserveDiv ref={ref} />}
        </Grid>
      </QueryStatusHandler>
    </>
  );
});

const movieCardSx = {
  xs: 8,
  sm: 6,
  md: 3,
  lg: 3
};

const centerSx = {
  height: '50vh'
};

const ObserveDiv = styled('div')(() => ({
  height: '40px'
}));

export default MovieAlbumList;
