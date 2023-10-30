import { SxProps, TableCell, TableHead, TableRow } from '@mui/material';
import { TableHeaderConfig } from '../../../types/layout';

interface CustomTableHeadProps {
  header: TableHeaderConfig[];
  sx?: SxProps;
}

const CustomTableHead = ({ header, sx }: CustomTableHeadProps) => {
  return (
    <TableHead>
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
    </TableHead>
  );
};

export default CustomTableHead;
