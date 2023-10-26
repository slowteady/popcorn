import { TableHead as MuiTableHead, SxProps, TableCell, TableRow } from '@mui/material';
import { TableHeaderConfig } from '../../../types/layout';

interface TableHeadProps {
  header: TableHeaderConfig[];
  sx?: SxProps;
}

const TableHead = ({ header, sx }: TableHeadProps) => {
  return (
    <MuiTableHead>
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
    </MuiTableHead>
  );
};

export default TableHead;
