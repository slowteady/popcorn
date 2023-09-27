import { Icon } from '@iconify/react';
import { Typography } from '@mui/material';

interface DataErrorIconProps {
  icon: string;
  size: number;
  message: string;
}

export const DataErrorIcon = ({ icon, size, message }: DataErrorIconProps) => {
  return (
    <>
      <Icon icon={icon} width={size} height={size} />
      <Typography m={2}>{message}</Typography>
    </>
  );
};
