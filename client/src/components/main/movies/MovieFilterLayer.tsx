import { Button, Menu, MenuItem, Typography } from '@mui/material';
import { MouseEvent, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { FILTER_OPTION } from '../../../config/movie/movieConfig';
import { filterState } from '../../../state/moviesState';
import { Option } from '../../../types/movie';
import Icon from '../../common/icon/Icon';

const OPEN_ICON = 'eva:chevron-up-fill';
const CLOSE_ICON = 'eva:chevron-down-fill';

const MovieFilterLayer = () => {
  const setFilter = useSetRecoilState(filterState);
  const [open, setOpen] = useState(false);
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const clickButton = (e: MouseEvent<HTMLButtonElement>) => {
    setOpen(!open);
    setMenuEl(e.currentTarget);
  };

  const closeMenu = () => {
    setOpen(false);
    setMenuEl(null);
  };

  const clickMenu = (option: { value: Option; label: string }) => {
    setOpen(false);
    setFilter(option);
  };

  return (
    <>
      <Button onClick={clickButton} color='inherit' endIcon={<Icon icon={open ? OPEN_ICON : CLOSE_ICON} />}>
        Sort By:&nbsp;
        <Typography component='span' variant='subtitle2' sx={{ color: 'text.secondary' }}>
          {FILTER_OPTION[0].label}
        </Typography>
      </Button>
      <Menu
        open={open}
        onClose={closeMenu}
        anchorEl={menuEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {FILTER_OPTION.map((option) => {
          const { value, label } = option;

          return (
            <MenuItem
              onClick={() => clickMenu(option)}
              key={value}
              selected={value === FILTER_OPTION[0].value}
              sx={{ typography: 'body2' }}
            >
              {label}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default MovieFilterLayer;
