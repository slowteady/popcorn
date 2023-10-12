import { Navigate, useRoutes } from 'react-router-dom';
import Auth from '../components/hoc/Auth';
import paths from '../config/routes/paths';
import Main from '../pages/main/Main';
import Movies from '../pages/main/movies/Movies';
import SignIn from '../pages/sign/SignIn';
import SignUp from '../pages/sign/SignUp';

const { root } = paths;
const { signin, signup } = paths.sign;
const { main, movies } = paths.main;

interface Route {
  path: string;
  element: JSX.Element;
  children?: Route[];
}

const Router = () => {
  const routes = useRoutes([
    {
      path: root,
      element: (
        <Auth>
          <Navigate to={signin} replace />
        </Auth>
      )
    },
    {
      path: signin,
      element: (
        <Auth>
          <SignIn />
        </Auth>
      )
    },
    {
      path: signup,
      element: (
        <Auth>
          <SignUp />
        </Auth>
      )
    },
    {
      path: main,
      element: (
        <Auth>
          <Main />
        </Auth>
      ),
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
