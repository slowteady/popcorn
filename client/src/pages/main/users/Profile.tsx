import { Container, Typography } from '@mui/material';
import Helmet from '../../../components/common/Helmet';
import ProfileIndex from '../../../components/main/profile/ProfileIndex';

const PAGE_TITLE = 'Profile';

const Profile = () => {
  return (
    <>
      <Helmet text={PAGE_TITLE} />
      <Typography variant='h4' sx={{ pl: 3 }}>
        {PAGE_TITLE}
      </Typography>
      <Container component='main' maxWidth='sm'>
        <ProfileIndex />
      </Container>
    </>
  );
};

export default Profile;
