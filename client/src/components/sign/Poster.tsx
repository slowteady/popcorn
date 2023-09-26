import { useQuery } from 'react-query';
import { getPoster } from '../../service/signService';
import Loading from '../theme/Loading';

const Poster = () => {
  const { data, status } = useQuery(['getPopular'], () => getPoster());

  if (status === 'loading') {
    return <Loading />;
  }
  
  return <div>Poster</div>;
};

export default Poster;
