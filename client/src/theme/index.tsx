import React, { useMemo } from "react";
import palette from "./palette";
import typography from "./typography";
import customShadows from "./customShadows";
import shadows from "./shadows";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
import GlobalStyles from "./globalStyles";
import { ThemeProviderProps } from "../types/theme/themeTypes";
import ComponentsOverrides from "./overrides";

// ----------------------------------------------------------------------
// 테마
// ----------------------------------------------------------------------

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 6 },
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = ComponentsOverrides(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
