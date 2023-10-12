import { Navigate, RouteObject } from 'react-router-dom';
import ExceptionLayout from '../../components/layouts/main/exception/ExceptionLayout';
import Main from '../../pages/main/Main';
import NotFound from '../../pages/main/exception/NotFound';
import Movies from '../../pages/main/movies/Movies';
import SignIn from '../../pages/sign/SignIn';
import SignUp from '../../pages/sign/SignUp';
import paths from './paths';

const { all, root, notFound } = paths;
const { signin, signup } = paths.sign;
const { main, movies } = paths.main;

const routesConfig: RouteObject[] = [
  { path: root, element: <Navigate to={signin} replace /> },
  { path: signin, element: <SignIn /> },
  { path: signup, element: <SignUp /> },
  {
    path: main,
    element: <Main />,
    children: [
      { element: <Navigate to={`${main}${movies}`} />, index: true },
      { path: movies.slice(1), element: <Movies /> }
    ]
  },
  {
    element: <ExceptionLayout />,
    children: [
      { path: notFound.slice(1), element: <NotFound /> },
      { path: all, element: <Navigate to={notFound} /> }
    ]
  },
  {
    path: all,
    element: <Navigate to={notFound} replace />
  }
];

export default routesConfig;
