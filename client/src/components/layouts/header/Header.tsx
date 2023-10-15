import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Stack, Toolbar, styled } from '@mui/material';
import { HEADER_DESKTOP, HEADER_MOBILE, NAV_WIDTH } from '../../../config/layout/headerConfig';
import { bgBlur } from '../../../utils/styleUtils';
import UserPopover from './UserPopover';
import SearchBar from './search/SearchBar';

export interface HeaderProps {
  onOpenNav: () => void;
}

const Header = ({ onOpenNav }: HeaderProps) => {
  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton onClick={onOpenNav} sx={iconBtnSx}>
          <MenuIcon />
        </IconButton>
        <SearchBar />
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction='row' alignItems='center' spacing={{ xs: 0.5, sm: 1 }}>
          <UserPopover />
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
};

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({
    color: theme.palette.background.default,
    blur: 0,
    opacity: 0
  }),
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`
  }
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}));

const iconBtnSx = {
  mr: 1,
  color: 'text.primary',
  display: { lg: 'none' }
};

export default Header;
