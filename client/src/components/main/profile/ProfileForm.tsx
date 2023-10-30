import { Avatar, Box, Button, TextField, Typography, styled } from '@mui/material';
import { green } from '@mui/material/colors';
import { ChangeEvent, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { SUCCESS_CODE } from '../../../api/code';
import { updateUser } from '../../../service/userService';
import { USER_PROFILE_OPTION, userAtom, userSelector } from '../../../state/userState';
import { getCookie } from '../../../utils/cookieManager';
import { errorHandler } from '../../../utils/exceptionHandler';
import Icon from '../../common/icon/Icon';

const IMG_CHANGE_ICON = 'material-symbols:change-circle-outline';
const IMAGE_ERROR_MESSAGE = '지원하지 않는 이미지 형식입니다.';
const ERROR_MESSAGE = '요청에 실패하였습니다.';
const TOKEN_NAME = 'AUTH_TOKEN';

const ProfileForm = () => {
  const setUser = useSetRecoilState(userAtom);
  const { email, image: globalImage, intro: globalIntro, name } = useRecoilValue(userSelector(USER_PROFILE_OPTION));
  const [image, setImage] = useState(globalImage ? globalImage : '');
  const [introduce, setIntroduce] = useState(globalIntro ? globalIntro : '');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const profileMutation = useMutation(updateUser, {
    onSuccess: (response) => {
      const { status, data } = response;
      const { user } = data;

      if (status === SUCCESS_CODE && data.isSuccess) {
        setUser((prevUser) => ({ ...prevUser, ...user }));
      } else {
        throw new Error(ERROR_MESSAGE);
      }
    },
    onError: (error: Error) => {
      errorHandler(error);
    }
  });

  const changeImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const insertImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const file = e.currentTarget.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        try {
          if (e.target) {
            const result = e.target.result;
            if (typeof result === 'string') {
              setImage(result);
            } else {
              throw new Error(IMAGE_ERROR_MESSAGE);
            }
          }
        } catch (error: unknown) {
          if (error instanceof Error) {
            errorHandler(error);
          }
        }
      };
    }
  };

  const writeIntroduce = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget) {
      setIntroduce(e.currentTarget.value);
    }
  };

  const saveUserInfo = () => {
    const imageFile = fileInputRef.current?.files ? fileInputRef.current.files[0] : '';
    const body = { image: imageFile, intro: introduce };
    const id = getCookie(TOKEN_NAME)._id;
    const argument = { id, body };
    profileMutation.mutate(argument);
  };

  return (
    <>
      <UserImageBox>
        <Avatar src={image} alt='profile' sx={userImgSx} />
        <Avatar onClick={changeImage} sx={changeIconSx}>
          <Icon icon={IMG_CHANGE_ICON} width={20} />
        </Avatar>
        <input onChange={insertImage} ref={fileInputRef} type='file' hidden />
      </UserImageBox>
      <UserInfoBox>
        <StyledTypography>{name}</StyledTypography>
        <StyledTypography>{email}</StyledTypography>
        <TextField
          onChange={writeIntroduce}
          defaultValue={introduce}
          label='소개'
          inputProps={{ maxLength: 30 }}
          InputLabelProps={{ shrink: true }}
          rows={1}
          type='text'
          fullWidth
          sx={{ mt: 2 }}
        />
      </UserInfoBox>
      <Button onClick={saveUserInfo} variant='contained' sx={{ mt: 1 }}>
        저장
      </Button>
    </>
  );
};

const UserImageBox = styled(Box)(() => ({
  position: 'relative',
  display: 'flex'
}));

const UserInfoBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(3, 0),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '75%'
}));

const StyledTypography = styled(Typography)(() => ({
  color: 'black',
  fontSize: 16
}));

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
  right: '10px',
  '&:hover': {
    bgcolor: green[500],
    transition: 'background-color 0.3s ease',
    cursor: 'pointer'
  }
};

export default ProfileForm;
