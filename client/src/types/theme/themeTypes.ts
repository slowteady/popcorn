import { Palette, Theme, TypographyProps } from "@mui/material";
import { ReactNode } from "react";
import customShadows from "../../theme/customShadows";

// ----------------------------------------------------------------------
// 테마 타입 정의
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

export interface responsiveFontSizesProps {
  sm: number;
  md: number;
  lg: number;
}

export interface MovieDetailTypographyProps extends TypographyProps {
  children: React.ReactNode;
}