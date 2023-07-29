import { CssBaseline, Shadows } from "@mui/material";
import {
    ThemeProvider as MUIThemeProvider,
    StyledEngineProvider,
    createTheme,
} from "@mui/material/styles";
import React, { useMemo } from "react";
import { ThemeProviderProps } from "../types/layout/theme/themeTypes";
import customShadows from "./customShadows";
import GlobalStyles from "./globalStyles";
import ComponentsOverrides from "./overrides";
import palette from "./palette";
import shadows from "./shadows";
import { typography } from "./typography";

// ----------------------------------------------------------------------
// 테마
// ----------------------------------------------------------------------

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 6 },
      typography,
      customShadows: customShadows(),
      shadows: shadows() as Shadows,
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
