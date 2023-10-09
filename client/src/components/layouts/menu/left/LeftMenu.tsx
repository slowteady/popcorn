import { Box, styled } from '@mui/material';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import leftmenuConfig from '../../../../config/layout/leftMenuConfig';
import { useResponsive } from '../../../../hooks/useResponsive';
import { LeftMenuProps } from '../../../../types/layout';
import Logo from '../../logo/Logo';
import LeftMenuLayout from './LeftMenuLayout';
import LeftMenuList from './LeftMenuList';
import LeftMenuUser from './LeftMenuUser';

const LeftMenu = ({ openNav, onCloseNav }: LeftMenuProps) => {
  const isDesktop = useResponsive({ query: 'up', start: 'lg' });
  const { pathname } = useLocation();

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
  }, [pathname]);

  return (
    <LeftMenuLayout openNav={openNav} onCloseNav={onCloseNav} isDesktop={isDesktop}>
      <LogoBox>
        <Logo />
      </LogoBox>
      <LeftMenuUser />
      <LeftMenuList data={leftmenuConfig} />
    </LeftMenuLayout>
  );
};

const LogoBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3, 2.5),
  display: 'inline-flex'
}));

export default LeftMenu;
