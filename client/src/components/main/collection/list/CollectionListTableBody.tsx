import { TableBody, TableRow } from '@mui/material';
import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import paths from '../../../../config/routes/paths';
import CustomTableCell from '../../../layouts/table/CustomTableCell';

interface CollectionListTableBodyProps {
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

const CollectionListTableBody = ({ collections }: CollectionListTableBodyProps) => {
  const { collection } = collections.data;
  const navigate = useNavigate();

  const clickTitle = (id: string) => {
    navigate(`${main}${index}${detail}?id=${id}`);
  };

  return (
    <TableBody>
      {collection.map((col: Collection, idx: number) => {
        const { id, user, collectionTitle: title, rgstDate } = col;

        return (
          <TableRow key={idx} hover tabIndex={-1} role='row'>
            <CustomTableCell onClick={() => clickTitle(id)} sx={{ cursor: 'pointer' }}>
              {title}
            </CustomTableCell>
            <CustomTableCell>{user.userName}</CustomTableCell>
            <CustomTableCell>{changeDate(rgstDate)}</CustomTableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

const changeDate = (date: Date) => {
  return date.toString().substring(0, 10);
};

export default CollectionListTableBody;
