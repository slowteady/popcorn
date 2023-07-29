import { CustomTheme } from "../../types/layout/theme/themeTypes";

// ----------------------------------------------------------------------

export default function Autocomplete(theme: CustomTheme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows ? theme.customShadows.z20 : "",
        },
      },
    },
  };
}
