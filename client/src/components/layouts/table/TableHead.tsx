import { TableHead as MUITableHead, SxProps, TableCell, TableRow } from '@mui/material';
import { TableHeaderConfig } from '../../../types/layout';

interface TableHeadProps {
  header: TableHeaderConfig[];
  sx?: SxProps;
}

const TableHead = ({ header, sx }: TableHeadProps) => {
  return (
    <MUITableHead>
      <TableRow>
        {header.map((head) => {
          const { id, label, width, align = 'center' } = head;

          return (
            <TableCell key={id} align={align} sx={{ width, ...sx }}>
              {label}
            </TableCell>
          );
        })}
      </TableRow>
    </MUITableHead>
  );
};

export default TableHead;
