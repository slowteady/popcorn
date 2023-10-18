import { Box, Divider, MenuItem, Popover, Typography, styled } from '@mui/material';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { SUCCESS_CODE } from '../../../api/code';
import paths from '../../../config/routes/paths';
import { logoutUser } from '../../../service/signService';
import { USER_MYPAGE_OPTION, userSelector } from '../../../state/userState';
import { errorHandler } from '../../../utils/exceptionHandler';

interface UserProfileLayerProps {
  element: HTMLButtonElement | null;
  closeLayer: () => void;
}

const { main } = paths.main;
const { users, profile } = paths.users;

const UserProfileLayer = ({ element, closeLayer }: UserProfileLayerProps) => {
  const { name, email } = useRecoilValue(userSelector(USER_MYPAGE_OPTION));
  const navigate = useNavigate();

  const logoutMutation = useMutation(logoutUser, {
    onSuccess: (response) => {
      const { status, data } = response;
      if (status === SUCCESS_CODE && data.isSuccess) {
        navigate(main);
      }
    },
    onError: (error: Error) => {
      errorHandler(error);
    }
  });

  const clickProfile = () => {
    closeLayer();
    navigate(`${main}${users}${profile}`);
  };

  const clickLogout = () => {
    closeLayer();
    logoutMutation.mutate();
  };

  return (
    <Popover
      open={element ? true : false}
      anchorEl={element}
      onClose={closeLayer}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      sx={popoverSx}
    >
      <SteyldBox>
        <Typography variant='subtitle2' noWrap>
          {name}
        </Typography>
        <Typography variant='body2' sx={{ color: 'text.secondary' }} noWrap>
          {email}
        </Typography>
      </SteyldBox>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <MenuItem onClick={clickProfile} sx={{ m: 1 }}>
        Profile
      </MenuItem>
      <Divider sx={{ borderStyle: 'dotted' }} />
      <MenuItem onClick={clickLogout} sx={{ m: 1 }}>
        Logout
      </MenuItem>
    </Popover>
  );
};

const popoverSx = {
  p: 0,
  mt: 1.5,
  ml: 0.75,
  width: 220,
  '& .MuiMenuItem-root': {
    typography: 'body2',
    borderRadius: 0.75
  }
};

const SteyldBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(1.5, 0),
  padding: theme.spacing(0, 2.5)
}));

export default UserProfileLayer;
