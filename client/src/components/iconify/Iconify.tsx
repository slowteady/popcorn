import React, { FunctionComponent } from "react";
import { Box, SxProps } from "@mui/material";
import { Icon, IconifyIcon } from "@iconify/react";

// ----------------------------------------------------------------------
// 아이콘
// ----------------------------------------------------------------------

interface IconifyProps {
  icon: string | IconifyIcon;
  width?: number;
  sx?: SxProps;
}

const Iconify: FunctionComponent<IconifyProps> = ({
  icon,
  width = 20,
  sx,
  ...other
}) => {
  return (
    <Box
      component={Icon}
      icon={icon}
      sx={{ width, height: width, ...sx }}
      {...other}
    />
  );
};

export default Iconify;
