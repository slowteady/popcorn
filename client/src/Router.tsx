import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Auth from "./components/hoc/Auth";
import ExceptionLayout from "./components/layouts/ExceptionLayout";
import MainLayout from "./components/layouts/MainLayout";
import Page404 from "./components/pages/exception/Page404";
import CollectionAddPage from "./components/pages/main/collection/CollectionAddPage";
import CollectionDetailPage from "./components/pages/main/collection/CollectionDetailPage";
import CollectionListPage from "./components/pages/main/collection/CollectionListPage";
import MoviesPage from "./components/pages/main/movies/MoviesPage";
import MovieSearchPage from "./components/pages/main/search/MovieSearchPage";
import LoginPage from "./components/pages/users/LoginPage";
import ProfilePage from "./components/pages/users/ProfilePage";
import SignupPage from "./components/pages/users/SignupPage";

// ----------------------------------------------------------------------
// 라우터 컴포넌트
// ----------------------------------------------------------------------

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <Auth>
          <Navigate to="/main" />
        </Auth>
      ),
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "/main",
      element: <MainLayout />,
      children: [
        { element: <Navigate to="/main/movies" />, index: true },
        {
          path: "movies",
          element: (
            <Auth>
              <MoviesPage />
            </Auth>
          ),
        },
        {
          path: "users",
          children: [
            {
              path: "profile",
              element: (
                <Auth>
                  <ProfilePage />
                </Auth>
              ),
            },
          ],
        },
        {
          path: "search",
          element: (
            <Auth>
              <MovieSearchPage isCollection={false} />
            </Auth>
          ),
        },
        {
          path: "collection",
          children: [
            {
              path: "",
              element: (
                <Auth>
                  <CollectionListPage />
                </Auth>
              ),
              index: true,
            },
            {
              path: "add",
              element: (
                <Auth>
                  <CollectionAddPage />
                </Auth>
              ),
            },
            {
              path: "detail",
              element: (
                <Auth>
                  <CollectionDetailPage />
                </Auth>
              ),
            },
          ],
        },
      ],
    },
    {
      element: <ExceptionLayout />,
      children: [
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
};

export default Router;
