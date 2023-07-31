import { Box } from "@mui/material";
import React, { FunctionComponent, memo } from "react";
import { NodataProps } from "../../../types/state/movies/moviesTypes";
import Iconify from "../../iconify/Iconify";

// ----------------------------------------------------------------------
// 노데이터 페이지 컴포넌트
// ----------------------------------------------------------------------

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

export default memo(Nodata);
