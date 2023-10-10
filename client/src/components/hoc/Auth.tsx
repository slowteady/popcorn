import { Navigate, useLocation } from 'react-router-dom';
import useAuthCheck from '../../hooks/useAuthCheck';
import paths from '../../router/paths';
import { ReactNodeProps } from '../../types/global';
import Loading from '../common/Loading';

const { signin, signup } = paths.sign;
const { main } = paths.main;

const Auth = ({ children }: ReactNodeProps) => {
  const location = useLocation();
  const { isLogined, isLoading } = useAuthCheck(location);

  if (location.pathname === signin || location.pathname === signup) {
    if (isLogined) return <Navigate to={main} />;
  }

  if (isLoading) {
    return <Loading />;
  } else if (isLogined) {
    return <>{children}</>;
  } else {
    return <Navigate to={signin} replace />;
  }
};

export default Auth;
