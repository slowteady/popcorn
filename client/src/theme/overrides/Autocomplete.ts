import { CustomTheme } from "../../types/theme/themeTypes";

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
