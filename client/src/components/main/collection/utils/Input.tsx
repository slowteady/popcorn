import { SxProps, TextField } from '@mui/material';
import { ChangeEvent, ComponentPropsWithoutRef, KeyboardEvent, RefObject, forwardRef, useState } from 'react';

type TextFieldProps = ComponentPropsWithoutRef<typeof TextField>;

interface InputProps extends TextFieldProps {
  sx?: SxProps;
  ref?: RefObject<HTMLInputElement>;
  setKeyword: (value: string) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ sx, setKeyword, ...other }, ref) => {
  const [localKeyword, setLocalKeyword] = useState('');

  const changeKeyword = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    setLocalKeyword(currentTarget.value);
  };

  const doEnter = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      setKeyword(localKeyword);
    }
  };

  return (
    <TextField
      onChange={changeKeyword}
      value={localKeyword}
      onKeyDown={doEnter}
      inputRef={ref}
      sx={{ ...sx }}
      {...other}
    />
  );
});

export default Input;
