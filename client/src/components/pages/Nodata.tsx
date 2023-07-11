import React, { FunctionComponent } from "react";
import { Box, SxProps } from "@mui/material";
import Iconify from "../iconify/Iconify";
import { IconifyIcon } from "@iconify/react";

interface NodataProps {
  msg: string;
  icon: string | IconifyIcon;
  width?: number;
  sx?: SxProps;
}

const Nodata: FunctionComponent<NodataProps> = ({
  msg,
  width = 20,
  sx,
  icon,
  ...other
}) => {
  return (
    <>
      <Iconify icon={icon} />
      <Box sx={{ width, height: width, ...sx }} {...other}>
        {msg}
      </Box>
      ;
    </>
  );
};

export default Nodata;
