import { CustomTheme } from "../../types/layout/theme/themeTypes";

// ----------------------------------------------------------------------

export default function Tooltip(theme: CustomTheme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800],
        },
        arrow: {
          color: theme.palette.grey[800],
        },
      },
    },
  };
}
