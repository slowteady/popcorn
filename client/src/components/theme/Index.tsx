import { CssBaseline, ThemeProvider as MUIThemeProvider, StyledEngineProvider, createTheme } from '@mui/material';
import { useMemo } from 'react';
import { ReactNodeProps } from '../../types/global';
import GlobalStyles from './GlobalStyles';
import palette from './options/palette';
import shadows from './options/shadows';
import typography from './options/typography';

const ThemeProvider = ({ children }: ReactNodeProps) => {
  const options = { palette, shape: { borderRadius: 6 }, typography, shadows: shadows() };
  const theme = useMemo(() => createTheme(options), [options]);

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
