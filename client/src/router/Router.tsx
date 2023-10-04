import { Navigate, useRoutes } from 'react-router-dom';
import Main from '../pages/main/Main';
import Movies from '../pages/main/movies/Movies';
import SignIn from '../pages/sign/SignIn';
import SignUp from '../pages/sign/SignUp';
import paths from './paths';

const { root } = paths;
const { signin, signup } = paths.sign;
const { main, movies } = paths.main;

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
    },
    {
      path: main,
      element: <Main />,
      children: [
        { element: <Navigate to={`${main}${movies}`} />, index: true },
        {
          path: movies.slice(1),
          element: <Movies />
        }
      ]
    }
  ]);

  return routes;
};

export default Router;
