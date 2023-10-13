import { Icon } from '@iconify/react';
import { Typography } from '@mui/material';

interface IconMsgProps {
  icon: string;
  width: number;
  message: string;
}

export const IconMsg = ({ icon, width, message }: IconMsgProps) => {
  return (
    <>
      <Icon icon={icon} width={width} height={width} />
      <Typography m={2}>{message}</Typography>
    </>
  );
};
