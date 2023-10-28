import { SxProps, Table, TableContainer } from '@mui/material';
import { ReactNodeProps } from '../../../types/global';
import { TableHeaderConfig } from '../../../types/layout';
import CustomTableHead from './CustomTableHead';

interface CustomTableProps extends ReactNodeProps {
  tableHeader: TableHeaderConfig[];
  sx?: SxProps;
}

const CustomTable = ({ children, tableHeader, sx }: CustomTableProps) => {
  return (
    <TableContainer>
      <Table size='medium'>
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
