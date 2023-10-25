import { Box, Button, InputAdornment, SxProps, TextField, styled } from '@mui/material';
import { ChangeEvent, KeyboardEvent, memo, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { strValidation } from '../../../utils/validation';
import Icon from '../../common/icon/Icon';

interface SearchInputProps {
  keyword: string;
  sx?: SxProps;
}

const PLACEHOLDER = '영화를 검색해주세요';
const SEARCH_ICON = 'eva:search-fill';

const SearchInput = ({ keyword, sx }: SearchInputProps) => {
  const [, SetURLSearchParams] = useSearchParams();
  const [localKeyword, setLocalKeyword] = useState('');

  useEffect(() => {
    if (strValidation(keyword).isNotEmpty()) {
      setLocalKeyword(keyword);
    }
  }, [keyword]);

  const changeKeyword = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    setLocalKeyword(currentTarget.value);
  };

  const doSearch = () => {
    SetURLSearchParams({ query: localKeyword });
  };

  const doEnter = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      doSearch();
    }
  };

  return (
    <InputBox sx={{ ...sx }}>
      <TextField
        placeholder={PLACEHOLDER}
        onChange={changeKeyword}
        onKeyDown={doEnter}
        value={localKeyword}
        sx={{ width: 280 }}
        InputProps={InputProps()}
      />
      <Button onClick={doSearch} variant='contained' sx={{ m: 2.5 }}>
        Search
      </Button>
    </InputBox>
  );
};

const InputProps = () => ({
  startAdornment: (
    <InputAdornment position='start'>
      <Icon icon={SEARCH_ICON} sx={iconSx} />
    </InputAdornment>
  )
});

const InputBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center'
}));

const iconSx = {
  ml: 1,
  width: 20,
  height: 20,
  color: 'text.disabled'
};

export default memo(SearchInput);
