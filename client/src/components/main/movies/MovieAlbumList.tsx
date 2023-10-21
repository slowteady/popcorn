import { Grid } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { filteredPath } from '../../../state/moviesState';
import { IconMsg } from '../../common/icon/IconMsg';
import QueryStatusHandler from '../../hoc/QueryStatusHandler';

const NODATA_MESSAGE = '데이터가 없습니다.';
const NODATA_ICON = 'material-symbols:no-sim-outline-rounded';

const MovieAlbumList = () => {
  const path = useRecoilValue(filteredPath);

  return (
    <QueryStatusHandler status={'error'} sx={centerSx}>
      <Grid container spacing={2}>
        <IconMsg icon={NODATA_ICON} message={NODATA_MESSAGE} />
      </Grid>
    </QueryStatusHandler>
  );
};

const centerSx = {
  height: '50vh'
};

export default MovieAlbumList;
