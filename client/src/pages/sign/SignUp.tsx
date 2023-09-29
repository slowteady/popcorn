import { Container } from '@mui/material';
import Helmet from '../../components/common/Helmet';
import SignUpIndex from '../../components/sign/SignUpIndex';

const PAGE_TITLE = 'SignUp';

const SignUp = () => {
  return (
    <>
      <Helmet text={PAGE_TITLE} />
      <Container component='main' maxWidth='sm'>
        <SignUpIndex />
      </Container>
    </>
  );
};

export default SignUp;
