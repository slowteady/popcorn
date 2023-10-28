import { SxProps, TableCell, Typography, styled } from '@mui/material';
import { MouseEventHandler } from 'react';
import { ReactNodeProps } from '../../../types/global';

interface CustomTableCellProps extends ReactNodeProps {
  sx?: SxProps;
  onClick?: MouseEventHandler;
}

const CustomTableCell = ({ children, sx, onClick }: CustomTableCellProps) => {
  return (
    <CenterTableCell>
      <Typography variant='subtitle2' noWrap sx={{ ...sx }} onClick={onClick}>
        {children}
      </Typography>
    </CenterTableCell>
  );
};

const CenterTableCell = styled(TableCell)(() => ({
  textAlign: 'center'
}));

export default CustomTableCell;
