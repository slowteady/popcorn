import { TableCellProps } from '@mui/material';

export interface LeftMenuProps {
  openNav: boolean;
  onCloseNav: () => void;
}

export interface TableHeaderConfig {
  id: string;
  label: string;
  width: string;
  align?: TableCellProps['align'];
}
