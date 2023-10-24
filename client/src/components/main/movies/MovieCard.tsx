import { Box, Card, Stack, SxProps, Typography, styled } from '@mui/material';
import { memo } from 'react';
import { MOVIE_PATH } from '../../../api/movie/movieApiPaths';
import { MoviesData } from '../../../types/movie';
import MovieImgBox from './MovieImgBox';

interface MovieCardProps {
  movies: MoviesData;
  sx?: SxProps;
}

const changeVoteAvg = (value: number) => {
  return (Math.round(value * 10) / 10).toFixed(1);
};

const changePosterPath = (path: string) => {
  const baseUrl = process.env.REACT_APP_IMAGE_BASE_URL;
  const imagePath = MOVIE_PATH.IMAGE_SIZE_780;

  return `${baseUrl}${imagePath}${path}`;
};

const MovieCard = ({ movies, sx }: MovieCardProps) => {
  const { poster_path, release_date, title, vote_average } = movies;

  return (
    <>
      <Card sx={{ ...defaultCardSx, ...sx }}>
        <MovieImgBox src={changePosterPath(poster_path)} alt={title} />
        <Stack spacing={2} sx={{ p: 3 }}>
          <Box sx={{ color: 'inherit' }}>
            <Typography title={title} variant='subtitle2' noWrap>
              {title}
            </Typography>
          </Box>
          <FlexStack>
            <Typography variant='subtitle1'>{release_date}</Typography>
            <VoteAvgBox>
              <VoteTypography>{changeVoteAvg(vote_average)}</VoteTypography>
            </VoteAvgBox>
          </FlexStack>
        </Stack>
      </Card>
    </>
  );
};

const FlexStack = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
}));

const VoteAvgBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgb(0, 0, 0, 0.9)',
  borderRadius: '50%',
  height: '40px',
  width: '40px'
}));

const VoteTypography = styled(Typography)(() => ({
  fontsize: 15,
  fontWeight: 800,
  color: 'white'
}));

const defaultCardSx = {
  cursor: 'pointer',
  borderRadius: '12px'
};

export default memo(MovieCard);
