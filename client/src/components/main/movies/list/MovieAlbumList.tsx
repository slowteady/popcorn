import { Checkbox, Grid, styled } from '@mui/material';
import { RefObject, forwardRef } from 'react';
import { QueryStatus } from 'react-query';
import { MoviesData } from '../../../../types/movie';
import Icon from '../../../common/icon/Icon';
import { IconMsg } from '../../../common/icon/IconMsg';
import QueryStatusHandler from '../../../hoc/QueryStatusHandler';
import MovieCard from './MovieCard';

const NODATA_MESSAGE = '데이터가 없습니다.';
const NODATA_ICON = 'material-symbols:no-sim-outline-rounded';
const CHECK_ICON = 'ri:checkbox-circle-line';
const CHECKED_ICON = 'ri:checkbox-circle-fill';
const STATUS_SUCCESS = 'success';

interface MovieAlbumListProps {
  status: QueryStatus;
  movies: MoviesData[];
  readonly: boolean;
  ref?: RefObject<HTMLDivElement>;
}

const MovieAlbumList = forwardRef<HTMLDivElement, MovieAlbumListProps>(({ movies, status, readonly }, ref) => {
  return (
    <>
      <QueryStatusHandler status={status} sx={centerSx}>
        <Grid container spacing={2} sx={gridSx}>
          {status === STATUS_SUCCESS &&
            (movies && movies.length > 0 ? (
              movies.map((movie, index) => {
                return (
                  <Grid key={index} item sx={{ position: 'relative' }} {...relativeSx}>
                    {!readonly && (
                      <CheckCircle icon={<Icon icon={CHECK_ICON} />} checkedIcon={<Icon icon={CHECKED_ICON} />} />
                    )}
                    <MovieCard movies={movie} />
                  </Grid>
                );
              })
            ) : (
              <IconMsg icon={NODATA_ICON} width={128} message={NODATA_MESSAGE} sx={centerSx} />
            ))}
          {ref && <ObserveDiv ref={ref} />}
        </Grid>
      </QueryStatusHandler>
    </>
  );
});

const CheckCircle = styled(Checkbox)(({ theme }) => ({
  position: 'absolute',
  zIndex: 2,
  padding: 0,
  margin: theme.spacing(1),
  backgroundColor: 'white',
  cursor: 'pointer'
}));

const relativeSx = {
  xs: 8,
  sm: 6,
  md: 3,
  lg: 3
};

const gridSx = {
  justifyContent: 'center'
};

const centerSx = {
  height: '50vh'
};

const ObserveDiv = styled('div')(() => ({
  height: '40px'
}));

export default MovieAlbumList;
