import { Container, Typography } from '@mui/material';
import Helmet from '../../../components/common/Helmet';
import SearchIndex from '../../../components/main/search/SearchIndex';

const PAGE_TITLE = 'Search';

const Search = () => {
  return (
    <>
      <Helmet text={PAGE_TITLE} />
      <Container>
        <Typography variant='h4' sx={{ mb: 5 }}>
          {PAGE_TITLE}
        </Typography>
        <SearchIndex />
      </Container>
    </>
  );
};

export default Search;
