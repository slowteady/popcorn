import { Button, Container, Stack, Typography, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { SUCCESS_CODE } from '../../../api/code';
import Icon from '../../../components/common/icon/Icon';
import QueryStatusHandler from '../../../components/hoc/QueryStatusHandler';
import CollectionAddBody from '../../../components/main/collection/add/CollectionAddBody';
import paths from '../../../config/routes/paths';
import { getPreCollection } from '../../../service/collectionService';
import { checkedMoviesState, collectionTitle } from '../../../state/collectionState';
import { errorHandler } from '../../../utils/exceptionHandler';

interface CollectionAddProps {
  isEdit?: boolean;
}

const LIST_ICON = 'ph:list-fill';
const PAGE_TITLE = 'Collection';

const { main } = paths.main;
const { index } = paths.main.collection;

const CollectionAdd = ({ isEdit = false }: CollectionAddProps) => {
  const setCheckedMovies = useSetRecoilState(checkedMoviesState);
  const setTitle = useSetRecoilState(collectionTitle);
  const resetCheckedMovies = useResetRecoilState(checkedMoviesState);
  const [enabled, setEnabled] = useState(false);
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id') || '';
  const navigate = useNavigate();

  const { status } = useQuery(['getPreCollection', id], () => getPreCollection(id), {
    onSuccess: (response) => {
      const { data, status } = response;
      if (status === SUCCESS_CODE && data.isSuccess) {
        const { movie, collectionTitle } = data.collection;
        setTitle(collectionTitle);
        setCheckedMovies(movie);
      }
    },
    onError: (error: Error) => {
      errorHandler(error);
    },
    enabled
  });

  useEffect(() => {
    resetCheckedMovies();
    if (isEdit) {
      setEnabled(true);
    }
  }, [isEdit]);

  const naviToList = () => {
    navigate(`${main}${index}`);
  };

  return (
    <QueryStatusHandler status={status}>
      <Container>
        <Typography variant='h4' sx={{ mb: 3 }}>
          {PAGE_TITLE}
        </Typography>
        <FlexStack>
          <Button
            onClick={naviToList}
            variant='contained'
            startIcon={<Icon icon={LIST_ICON} />}
            sx={{ backgroundColor: '#3e4857' }}
          >
            List
          </Button>
        </FlexStack>
        <CollectionAddBody />
      </Container>
    </QueryStatusHandler>
  );
};

const FlexStack = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  margin: theme.spacing(0, 2.5)
}));

export default CollectionAdd;
