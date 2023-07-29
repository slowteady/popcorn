import { Icon } from "@iconify/react";
import { Box } from "@mui/material";
import React, { FunctionComponent } from "react";
import { IconifyProps } from "../../types/layout/icon/iconTypes";

// ----------------------------------------------------------------------
// 아이콘 사용 컴포넌트
// ----------------------------------------------------------------------

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
