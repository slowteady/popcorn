import { Breakpoint, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// ----------------------------------------------------------------------
// 반응형 구현을 위한 hooks
// ----------------------------------------------------------------------

interface useResponsiveProps {
  query: "up" | "down" | "between";
  start: Breakpoint;
  end?: number | Breakpoint;
}

export const useResponsive = ({ query, start, end }: useResponsiveProps) => {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start));
  const mediaDown = useMediaQuery(theme.breakpoints.down(start));
  let mediaBetween = false;

  const mediaOnly = useMediaQuery(theme.breakpoints.only(start));

  if (query === "up") {
    return mediaUp;
  }

  if (query === "down") {
    return mediaDown;
  }

  if (query === "between" && end) {
    mediaBetween = useMediaQuery(theme.breakpoints.between(start, end));
    return mediaBetween;
  }

  return mediaOnly;
};


