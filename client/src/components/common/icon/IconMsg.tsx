import { Icon } from '@iconify/react';
import { Box, SxProps, Typography, styled } from '@mui/material';

interface IconMsgProps {
  icon: string;
  width?: number;
  message: string;
  sx?: SxProps;
  fontSx?: SxProps;
}

export const IconMsg = ({ icon, width = 48, message, sx, fontSx }: IconMsgProps) => {
  return (
    <StyledBox sx={{ ...sx }}>
      <Icon icon={icon} width={width} height={width} />
      <Typography m={2} sx={{ ...fontSx }}>
        {message}
      </Typography>
    </StyledBox>
  );
};

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%'
}));
