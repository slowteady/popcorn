import { Button, Container, Stack, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/common/icon/Icon';
import IconLayerButton from '../../../components/layouts/button/IconLayerButton';
import CollectionAddBody from '../../../components/main/collection/add/CollectionAddBody';
import CollectionListBody from '../../../components/main/collection/list/CollectionListBody';
import paths from '../../../config/routes/paths';

const CART_ICON = 'el:shopping-cart-sign';
const LIST_ICON = 'ph:list-fill';
const PAGE_TITLE = 'Collection';

const { main } = paths;
const { index } = main.collection;

const CollectionAdd = () => {
  const navigate = useNavigate();

  const naviToList = () => {
    navigate(`${main}${index}`);
  };

  return (
    <Container>
      <Typography variant='h4' sx={{ mb: 3 }}>
        {PAGE_TITLE}
      </Typography>
      <FlexStack>
        <IconLayerButton
          icon={CART_ICON}
          width={35}
          anchorOrigin={{ vertical: 'bottom', horizontal: -200 }}
          transformOrigin={{ vertical: 'top', horizontal: 200 }}
          sx={{ mr: 2 }}
        >
          <CollectionListBody />
        </IconLayerButton>
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
