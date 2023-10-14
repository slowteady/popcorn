import { ClickAwayListener, IconButton } from '@mui/material';
import { useRef, useState } from 'react';
import Icon from '../../../common/icon/Icon';
import SearchBarSlide from './SearchBarSlide';

// 1. 레이아웃 잡고 ref를 자식 컴포넌트에 전달
// 2. 클릭했을 때 나올 레이아웃이 자식 컴포넌트

const ICON_NAME = 'eva:search-fill';

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const openSearchSlide = () => {
    setOpen(true);
  };

  const closeSearchSlide = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={closeSearchSlide}>
      <>
        {!open && (
          <IconButton onClick={openSearchSlide}>
            <Icon icon={ICON_NAME} />
          </IconButton>
        )}
        <SearchBarSlide open={open} setOpen={setOpen} ref={ref} />
      </>
    </ClickAwayListener>
  );
};

export default SearchBar;
