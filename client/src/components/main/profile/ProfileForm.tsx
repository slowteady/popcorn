import { Avatar } from '@mui/material';
import { green } from '@mui/material/colors';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { USER_PROFILE_OPTION, userSelector } from '../../../state/userState';
import { errorHandler } from '../../../utils/exceptionHandler';
import Icon from '../../common/icon/Icon';

const IMG_CHANGE_ICON = 'material-symbols:change-circle-outline';
const IMAGE_ERROR_MESSAGE = '지원하지 않는 이미지 형식입니다.';

const ProfileForm = () => {
  const { email, image: globalImage, intro: globalIntro, name } = useRecoilValue(userSelector(USER_PROFILE_OPTION));
  const [image, setImage] = useState('');
  const [introduce, setIntroduce] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    globalImage && setImage(globalImage);
    globalIntro && setIntroduce(globalIntro);
  }, [globalImage, globalIntro]);

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

  return (
    <>
      <Avatar src={image} alt='profile' sx={userImgSx} />
      <Avatar onClick={changeImage} sx={changeIconSx}>
        <Icon icon={IMG_CHANGE_ICON} width={20} />
      </Avatar>
      <input onChange={insertImage} ref={fileInputRef} type='file' hidden />
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
