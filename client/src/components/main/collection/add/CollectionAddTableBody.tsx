import { TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { MouseEvent } from 'react';
import { useRecoilState } from 'recoil';
import { ADD_TABLE_CONF } from '../../../../config/layout/tableConfig';
import { checkedMoviesState } from '../../../../state/collectionState';
import Icon from '../../../common/icon/Icon';

interface CollectionAddTableBodyProps {
  page: number;
}

const DELETE_ICON = 'eva:trash-2-outline';
const { ROWSPERPAGE } = ADD_TABLE_CONF;

const CollectionAddTableBody = ({ page }: CollectionAddTableBodyProps) => {
  const [checkedMovies, setCheckedMovies] = useRecoilState(checkedMoviesState);
  const startIndex = (page - 1) * ROWSPERPAGE;
  const endIndex = page * ROWSPERPAGE;

  const doDelete = (e: MouseEvent, id: number) => {
    e.stopPropagation();

    setCheckedMovies((prevCheckedMovies) => prevCheckedMovies.filter((movies) => movies.id !== id));
  };

  return (
    <TableBody>
      {checkedMovies.length > 0 &&
        checkedMovies.slice(startIndex, endIndex).map((movie) => {
          const { id, title, release_date } = movie;

          return (
            <TableRow hover key={id} tabIndex={-1} role='checkbox'>
              <TableCell align='left'>
                <Icon onClick={(e) => doDelete(e, id)} icon={DELETE_ICON} sx={deleteIconSx} />
              </TableCell>
              <TableCell align='left'>
                <Typography variant='subtitle2' noWrap sx={titleSx}>
                  {title}
                </Typography>
              </TableCell>
              <TableCell align='left'>
                <Typography variant='subtitle2' noWrap>
                  {release_date}
                </Typography>
              </TableCell>
            </TableRow>
          );
        })}
    </TableBody>
  );
};

const deleteIconSx = {
  mr: 2,
  cursor: 'pointer'
};

const titleSx = {
  cursor: 'pointer',
  maxWidth: {
    xs: '130px',
    sm: '300px'
  }
};

export default CollectionAddTableBody;
