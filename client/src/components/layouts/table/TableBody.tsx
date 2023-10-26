import { TableBody as MuiTableBody, TableRow } from '@mui/material';
import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import paths from '../../../config/routes/paths';
import TableCell from './TableCell';

interface TableBodyProps {
  collections: AxiosResponse<any, any>;
}

interface Collection {
  id: string;
  collectionTitle: string;
  rgstDate: Date;
  user: {
    userId: string;
    userName: string;
  };
}

const { main } = paths.main;
const { index, detail } = paths.main.collection;

const TableBody = ({ collections }: TableBodyProps) => {
  const { collection } = collections.data;
  const navigate = useNavigate();

  const clickTitle = (id: string) => {
    navigate(`${main}${index}${detail}?id=${id}`);
  };

  return (
    <MuiTableBody>
      {collection.map((col: Collection, idx: number) => {
        const { id, user, collectionTitle: title, rgstDate } = col;

        return (
          <TableRow key={idx} hover tabIndex={-1} role='row'>
            <TableCell onClick={() => clickTitle(id)} sx={{ cursor: 'pointer' }}>
              {title}
            </TableCell>
            <TableCell>{user.userName}</TableCell>
            <TableCell>{changeDate(rgstDate)}</TableCell>
          </TableRow>
        );
      })}
    </MuiTableBody>
  );
};

const changeDate = (date: Date) => {
  return date.toString().substring(0, 10);
};

export default TableBody;
