import { TableHeaderConfig } from '../../types/layout';

interface Config {
  ROWSPERPAGE: number;
  TABLE_HEADER: TableHeaderConfig[];
}

export const ADD_TABLE_CONF: Config = {
  ROWSPERPAGE: 5,
  TABLE_HEADER: [
    { id: 'dummy', label: '', width: '15%', align: 'left' },
    { id: 'title', label: '제목', width: '55%', align: 'left' },
    { id: 'release_date', label: '릴리즈', width: '30%', align: 'left' }
  ]
};

export const LIST_TABLE_CONF: Config = {
  ROWSPERPAGE: 5,
  TABLE_HEADER: [
    { id: 'collection', label: '컬렉션', width: '60%' },
    { id: 'author', label: '큐레이터', width: '20%' },
    { id: 'rgstDate', label: '등록일자', width: '20%' }
  ]
};
