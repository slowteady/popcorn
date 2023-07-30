// ----------------------------------------------------------------------
// 레이아웃 타입
// ----------------------------------------------------------------------

import { Breakpoint, SxProps, Theme } from "@mui/material";

export interface MenuProps {
  openNav: boolean;
  onCloseNav: () => void;
}

export interface Item {
  title: string;
  path: string;
  icon: string;
}

export interface ListProps {
  data: Item[];
}

export interface ItemProps {
  item: Item;
}

export interface HeaderProps {
  onOpenNav: () => void;
}

export interface useResponsiveProps {
  query: "up" | "down" | "between";
  start: Breakpoint;
  end?: number | Breakpoint;
}

export interface ListTableHeadLabelProps {
  id: string;
  label: string;
  alignRight: boolean;
}

export interface ListTableHeadProps {
  headLabel: ListTableHeadLabelProps[];
  isColList?: boolean;
  sx?: SxProps<Theme>;
}
