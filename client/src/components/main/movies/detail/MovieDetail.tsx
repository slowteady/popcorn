import { Grid, Hidden } from '@mui/material';
import { AxiosResponse } from 'axios';
import useMultipleQuries from '../../../../hooks/useMultipleQuries';
import { getMovieDetail, getMovieDetailCredits } from '../../../../service/movieService';
import { MoviesDetailProps } from '../../../../types/movie';
import { strValidation } from '../../../../utils/validation';
import Loading from '../../../common/Loading';
import MovieImgBox from '../utils/MovieImgBox';
import MovieDetailInfo from './MovieDetailInfo';

interface GenreParam {
  id: number;
  name: string;
}

interface StringKey {
  [key: string]: any;
}

const MovieDetail = ({ movie }: MoviesDetailProps) => {
  const { id, posterPath } = movie;

  const queries = [
    { queryKey: ['getMovieDetail', id], queryFn: () => getMovieDetail(id) },
    { queryKey: ['getMovieDetailCredits', id], queryFn: () => getMovieDetailCredits(id) }
  ];

  const { data, status } = useMultipleQuries(queries);

  if (status && status.some((stat) => stat !== 'success')) {
    return <Loading />;
  }
  const { ...changedMovies } = changeDataShape(data);

  return (
    <>
      <Grid container spacing={4} sx={GridSx}>
        <Hidden smDown>
          <Grid item sm={6} sx={GridSx}>
            {posterPath && <MovieImgBox src={posterPath} alt={changedMovies.title} sx={imgBoxSx} imgSx={imgSx} />}
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={6} sx={GridSx}>
          <MovieDetailInfo movies={changedMovies} />
        </Grid>
      </Grid>
    </>
  );
};

const changeDataShape = (data: (AxiosResponse<any, any> | undefined)[]) => {
  const [movies, credits] = data;
  const {
    genres = [],
    tagline = '-',
    release_date = '-',
    runtime = '-',
    title = '-',
    vote_average = '-'
  } = movies?.data || {};
  const { cast = [], crew = [] } = credits?.data || {};

  return {
    title: validatedValue(title),
    tagline: validatedValue(tagline),
    release_date: validatedValue(release_date),
    runtime: validatedValue(String(runtime)),
    vote_average: validatedValue(String(vote_average)),
    genres: genres.length > 0 ? genres.map((genre: GenreParam) => genre.name) : '-',
    actor:
      cast.length > 0
        ? cast.filter((casts: StringKey) => [0, 1, 2].includes(casts.order)).map((casts: StringKey) => casts.name)
        : '-',
    director:
      crew.length > 0
        ? crew
            .filter((crews: StringKey) => 'Director'.includes(crews.job))
            .slice(0, 2)
            .map((crews: StringKey) => crews.name)
        : '-'
  };
};

const validatedValue = (value: string) => {
  return strValidation(value).isNotEmpty() ? value : '-';
};

const imgBoxSx = {
  minHeight: 475,
  position: 'relative'
};

const imgSx = {
  borderRadius: '3%'
};

const GridSx = {
  height: '100%'
};

export default MovieDetail;
