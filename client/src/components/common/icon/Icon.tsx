import { IconifyIcon, Icon as iconComponent } from '@iconify/react';
import { Box, SxProps } from '@mui/material';

interface IconProps {
  icon: string | IconifyIcon;
  width?: number;
  sx?: SxProps;
}

const Icon = ({ icon, width = 20, sx, ...other }: IconProps) => {
  return <Box component={iconComponent} icon={icon} sx={{ width, height: width, ...sx }} {...other} />;
};

export default Icon;
