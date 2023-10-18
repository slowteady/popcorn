import { Avatar, IconButton, alpha } from '@mui/material';
import { MouseEvent, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { USER_MAIN_OPTION, userSelector } from '../../../state/userState';
import HeaderUserLayer from './HeaderUserLayer';

const HeaderUserButton = () => {
  const { image } = useRecoilValue(userSelector(USER_MAIN_OPTION));
  const [open, setOpen] = useState(false);
  const [element, setElement] = useState<HTMLButtonElement | null>(null);

  const onLayer = (e: MouseEvent<HTMLButtonElement>) => {
    setOpen(true);
    setElement(e.currentTarget);
  };

  const closeLayer = () => {
    setOpen(false);
    setElement(null);
  };

  return (
    <>
      <IconButton
        onClick={onLayer}
        sx={{
          p: 0,
          '&:hover': {
            bgcolor: '#b6d4b6'
          },
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.3)
            }
          })
        }}
      >
        <Avatar src={image} />
      </IconButton>
      <HeaderUserLayer element={element} closeLayer={closeLayer} />
    </>
  );
};

export default HeaderUserButton;
