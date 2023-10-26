import { TableCell as MUITableCell, SxProps, Typography, styled } from '@mui/material';
import { MouseEventHandler } from 'react';
import { ReactNodeProps } from '../../../types/global';

interface TableCellProps extends ReactNodeProps {
  sx?: SxProps;
  onClick?: MouseEventHandler;
}

const TableCell = ({ children, sx, onClick }: TableCellProps) => {
  return (
    <CenterTableCell>
      <Typography variant='subtitle2' noWrap sx={{ ...sx }} onClick={onClick}>
        {children}
      </Typography>
    </CenterTableCell>
  );
};

const CenterTableCell = styled(MUITableCell)(() => ({
  textAlign: 'center'
}));

export default TableCell;
