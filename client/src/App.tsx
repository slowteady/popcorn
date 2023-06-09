import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Router from "./Router";

const App = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Router />
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default App;
