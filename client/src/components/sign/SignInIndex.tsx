import FaceIcon from '@mui/icons-material/Face';
import { Typography } from '@mui/material';
import { StyledBox } from '../theme/common/commonStyles';
import SignInForm from './SignInForm';

const HEADER_LABEL = '로그인';

const SignInIndex = () => {
  return (
    <StyledBox>
      <FaceIcon fontSize='large' sx={{ m: 1 }} />
      <Typography variant='h4'>{HEADER_LABEL}</Typography>
      <SignInForm />
    </StyledBox>
  );
};

export default SignInIndex;
