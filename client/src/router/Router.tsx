import { useRoutes } from 'react-router-dom';
import Auth from '../components/hoc/Auth';
import routesConfig from '../config/routes/routesConfig';

const Router = () => {
  const routes = useRoutes(
    routesConfig.map((route) => ({
      ...route,
      element: <Auth>{route.element}</Auth>
    }))
  );

  return routes;
};

export default Router;
