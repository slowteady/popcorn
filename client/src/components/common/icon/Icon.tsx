import { IconifyIcon, Icon as iconComponent } from '@iconify/react';
import { Box, SxProps } from '@mui/material';
import { ComponentPropsWithoutRef, memo } from 'react';

type BoxProps = ComponentPropsWithoutRef<typeof Box>;

interface IconProps extends BoxProps {
  icon: string | IconifyIcon;
  width?: number;
  sx?: SxProps;
}

const Icon = ({ icon, width = 20, sx, ...other }: IconProps) => {
  return <Box component={iconComponent} icon={icon} sx={{ width, height: width, ...sx }} {...other} />;
};

export default memo(Icon);
