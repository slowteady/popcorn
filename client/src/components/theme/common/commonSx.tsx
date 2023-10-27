import { InputAdornment, SxProps } from '@mui/material';
import Icon from '../../common/icon/Icon';

interface InputPropsObject {
  icon: string;
  sx?: SxProps;
}

export const InputProps = ({ icon, sx }: InputPropsObject) => ({
  startAdornment: (
    <InputAdornment position='start'>
      <Icon icon={icon} sx={{ ...sx }} />
    </InputAdornment>
  )
});
