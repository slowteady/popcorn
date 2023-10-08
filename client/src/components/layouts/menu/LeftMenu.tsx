import { Box, alpha, styled } from '@mui/material';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useResponsive } from '../../../hooks/useResponsive';
import Logo from '../logo/Logo';

const NAV_WIDTH = 280;

interface MenuProps {
  openNav: boolean;
  onCloseNav: () => void;
}

const LeftMenu = ({ openNav, onCloseNav }: MenuProps) => {
  const { pathname } = useLocation();
  const isDesktop = useResponsive({ query: 'up', start: 'lg' });

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
  }, [pathname]);

  return (
    <LogoBox>
      <Logo />
    </LogoBox>
  );
};

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12)
}));

const LogoBox = styled(Box)({
  px: 2.5,
  py: 3,
  display: 'inline-flex'
});

export default LeftMenu;
