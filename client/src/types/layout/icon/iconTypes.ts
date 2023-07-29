import { IconifyIcon } from "@iconify/react";
import { SxProps } from "@mui/material";

// ----------------------------------------------------------------------
// 아이콘 타입
// ----------------------------------------------------------------------

export interface IconifyProps {
  icon: string | IconifyIcon;
  width?: number;
  sx?: SxProps;
  onClick?: React.MouseEventHandler;
}
