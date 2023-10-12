import { Navigate, useLocation } from 'react-router-dom';
import paths from '../../config/routes/paths';
import useAuthCheck from '../../hooks/useAuthCheck';
import { ReactNodeProps } from '../../types/global';
import Loading from '../common/Loading';

const { signin, signup } = paths.sign;
const { main } = paths.main;

const Auth = ({ children }: ReactNodeProps) => {
  const location = useLocation();
  const { isLogined, isLoading } = useAuthCheck(location);

  const isNeedRedirect = location.pathname === signin || location.pathname === signup;

  if (isLoading) {
    return <Loading />;
  }

  if (isLogined) {
    return isNeedRedirect ? <Navigate to={main} /> : <>{children}</>;
  }

  return isNeedRedirect ? <>{children}</> : <Navigate to={signin} replace />;
};

export default Auth;
