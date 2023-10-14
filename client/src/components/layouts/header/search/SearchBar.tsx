import { ClickAwayListener, IconButton, Slide } from '@mui/material';
import { useRef, useState } from 'react';
import Icon from '../../../common/icon/Icon';
import SearchBarSlide from './SearchBarSlide';

export const ICON_NAME = 'eva:search-fill';

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const openSearchSlide = () => {
    setOpen(true);
  };

  const closeSearchSlide = () => {
    ref.current && setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={closeSearchSlide} disableReactTree>
      <div>
        {!open && (
          <IconButton onClick={openSearchSlide}>
            <Icon icon={ICON_NAME} />
          </IconButton>
        )}
        <Slide direction='down' in={open} mountOnEnter unmountOnExit>
          <SearchBarSlide setOpen={setOpen} ref={ref} />
        </Slide>
      </div>
    </ClickAwayListener>
  );
};

export default SearchBar;
