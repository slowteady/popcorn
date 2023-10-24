import { AxiosResponse } from 'axios';
import { useQueries } from 'react-query';

interface QueriesProps {
  queryKey: (string | number)[];
  queryFn: () => Promise<AxiosResponse<any, any>>;
}

const useMultipleQuries = (queries: QueriesProps[]) => {
  const results = useQueries(queries);

  const data = results.map((result) => result.data);
  const status = results.map((result) => result.status);
  
  return { data, status };
};

export default useMultipleQuries;
