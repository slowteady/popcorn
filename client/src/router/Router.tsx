import { Navigate, useRoutes } from 'react-router-dom';
import SignIn from '../pages/sign/SignIn';
import SignUp from '../pages/sign/SignUp';
import paths from './paths';

const { root } = paths;
const { signin, signup } = paths.sign;

const Router = () => {
  const routes = useRoutes([
    {
      path: root,
      element: <Navigate to={signin} replace />
    },
    {
      path: signin,
      element: <SignIn />
    },
    {
      path: signup,
      element: <SignUp />
    }
  ]);

  return routes;
};

export default Router;
