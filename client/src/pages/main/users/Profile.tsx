import { Container } from '@mui/material';
import Helmet from '../../../components/common/Helmet';
import ProfileIndex from '../../../components/main/profile/ProfileIndex';

const PAGE_TITLE = 'Profile';

const Profile = () => {
  return (
    <>
      <Helmet text={PAGE_TITLE} />
      <Container component='main' maxWidth='sm'>
        <ProfileIndex />
      </Container>
    </>
  );
};

export default Profile;
