import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ThemeProvider from './components/theme/Index';
import Router from './router/Router';

const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <RecoilRoot>
            <Router />
          </RecoilRoot>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
