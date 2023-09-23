import { Navigate, useRoutes } from "react-router-dom";
import Auth from "../components/hoc/Auth";
import path from "./path";

const { main } = path;

const Router = () => {
  const routes = useRoutes([
    {
      path: main,
      element: (
        <Auth>
          <Navigate to="/main" />
        </Auth>
      ),
    },
  ]);

  return routes;
};

export default Router;
