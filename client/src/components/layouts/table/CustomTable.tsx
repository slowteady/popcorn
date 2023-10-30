import { SxProps, Table, TableContainer } from '@mui/material';
import { ReactNodeProps } from '../../../types/global';
import { TableHeaderConfig } from '../../../types/layout';
import CustomTableHead from './CustomTableHead';

interface CustomTableProps extends ReactNodeProps {
  tableHeader: TableHeaderConfig[];
  size?: 'small' | 'medium';
  sx?: SxProps;
}

const CustomTable = ({ children, size = 'medium', tableHeader, sx }: CustomTableProps) => {
  return (
    <TableContainer>
      <Table size={size}>
        <CustomTableHead header={tableHeader} sx={{ ...tableHeadSx, ...sx }} />
        {children}
      </Table>
    </TableContainer>
  );
};

const tableHeadSx = {
  backgroundColor: '#e1f0ff',
  color: '#424647',
  fontWeight: 'bold'
};

export default CustomTable;
