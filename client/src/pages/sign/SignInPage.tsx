import { Grid, Hidden } from '@mui/material';
import Helmet from '../../components/common/Helmet';
import Poster from '../../components/sign/Poster';
import SignIn from '../../components/sign/SignIn';

const PAGE_TITLE = 'SignIn';

const SignInPage = () => {
  return (
    <>
      <Helmet text={PAGE_TITLE} />
      <Grid container component='main'>
        <Hidden mdDown>
          <Grid item md={5} lg={6}>
            <Poster />
          </Grid>
        </Hidden>
        <Grid item md={7} lg={6}>
          <SignIn />
        </Grid>
      </Grid>
    </>
  );
};

export default SignInPage;
