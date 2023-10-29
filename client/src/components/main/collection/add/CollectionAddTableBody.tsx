import { TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { Fragment, MouseEvent, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { ADD_TABLE_CONF } from '../../../../config/layout/tableConfig';
import { checkedMoviesState } from '../../../../state/collectionState';
import { changePosterPath } from '../../../../utils/dataTransForm';
import Icon from '../../../common/icon/Icon';
import MovieModal from '../../movies/modal/MovieModal';

interface CollectionAddTableBodyProps {
  page: number;
}

const DELETE_ICON = 'eva:trash-2-outline';
const { ROWSPERPAGE } = ADD_TABLE_CONF;

const CollectionAddTableBody = ({ page }: CollectionAddTableBodyProps) => {
  const [checkedMovies, setCheckedMovies] = useRecoilState(checkedMoviesState);
  const [open, setOpen] = useState(false);
  const idRef = useRef<number>(0);
  const posterPathRef = useRef<string>('');
  const startIndex = (page - 1) * ROWSPERPAGE;
  const endIndex = page * ROWSPERPAGE;

  const openModal = (id: number, posterPath: string) => {
    idRef.current = id;
    posterPathRef.current = posterPath;
    setOpen(true);
  };

  const doDelete = (e: MouseEvent, id: number) => {
    e.stopPropagation();

    setCheckedMovies((prevCheckedMovies) => prevCheckedMovies.filter((movies) => movies.id !== id));
  };

  const modalData = () => {
    const id = idRef.current;
    const posterPath = changePosterPath(posterPathRef.current);

    return { id, posterPath };
  };

  return (
    <>
      <TableBody>
        {checkedMovies.length > 0 &&
          checkedMovies.slice(startIndex, endIndex).map((movie, idx) => {
            const { id, title, release_date, poster_path } = movie;

            return (
              <Fragment key={idx}>
                <TableRow hover tabIndex={-1} role='checkbox'>
                  <TableCell align='left'>
                    <Icon onClick={(e) => doDelete(e, id)} icon={DELETE_ICON} sx={deleteIconSx} />
                  </TableCell>
                  <TableCell align='left'>
                    <Typography onClick={() => openModal(id, poster_path)} variant='subtitle2' noWrap sx={titleSx}>
                      {title}
                    </Typography>
                  </TableCell>
                  <TableCell align='left'>
                    <Typography variant='subtitle2' noWrap>
                      {release_date}
                    </Typography>
                  </TableCell>
                </TableRow>
              </Fragment>
            );
          })}
      </TableBody>
      <MovieModal open={open} setOpen={setOpen} movie={modalData()} />
    </>
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
