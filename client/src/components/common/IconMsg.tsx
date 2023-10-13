import { Icon } from '@iconify/react';
import { Typography } from '@mui/material';

interface IconMsgProps {
  icon: string;
  size: number;
  message: string;
}

export const IconMsg = ({ icon, size, message }: IconMsgProps) => {
  return (
    <>
      <Icon icon={icon} width={size} height={size} />
      <Typography m={2}>{message}</Typography>
    </>
  );
};
