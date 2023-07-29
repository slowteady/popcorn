// ----------------------------------------------------------------------
// 레이아웃 타입
// ----------------------------------------------------------------------

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