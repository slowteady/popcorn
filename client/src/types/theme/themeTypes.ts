import { Palette, Theme } from "@mui/material";
import { ReactNode } from "react";
import customShadows from "../../theme/customShadows";

// ----------------------------------------------------------------------

export interface ThemeProviderProps {
  children: ReactNode;
}

interface CustomPalette extends Palette {
  background: Palette['background'] & {
    neutral?: string;
  };
}

export interface CustomTheme extends Theme {
  palette: CustomPalette;
  customShadows?: ReturnType<typeof customShadows>;
}
