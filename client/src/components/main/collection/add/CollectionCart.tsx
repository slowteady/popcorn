import { Button, Grid, Pagination, TableContainer, TextField, Typography, styled } from '@mui/material';
import { ChangeEvent, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { SUCCESS_CODE } from '../../../../api/code';
import { ADD_TABLE_CONF } from '../../../../config/layout/tableConfig';
import paths from '../../../../config/routes/paths';
import { registerCollection } from '../../../../service/collectionService';
import { checkedMoviesState } from '../../../../state/collectionState';
import { customAlert } from '../../../../utils/customAlert';
import { errorHandler } from '../../../../utils/exceptionHandler';
import { strValidation } from '../../../../utils/validation';
import CustomTable from '../../../layouts/table/CustomTable';
import CollectionAddTableBody from './CollectionAddTableBody';

const { main } = paths.main;
const { index } = paths.main.collection;
const { ROWSPERPAGE, TABLE_HEADER } = ADD_TABLE_CONF;
const FIRST_PAGE = 1;
const EMPTY_TITLE_MESSAGE = '제목을 입력해주세요';
const EMPTY_MOVIES_MESSAGE = '목록을 한 개 이상 추가해주세요';

const CollectionCart = () => {
  const checkedMovies = useRecoilValue(checkedMoviesState);
  const [page, setPage] = useState(FIRST_PAGE);
  const titleRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const registerMutation = useMutation(registerCollection, {
    onSuccess: (response) => {
      const { data, status } = response;
      if (status === SUCCESS_CODE && data.isSuccess) {
        navigate(`${main}${index}`);
      } else {
        throw new Error();
      }
    },
    onError: (error: Error) => {
      errorHandler(error);
    }
  });

  const changePage = (e: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  const pageCount = () => {
    return checkedMovies.length > 0 ? Math.ceil(checkedMovies.length / ROWSPERPAGE) : FIRST_PAGE;
  };

  const doRegister = () => {
    const title = titleRef.current;

    if (title && strValidation(title.value).isEmpty()) {
      customAlert(EMPTY_TITLE_MESSAGE);
      return;
    }

    if (checkedMovies && checkedMovies.length > 0 && title?.value) {
      const body = { collectionTitle: title.value, movie: checkedMovies };
      registerMutation.mutate(body);
    } else {
      customAlert(EMPTY_MOVIES_MESSAGE);
    }
  };

  return (
    <Grid sx={containerSx}>
      <Label>제목</Label>
      <TextField required fullWidth size='small' inputRef={titleRef} />
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
        <Button onClick={doRegister} size='small' variant='contained' sx={buttonSx}>
          등록
        </Button>
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
  position: 'relative',
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

const buttonSx = {
  mt: 1,
  position: 'absolute',
  marginBottom: 1,
  bottom: 7
};

export default CollectionCart;
