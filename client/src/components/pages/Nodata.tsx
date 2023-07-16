import { IconifyIcon } from "@iconify/react";
import { Box, SxProps } from "@mui/material";
import React, { FunctionComponent } from "react";
import Iconify from "../iconify/Iconify";

interface NodataProps {
  msg?: string;
  icon: string | IconifyIcon;
  width?: number;
  sx?: SxProps;
  containerSx?: SxProps;
}

const Nodata: FunctionComponent<NodataProps> = ({
  msg,
  width = 20,
  sx,
  icon,
  containerSx,
  ...other
}) => {
  return (
    <Box sx={{ ...containerSx }}>
      <Box sx={{ width, height: width, ...sx }} {...other}>
        <Iconify icon={icon} />
      </Box>
      <Box sx={{ width, height: width, ...sx }} {...other}>
        {msg}
      </Box>
    </Box>
  );
};

export default Nodata;
