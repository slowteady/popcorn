import { Card, Pagination, styled } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useQuery } from 'react-query';
import { LIST_TABLE_CONF } from '../../../../config/layout/tableConfig';
import { getCollection } from '../../../../service/collectionService';
import QueryStatusHandler from '../../../hoc/QueryStatusHandler';
import CustomTable from '../../../layouts/table/CustomTable';
import CollectionListTableBody from './CollectionListTableBody';

const { ROWSPERPAGE, TABLE_HEADER } = LIST_TABLE_CONF;
const FIRST_PAGE = 1;

const CollectionList = () => {
  const [page, setPage] = useState(FIRST_PAGE);
  const { data, status } = useQuery(['getCollection', page], () => getCollection(page, ROWSPERPAGE));

  const changePage = (e: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  return (
    <QueryStatusHandler status={status}>
      <CollectionCard>
        {data && (
          <>
            <CustomTable tableHeader={TABLE_HEADER}>
              {data && <CollectionListTableBody collections={data} />}
            </CustomTable>
            <Pagination
              onChange={changePage}
              page={page}
              count={data ? data.data.totalPages : FIRST_PAGE}
              size='medium'
              color='primary'
              sx={pagiNationSx}
            />
          </>
        )}
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

export default CollectionList;
