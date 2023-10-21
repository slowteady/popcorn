import { styled } from '@mui/material';
import { useQuery } from 'react-query';
import { IMAGE_URL } from '../../api/movie/movieApiInstance';
import { MOVIE_PATH } from '../../api/movie/movieApiPaths';
import { getMovie } from '../../service/movieService';
import { Movie } from '../../types/movie';
import QueryStatusHandler from '../hoc/QueryStatusHandler';

const { POPULAR_PATH, IMAGE_SIZE_ORIGINAL } = MOVIE_PATH;

const Poster = () => {
  const { data, status } = useQuery(['getRandomPoster', POPULAR_PATH], async () => {
    const movieData = await getMovie(POPULAR_PATH);
    if (!movieData) {
      throw new Error();
    }
    const results = movieData.data.results;
    const posterPaths = getPosterPaths(results);
    const randomPosterPath = getRandomPosterPath(posterPaths);
    const posterUrl = `${IMAGE_URL}${IMAGE_SIZE_ORIGINAL}${randomPosterPath}`;

    return posterUrl;
  });

  return (
    <QueryStatusHandler status={status}>
      <StyledImg src={data} alt='poster' />
    </QueryStatusHandler>
  );
};

const getPosterPaths = (results: Array<Movie>) => {
  return results.map((movie: Movie) => movie.poster_path);
};

const getRandomPosterPath = (posterPaths: string[]) => {
  return posterPaths[Math.floor(Math.random() * posterPaths.length)];
};

const StyledImg = styled('img')({
  height: '100vh',
  width: '100%',
  objectFit: 'fill'
});

export default Poster;
