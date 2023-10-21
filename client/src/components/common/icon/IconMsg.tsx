import { Icon } from '@iconify/react';
import { Box, SxProps, Typography } from '@mui/material';

interface IconMsgProps {
  icon: string;
  width?: number;
  message: string;
  sx?: SxProps;
  fontSx?: SxProps;
}

export const IconMsg = ({ icon, width = 48, message, sx = defaultSx, fontSx }: IconMsgProps) => {
  return (
    <Box sx={{ ...sx }}>
      <Icon icon={icon} width={width} height={width} />
      <Typography m={2} sx={{ ...fontSx }}>
        {message}
      </Typography>
    </Box>
  );
};

const defaultSx = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
};
