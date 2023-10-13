import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Loading from './components/common/Loading';
import ThemeProvider from './components/theme/Index';
import Router from './router/Router';

const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <RecoilRoot>
              <Suspense fallback={<Loading />}>
                <Router />
              </Suspense>
            </RecoilRoot>
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1
    }
  }
});

export default App;
