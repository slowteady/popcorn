import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import FrameLayout from "./components/layouts/FrameLayout";
import MainLayout from "./components/layouts/MainLayout";
import LoginPage from "./components/views/LoginPage";
import MainPage from "./components/views/MainPage";
import Page404 from "./components/views/Page404";
import SignupPage from "./components/views/SignupPage";

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
        { element: <Navigate to="/main/app" />, index: true },
        { path: "app", element: <MainPage /> },
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
