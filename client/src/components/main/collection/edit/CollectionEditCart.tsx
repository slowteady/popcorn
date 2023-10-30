import { Button, Grid, Pagination, TableContainer, TextField, Typography, styled } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { SUCCESS_CODE } from '../../../../api/code';
import { ADD_TABLE_CONF } from '../../../../config/layout/tableConfig';
import paths from '../../../../config/routes/paths';
import { editCollection } from '../../../../service/collectionService';
import { checkedMoviesState, collectionTitle } from '../../../../state/collectionState';
import { customAlert } from '../../../../utils/customAlert';
import { errorHandler } from '../../../../utils/exceptionHandler';
import { strValidation } from '../../../../utils/validation';
import CustomTable from '../../../layouts/table/CustomTable';
import CollectionAddTableBody from '../add/CollectionAddTableBody';

const { main } = paths.main;
const { index, edit } = paths.main.collection;
const { ROWSPERPAGE, TABLE_HEADER } = ADD_TABLE_CONF;
const FIRST_PAGE = 1;
const EMPTY_TITLE_MESSAGE = '제목을 입력해주세요';
const EMPTY_MOVIES_MESSAGE = '목록을 한 개 이상 추가해주세요';
const SUCCESS_EDIT_MESSAGE = '수정에 성공하였습니다';
const SUCCESS_STATUS = 'success';
const NO_CACHE_KEY = 'getCollectionDetail';

const CollectionEditCart = () => {
  const checkedMovies = useRecoilValue(checkedMoviesState);
  const resetCheckedMovies = useResetRecoilState(checkedMoviesState);
  const preTitle = useRecoilValue(collectionTitle);
  const [title, setTitle] = useState(preTitle);
  const [page, setPage] = useState(FIRST_PAGE);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id') || '';

  const editMutation = useMutation(editCollection, {
    onSuccess: (response) => {
      const { data, status } = response;
      if (status === SUCCESS_CODE && data.isSuccess) {
        customAlert(SUCCESS_EDIT_MESSAGE, SUCCESS_STATUS);
        resetCheckedMovies();
        queryClient.invalidateQueries(NO_CACHE_KEY);
        navigate(`${main}${index}`);
      }
    },
    onError: (error: Error) => {
      errorHandler(error);
    }
  });
  const changePage = (e: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  const writeTitle = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    setTitle(currentTarget.value);
  };

  const pageCount = () => {
    return checkedMovies.length > 0 ? Math.ceil(checkedMovies.length / ROWSPERPAGE) : FIRST_PAGE;
  };

  const doEdit = () => {
    if (strValidation(title).isEmpty()) {
      customAlert(EMPTY_TITLE_MESSAGE);
      return;
    }

    if (checkedMovies && checkedMovies.length > 0) {
      const body = { id, collectionTitle: title, movie: checkedMovies };
      editMutation.mutate(body);
    } else {
      customAlert(EMPTY_MOVIES_MESSAGE);
    }
  };

  return (
    <Grid sx={containerSx}>
      <Label>제목</Label>
      <TextField required fullWidth size='small' onChange={writeTitle} value={title} defaultValue={title} />
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
        <Button onClick={doEdit} size='small' variant='contained' sx={buttonSx}>
          수정
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

export default CollectionEditCart;
