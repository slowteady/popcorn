import { Card, Pagination, Table, TableContainer, styled } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useQuery } from 'react-query';
import { LIST_TABLE_CONF } from '../../../../config/layout/tableConfig';
import { getCollection } from '../../../../service/collectionService';
import QueryStatusHandler from '../../../hoc/QueryStatusHandler';
import TableBody from '../../../layouts/table/TableBody';
import TableHead from '../../../layouts/table/TableHead';

const { ROWSPERPAGE, TABLE_HEADER } = LIST_TABLE_CONF;
const FIRST_PAGE = 1;

const CollectionBoard = () => {
  const [page, setPage] = useState(FIRST_PAGE);
  const { data, status } = useQuery(['getCollection', page], () => getCollection(page, ROWSPERPAGE));

  const changePage = (e: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  return (
    <QueryStatusHandler status={status}>
      <CollectionCard>
        <TableContainer>
          <Table size='medium'>
            <TableHead header={TABLE_HEADER} sx={tableHeadSx} />
            {data && <TableBody collections={data} />}
          </Table>
        </TableContainer>
        <Pagination
          onChange={changePage}
          page={page}
          count={data ? data.data.totalPages : FIRST_PAGE}
          size='medium'
          color='primary'
          sx={pagiNationSx}
        />
      </CollectionCard>
    </QueryStatusHandler>
  );
};

const CollectionCard = styled(Card)(({ theme }) => ({
  maxHeight: '400px',
  margin: theme.spacing(3, 0)
}));

const pagiNationSx = {
  display: 'flex',
  justifyContent: 'right',
  m: 1
};

const tableHeadSx = {
  backgroundColor: '#e1f0ff',
  color: '#424647',
  fontWeight: 'bold'
};

export default CollectionBoard;
