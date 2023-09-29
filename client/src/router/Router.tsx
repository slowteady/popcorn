import { Navigate, useRoutes } from 'react-router-dom';
import SignIn from '../pages/sign/SignIn';
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
      element: <SignIn />
    }
  ]);

  return routes;
};

export default Router;
