import { Button, Container, Stack, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import paths from '../../../config/routes/paths';
import Icon from '../../common/icon/Icon';
import CollectionListBody from './list/CollectionListBody';

const ADD_BUTTON_ICON = 'eva:plus-fill';

const { main } = paths.main;
const { index, add } = paths.main.collection;

const CollectionIndex = () => {
  const navigate = useNavigate();

  const naviToAdd = () => {
    navigate(`${main}${index}${add}`);
  };

  return (
    <Container sx={{ pl: '0 !important' }}>
      <FlexStack>
        <Button onClick={naviToAdd} variant='contained' startIcon={<Icon icon={ADD_BUTTON_ICON} />}>
          New Collection
        </Button>
      </FlexStack>
      <CollectionListBody />
    </Container>
  );
};

const FlexStack = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end'
}));

export default CollectionIndex;
