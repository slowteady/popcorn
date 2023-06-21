import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Router from "./Router";
import ThemeProvider from "./theme";

// react-query 사용을 위한 객체 생성
const queryClient = new QueryClient();

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <QueryClientProvider client={queryClient}>
            <RecoilRoot>
              <Router />
            </RecoilRoot>
          </QueryClientProvider>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
