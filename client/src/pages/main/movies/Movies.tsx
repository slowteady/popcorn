import { Container, Typography } from '@mui/material';
import Helmet from '../../../components/common/Helmet';
import MoviesIndex from '../../../components/main/movies/MoviesIndex';

const PAGE_TITLE = 'Movies';

const Movies = () => {
  return (
    <>
      <Helmet text={PAGE_TITLE} />
      <Container sx={{ mt: 1 }}>
        <Typography variant='h4' sx={{ mb: 5 }}>
          {PAGE_TITLE}
        </Typography>
        <MoviesIndex />
      </Container>
    </>
  );
};

export default Movies;
