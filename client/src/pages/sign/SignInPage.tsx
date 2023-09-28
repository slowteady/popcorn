import { Grid, Hidden, Paper } from '@mui/material';
import Helmet from '../../components/common/Helmet';
import Poster from '../../components/sign/Poster';
import SignIn from '../../components/sign/SignIn';

const PAGE_TITLE = 'SignIn';

const SignInPage = () => {
  return (
    <>
      <Helmet text={PAGE_TITLE} />
      <Grid container component='main' sx={fullHeightSx}>
        <Hidden mdDown>
          <Grid item md={5} lg={6}>
            <Poster />
          </Grid>
        </Hidden>
        <Grid item square component={Paper} xs={12} sm={12} md={7} lg={6} elevation={6}>
          <SignIn />
        </Grid>
      </Grid>
    </>
  );
};

const fullHeightSx = {
  height: '100vh'
};

export default SignInPage;
