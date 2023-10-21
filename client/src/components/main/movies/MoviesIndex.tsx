import { Stack, styled } from '@mui/material';
import MovieAlbumList from './MovieAlbumList';
import MovieFilterLayer from './MovieFilterLayer';

const MoviesIndex = () => {
  return (
    <>
      <WrapStack>
        <Stack direction='row' spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <MovieFilterLayer />
        </Stack>
      </WrapStack>
      <MovieAlbumList />
    </>
  );
};

const WrapStack = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap-reverse',
  justifyContent: 'flex-end',
  marginBottom: theme.spacing(3)
}));

export default MoviesIndex;
