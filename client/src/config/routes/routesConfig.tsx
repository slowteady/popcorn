import { Navigate, RouteObject } from 'react-router-dom';
import ExceptionLayout from '../../components/layouts/main/exception/ExceptionLayout';
import NotFound from '../../pages/exception/NotFound';
import Main from '../../pages/main/Main';
import Collection from '../../pages/main/collection/Collection';
import Movies from '../../pages/main/movies/Movies';
import Search from '../../pages/main/search/Search';
import Profile from '../../pages/main/users/Profile';
import SignIn from '../../pages/sign/SignIn';
import SignUp from '../../pages/sign/SignUp';
import paths from './paths';

const { all, root, notFound } = paths;
const { signin, signup } = paths.sign;
const { main, movies, search, collection } = paths.main;
const { users, profile } = paths.users;

const routesConfig: RouteObject[] = [
  { path: root, element: <Navigate to={signin} replace /> },
  { path: signin, element: <SignIn /> },
  { path: signup, element: <SignUp /> },
  {
    path: main,
    element: <Main />,
    children: [
      { element: <Navigate to={`${main}${movies}`} />, index: true },
      { path: movies.slice(1), element: <Movies /> },
      { path: search.slice(1), element: <Search /> },
      { path: collection.slice(1), element: <Collection /> },
      { path: users.slice(1), children: [{ path: profile.slice(1), element: <Profile /> }] }
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
