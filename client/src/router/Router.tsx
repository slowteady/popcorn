import { Navigate, useRoutes } from 'react-router-dom';
import SignInPage from '../pages/sign/SignInPage';
import path from './path';

const { root, signin } = path;

const Router = () => {
  const routes = useRoutes([
    {
      path: root,
      element: <Navigate to={signin} replace />
    },
    {
      path: signin,
      element: <SignInPage />
    }
  ]);

  return routes;
};

export default Router;
