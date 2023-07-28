import { alpha } from "@mui/material";

// ----------------------------------------------------------------------
// 스타일 유틸
// ----------------------------------------------------------------------

interface BgBlurProps {
  color?: string;
  blur?: number;
  opacity?: number;
  imgUrl?: string;
}

export const bgBlur = (props: BgBlurProps) => {
  const color = props?.color || "#000000";
  const blur = props?.blur || 6;
  const opacity = props?.opacity || 0.8;

  return {
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    backgroundColor: alpha(color, opacity),
  };
};