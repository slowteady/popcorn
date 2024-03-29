import { Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import paths from '../../../config/routes/paths';
import logoImg from '../../../img/popcorn_icon.png';

const { main } = paths.main;

const Logo = () => {
  return (
    <Link to={main} component={RouterLink} sx={linkSx}>
      <Box component='img' src={logoImg} sx={logoBoxSx} />
    </Link>
  );
};

const linkSx = {
  display: 'contents'
};

const logoBoxSx = {
  width: 50,
  height: 50,
  cursor: 'pointer'
};

export default Logo;
