import FaceIcon from '@mui/icons-material/Face';
import { Box, Typography, styled } from '@mui/material';
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

const StyledBox = styled(Box)({
  margin: '40px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

export default SignInIndex;
