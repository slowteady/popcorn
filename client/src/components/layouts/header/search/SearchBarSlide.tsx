import { Button, Input, InputAdornment, styled } from '@mui/material';
import { ChangeEvent, KeyboardEvent, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { HEADER_DESKTOP, HEADER_MOBILE } from '../../../../config/layout/headerConfig';
import paths from '../../../../config/routes/paths';
import { bgBlur } from '../../../../utils/styleUtils';
import { strValidation } from '../../../../utils/validation';
import Icon from '../../../common/icon/Icon';
import { ICON_NAME } from './SearchBar';

interface SearchBarSlideProps {
  setOpen: (value: boolean) => void;
}

const INPUT_PLACEHOLDER = '영화를 검색해주세요';
const { main, search } = paths.main;

const SearchBarSlide = forwardRef<HTMLInputElement, SearchBarSlideProps>(({ setOpen }, ref) => {
  const navigate = useNavigate();

  const doSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const { value } = e.currentTarget;
      if (strValidation(value).isNotEmpty()) {
        navigate(`${main}${search}`, { state: { query: value } });
        setOpen(false);
      }
    }
  };

  const writeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const newValue = strValidation(value).notSpecialChars();
    e.currentTarget.value = newValue;
  };

  const clickSearchBtn = () => {
    setOpen(false);
  };

  return (
    <StyledSearchbar>
      <Input
        onKeyDown={doSearch}
        inputRef={ref}
        onChange={writeKeyword}
        placeholder={INPUT_PLACEHOLDER}
        autoFocus
        fullWidth
        disableUnderline
        startAdornment={
          <InputAdornment position='start'>
            <Icon icon={ICON_NAME} sx={iconSx} />
          </InputAdornment>
        }
        sx={inputSx}
      />
      <Button variant='contained' onClick={clickSearchBtn}>
        Search
      </Button>
    </StyledSearchbar>
  );
});

const StyledSearchbar = styled('div')(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  top: 0,
  left: 0,
  zIndex: 99,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  height: HEADER_MOBILE,
  padding: theme.spacing(0, 3),
  [theme.breakpoints.up('md')]: {
    height: HEADER_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}));

const iconSx = {
  color: 'text.disabled'
};

const inputSx = {
  mr: 1,
  fontWeight: 'fontWeightBold',
  '& input': {
    padding: '8px 0 5px'
  }
};

export default SearchBarSlide;
