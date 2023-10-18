import { Avatar } from '@mui/material';
import { green } from '@mui/material/colors';
import { useRecoilValue } from 'recoil';
import { USER_PROFILE_OPTION, userSelector } from '../../../state/userState';
import Icon from '../../common/icon/Icon';

const IMG_CHANGE_ICON = 'material-symbols:change-circle-outline';

const ProfileForm = () => {
  const { email, image, intro, name } = useRecoilValue(userSelector(USER_PROFILE_OPTION));

  return (
    <>
      <Avatar src={image} alt='profile' sx={userImgSx} />
      <Avatar sx={changeIconSx}>
        <Icon icon={IMG_CHANGE_ICON} width={20} />
      </Avatar>
    </>
  );
};

const userImgSx = {
  width: 156,
  height: 156
};

const changeIconSx = {
  bgcolor: green[200],
  position: 'absolute',
  width: 25,
  height: 25,
  bottom: 0,
  right: '25vh',
  '&:hover': {
    bgcolor: green[500],
    transition: 'background-color 0.3s ease',
    cursor: 'pointer'
  }
};

export default ProfileForm;
