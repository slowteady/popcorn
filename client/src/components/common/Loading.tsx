import { Box, CircularProgress, styled } from '@mui/material';

const Loading = () => {
  return (
    <CenterDiv>
      <CircularProgress />
    </CenterDiv>
  );
};

const CenterDiv = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  height: '100%',
  width: '100%'
});

export default Loading;
