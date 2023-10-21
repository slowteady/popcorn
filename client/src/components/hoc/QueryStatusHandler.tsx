import { Box, styled } from '@mui/material';
import { QueryStatus } from 'react-query';
import { ReactNodeProps } from '../../types/global';
import Loading from '../common/Loading';
import { IconMsg } from '../common/icon/IconMsg';

interface QueryStatusHandlerProps extends ReactNodeProps {
  status: QueryStatus;
}

const ERORR_MESSAGE = '데이터 호출에 실패하였습니다.';
const STATUS_LOADING = 'loading';
const STATUS_ERROR = 'error';

const QueryStatusHandler = ({ status, children }: QueryStatusHandlerProps) => {
  if (status === STATUS_LOADING) {
    return <Loading />;
  } else if (status === STATUS_ERROR) {
    return (
      <StyledDiv>
        <IconMsg icon='ph:file-x-bold' width={128} message={ERORR_MESSAGE} />
      </StyledDiv>
    );
  }

  return <>{children}</>;
};

const StyledDiv = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%'
});

export default QueryStatusHandler;
