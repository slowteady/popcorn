import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Router from "./Router";
import ThemeProvider from "./theme";

// react-query 사용을 위한 객체 생성
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 앱이 다시 포커싱 받을 시 재요청 할지 여부
      refetchOnWindowFocus: false,
    },
  },
});

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
