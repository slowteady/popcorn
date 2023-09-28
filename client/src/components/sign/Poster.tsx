import { Box, styled } from '@mui/material';
import { useQuery } from 'react-query';
import { IMAGE_URL } from '../../api/requestInstance';
import { MOVIE_PATH } from '../../api/requestPaths';
import { getMovie } from '../../service/movieService';
import { Movie } from '../../types/movie';
import { DataErrorIcon } from '../common/DataError';
import Loading from '../common/Loading';

const { POPULAR_PATH, IMAGE_SIZE_ORIGINAL } = MOVIE_PATH;
const ERORR_MESSAGE = '데이터 호출에 실패하였습니다.';

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

  if (status === 'loading') {
    return <Loading />;
  } else if (status === 'error') {
    return (
      <StyledDiv>
        <DataErrorIcon icon='ph:file-x-bold' size={128} message={ERORR_MESSAGE} />
      </StyledDiv>
    );
  }

  return <StyledImg src={data} alt='poster' />;
};

const getPosterPaths = (results: Array<Movie>) => {
  return results.map((movie: Movie) => movie.poster_path);
};

const getRandomPosterPath = (posterPaths: string[]) => {
  return posterPaths[Math.floor(Math.random() * posterPaths.length)];
};

const StyledDiv = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%'
});

const StyledImg = styled('img')({
  height: '100vh',
  width: '100%',
  objectFit: 'fill'
});

export default Poster;
