import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
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
