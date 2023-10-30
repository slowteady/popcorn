import { Box, Drawer } from '@mui/material';
import { ReactNodeProps } from '../../../../types/global';
import { LeftMenuProps } from '../../../../types/layout';

const NAV_WIDTH = 280;

interface LeftMenuLayoutProps extends ReactNodeProps, LeftMenuProps {
  isDesktop: boolean;
}

const LeftMenuLayout = ({ openNav, onCloseNav, isDesktop, children }: LeftMenuLayoutProps) => {
  return (
    <Box component='nav' sx={layoutBoxSx}>
      {isDesktop ? (
        <Drawer open variant='permanent' PaperProps={{ sx: deskTopSx }}>
          {children}
        </Drawer>
      ) : (
        <Drawer open={openNav} onClose={onCloseNav} ModalProps={{ keepMounted: true }} PaperProps={{ sx: mobileSx }}>
          {children}
        </Drawer>
      )}
    </Box>
  );
};

const layoutBoxSx = {
  flexShrink: { lg: 0 },
  width: { lg: NAV_WIDTH }
};

const deskTopSx = {
  width: NAV_WIDTH,
  bgcolor: 'background.default',
  borderRightStyle: 'dashed'
};

const mobileSx = {
  width: NAV_WIDTH
};

export default LeftMenuLayout;
