import { Box, SxProps, styled } from '@mui/material';
import { QueryStatus } from 'react-query';
import { ReactNodeProps } from '../../types/global';
import Loading from '../common/Loading';
import { IconMsg } from '../common/icon/IconMsg';

interface QueryStatusHandlerProps extends ReactNodeProps {
  status: QueryStatus;
  sx?: SxProps;
}

const ERROR_MESSAGE = '데이터 호출에 실패하였습니다.';
const STATUS_LOADING = 'loading';
const STATUS_ERROR = 'error';
const DEFAULT_ICON = 'ph:file-x-bold';

const QueryStatusHandler = ({ status, children, sx }: QueryStatusHandlerProps) => {
  if (status === STATUS_LOADING) {
    return (
      <StyledDiv sx={{ ...sx }}>
        <Loading />
      </StyledDiv>
    );
  } else if (status === STATUS_ERROR) {
    return (
      <StyledDiv sx={{ ...sx }}>
        <IconMsg icon={DEFAULT_ICON} width={128} message={ERROR_MESSAGE} />
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
