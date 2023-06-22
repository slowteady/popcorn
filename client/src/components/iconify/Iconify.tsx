import React, { FunctionComponent } from "react";
import { Box, SxProps } from "@mui/material";
import { Icon } from "@iconify/react";

// ----------------------------------------------------------------------
// 아이콘
// ----------------------------------------------------------------------

interface IconifyProps {
  icon: string | number;
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
    <Box component={Icon} sx={{ width, height: width, ...sx }} {...other} />
  );
};

export default Iconify;
