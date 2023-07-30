import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { memo, useMemo } from "react";
import { useResponsiveProps } from "../types/layout/layoutTypes";

// ----------------------------------------------------------------------
// 반응형 구현을 위한 hooks
// ----------------------------------------------------------------------

export const useResponsive = memo(
  ({ query, start, end }: useResponsiveProps) => {
    const theme = useTheme();

    const mediaUp = useMediaQuery(theme.breakpoints.up(start));
    const mediaDown = useMediaQuery(theme.breakpoints.down(start));
    let mediaBetween = false;

    const mediaOnly = useMediaQuery(theme.breakpoints.only(start));

    return useMemo(() => {
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
    }, [query, start, end, mediaUp, mediaDown, mediaBetween, mediaOnly]);
  }
);
