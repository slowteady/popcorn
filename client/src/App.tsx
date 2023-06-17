import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Router from "./Router";
import ThemeProvider from "./theme";

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <RecoilRoot>
            <Router />
          </RecoilRoot>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
