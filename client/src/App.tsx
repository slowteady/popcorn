import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/views/LoginPage";
import MainPage from "./components/views/MainPage";
import Page404 from "./components/views/Page404";
import SignupPage from "./components/views/SignupPage";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/404" element={<Page404 />} />
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default App;
