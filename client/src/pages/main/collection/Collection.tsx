import { Container, Typography } from '@mui/material';
import Helmet from '../../../components/common/Helmet';
import CollectionIndex from '../../../components/main/collection/CollectionIndex';

const PAGE_TITLE = 'Collection';

const Collection = () => {
  return (
    <>
      <Helmet text={PAGE_TITLE} />
      <Container>
        <Typography variant='h4' sx={{ mb: 3 }}>
          {PAGE_TITLE}
        </Typography>
        <CollectionIndex />
      </Container>
    </>
  );
};

export default Collection;
