import { alpha } from "@mui/material/styles";
import { CustomTheme } from "../../types/theme/themeTypes";

// ----------------------------------------------------------------------

export default function Button(theme: CustomTheme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            boxShadow: "none",
          },
        },
        sizeLarge: {
          height: 48,
        },
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.customShadows ? theme.customShadows.z8 : "",
          "&:hover": {
            backgroundColor: theme.palette.grey[400],
          },
        },
        containedPrimary: {
          boxShadow: theme.customShadows ? theme.customShadows.primary : "",
        },
        containedSecondary: {
          boxShadow: theme.customShadows ? theme.customShadows.secondary : "",
        },
        outlinedInherit: {
          border: `1px solid ${alpha(theme.palette.grey[500], 0.32)}`,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
