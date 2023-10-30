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
  height: '100%',
  width: '100%'
});

export default Loading;
