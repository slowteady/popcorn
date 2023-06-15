import { Palette, Theme } from "@mui/material";
import customShadows from "../../theme/customShadows";
import { ReactNode } from "react";

// ----------------------------------------------------------------------

export interface ThemeProviderProps {
  children: ReactNode;
}

interface CustomPalette extends Palette {
  background: Palette['background'] & {
    neutral: string;
  };
}

export interface CustomTheme extends Theme {
  palette: CustomPalette;
  customShadows?: ReturnType<typeof customShadows>;
}
