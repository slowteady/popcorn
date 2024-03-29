import { Box, Card, Stack, SxProps, Typography, styled } from '@mui/material';
import { memo, useState } from 'react';
import { MoviesData } from '../../../../types/movie';
import { changePosterPath } from '../../../../utils/dataTransForm';
import MovieModal from '../modal/MovieModal';
import MovieImgBox from '../utils/MovieImgBox';

interface MovieCardProps {
  movies: MoviesData;
  sx?: SxProps;
}

const changeVoteAvg = (value: number) => {
  return (Math.round(value * 10) / 10).toFixed(1);
};

const MovieCard = ({ movies, sx }: MovieCardProps) => {
  const [open, setOpen] = useState(false);
  const { id, poster_path, release_date, title, vote_average } = movies;

  const openModal = () => {
    setOpen(true);
  };

  return (
    <>
      <Card onClick={openModal} sx={{ ...defaultCardSx, ...sx }}>
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
      <MovieModal open={open} setOpen={setOpen} movie={{ id, posterPath: changePosterPath(poster_path) }} />
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
