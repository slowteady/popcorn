import { Grid, Pagination, TableContainer, TextField, Typography, styled } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { ADD_TABLE_CONF } from '../../../../config/layout/tableConfig';
import { checkedMoviesState } from '../../../../state/collectionState';
import CustomTable from '../../../layouts/table/CustomTable';
import CollectionAddTableBody from './CollectionAddTableBody';

const { ROWSPERPAGE, TABLE_HEADER } = ADD_TABLE_CONF;
const FIRST_PAGE = 1;

const CollectionCart = () => {
  const checkedMovies = useRecoilValue(checkedMoviesState);
  const [page, setPage] = useState(FIRST_PAGE);

  const changePage = (e: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  const pageCount = () => {
    return checkedMovies.length > 0 ? Math.ceil(checkedMovies.length / ROWSPERPAGE) : FIRST_PAGE;
  };

  return (
    <Grid sx={containerSx}>
      <Label>제목</Label>
      <TextField required fullWidth size='small' />
      <Label>리스트</Label>
      <TableContainer>
        <CustomTable tableHeader={TABLE_HEADER} size='small'>
          <CollectionAddTableBody page={page} />
        </CustomTable>
        <Pagination
          onChange={changePage}
          page={page}
          count={pageCount()}
          boundaryCount={1}
          siblingCount={1}
          size='small'
          color='primary'
          sx={pagiNationSx}
        />
      </TableContainer>
    </Grid>
  );
};

const Label = styled(Typography)(({ theme }) => ({
  color: 'black',
  fontSize: 15,
  fontWeight: 'bold',
  margin: theme.spacing(1.5, 0)
}));

const containerSx = {
  maxHeight: '430px',
  minWidth: '300px !important',
  maxWidth: '600px !important',
  padding: '0 24px 10px'
};

const pagiNationSx = {
  display: 'flex',
  justifyContent: 'right',
  m: 1
};

export default CollectionCart;
