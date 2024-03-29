import { styled } from '@mui/material';
import { useState } from 'react';
import { ReactNodeProps } from '../../../types/global';
import Header from '../header/Header';
import LeftMenu from '../menu/left/LeftMenu';

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const MainLayout = ({ children }: ReactNodeProps) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledRoot>
      <Header onOpenNav={() => setOpen(true)} />
      <LeftMenu openNav={open} onCloseNav={() => setOpen(false)} />
      <Main>{children}</Main>
    </StyledRoot>
  );
};

const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});

const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

export default MainLayout;
