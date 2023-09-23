import { Navigate, useRoutes } from 'react-router-dom';
import path from './path';

const { main, index } = path;

const Router = () => {
  const routes = useRoutes([
    {
      path: main,
      element: <Navigate to={index} replace={true} />
    }
  ]);

  return routes;
};

export default Router;
