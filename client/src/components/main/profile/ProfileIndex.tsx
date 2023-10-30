import { Box, styled } from '@mui/material';
import ProfileForm from './ProfileForm';

const ProfileIndex = () => {
  return (
    <StyledBox>
      <ProfileForm />
    </StyledBox>
  );
};

const StyledBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(4, 0),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative'
}));

export default ProfileIndex;
