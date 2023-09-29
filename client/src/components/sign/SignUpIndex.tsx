import FaceIcon from '@mui/icons-material/Face';
import { Typography } from '@mui/material';
import { StyledBox } from '../theme/sign/commonStyles';
import SignUpform from './SignUpForm';

const HEADER_LABEL = '회원가입';

const SignUpIndex = () => {
  return (
    <StyledBox>
      <FaceIcon fontSize='large' sx={{ m: 1 }} />
      <Typography variant='h4'>{HEADER_LABEL}</Typography>
      <SignUpform />
    </StyledBox>
  );
};

export default SignUpIndex;
