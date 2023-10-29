import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Stack, Toolbar, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HEADER_DESKTOP, HEADER_MOBILE, NAV_WIDTH } from '../../../config/layout/headerConfig';
import paths from '../../../config/routes/paths';
import { bgBlur } from '../../../utils/styleUtils';
import CollectionCart from '../../main/collection/add/CollectionCart';
import CollectionEditCart from '../../main/collection/edit/CollectionEditCart';
import IconLayerButton from '../button/IconLayerButton';
import HeaderUserButton from './HeaderUserButton';
import SearchBar from './search/SearchBar';

export interface HeaderProps {
  onOpenNav: () => void;
}

const CART_ICON = 'el:shopping-cart-sign';

const { main } = paths.main;
const { index, add, edit } = paths.main.collection;

const Header = ({ onOpenNav }: HeaderProps) => {
  const [onCart, setOnCart] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    const addPath = `${main}${index}${add}`;
    const editPath = `${main}${index}${edit}`;

    if (pathname === addPath) {
      setOnCart(true);
    } else if (pathname === editPath) {
      setOnCart(true);
      setIsEdit(true);
    } else {
      setOnCart(false);
      setIsEdit(false);
    }
  }, [location]);

  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton onClick={onOpenNav} sx={iconBtnSx}>
          <MenuIcon />
        </IconButton>
        <SearchBar />
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction='row' alignItems='center' spacing={{ xs: 0.5, sm: 1 }}>
          {onCart && (
            <IconLayerButton icon={CART_ICON} width={40} sx={{ mr: 2 }}>
              {isEdit ? <CollectionEditCart /> : <CollectionCart />}
            </IconLayerButton>
          )}
          <HeaderUserButton />
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
