import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Auth from "./components/hoc/Auth";
import FrameLayout from "./components/layouts/FrameLayout";
import MainLayout from "./components/layouts/MainLayout";
import LoginPage from "./components/pages/LoginPage";
import Page404 from "./components/pages/Page404";
import SignupPage from "./components/pages/SignupPage";
import CollectionAddPage from "./components/pages/main/collection/CollectionAddPage";
import CollectionDetailPage from "./components/pages/main/collection/CollectionDetailPage";
import CollectionListPage from "./components/pages/main/collection/CollectionListPage";
import MoviesPage from "./components/pages/main/movies/MoviesPage";
import MovieSearchPage from "./components/pages/main/search/MovieSearchPage";
import ProfilePage from "./components/pages/users/ProfilePage";

// ----------------------------------------------------------------------
// 라우터
// ----------------------------------------------------------------------

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
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
      element: <FrameLayout />,
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
