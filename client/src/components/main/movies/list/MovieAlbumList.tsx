import { Checkbox, Grid, styled } from '@mui/material';
import { ChangeEvent, RefObject, forwardRef, useState } from 'react';
import { QueryStatus } from 'react-query';
import { useRecoilState } from 'recoil';
import { checkedMoviesState } from '../../../../state/collectionState';
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
const ICON_WIDTH = 25;

interface MovieAlbumListProps {
  status: QueryStatus;
  movies: MoviesData[];
  readonly: boolean;
  ref?: RefObject<HTMLDivElement>;
}

const MovieAlbumList = forwardRef<HTMLDivElement, MovieAlbumListProps>(({ movies, status, readonly }, ref) => {
  const [dummyState, setDummyState] = useState<MoviesData[]>([]);
  const [globalState, setGlobalState] = useRecoilState(checkedMoviesState);
  const checkedMovies = readonly ? dummyState : globalState;
  const setCheckedMovies = readonly ? setDummyState : setGlobalState;

  const changeCheck = ({ currentTarget }: ChangeEvent<HTMLInputElement>, movie: MoviesData) => {
    const isChecked = currentTarget.checked;
    isChecked
      ? setCheckedMovies((prevCheckedMovie) => [...prevCheckedMovie, movie])
      : setCheckedMovies(checkedMovies.filter((chkMovie) => chkMovie.id !== movie.id));
  };

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
                      <CheckCircle
                        onChange={(e) => changeCheck(e, movie)}
                        icon={<Icon icon={CHECK_ICON} width={ICON_WIDTH} />}
                        checkedIcon={<Icon icon={CHECKED_ICON} width={ICON_WIDTH} />}
                      />
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
