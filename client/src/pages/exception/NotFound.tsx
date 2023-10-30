import { Box, Button, Container, Typography, styled } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Helmet from '../../components/common/Helmet';
import paths from '../../config/routes/paths';
import img404 from '../../img/illustration_404.svg';

const PAGE_TITLE = '404 Page Not Found';

const { root } = paths;

const NotFound = () => {
  return (
    <>
      <Helmet text={PAGE_TITLE} />

      <Container>
        <StyledContent>
          <Typography variant='h4' paragraph>
            페이지를 찾지 못했어요!
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>유효한 페이지로 요청해주세요.</Typography>
          <Box component='img' src={img404} sx={imgBoxSx} />
          <Button to={root} size='large' variant='contained' component={RouterLink}>
            메인으로
          </Button>
        </StyledContent>
      </Container>
    </>
  );
};

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '75vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
  textAlign: 'center',
  alignItems: 'center'
}));

const imgBoxSx = {
  height: 260,
  mx: 'auto',
  my: { xs: 5, sm: 10 }
};

export default NotFound;
