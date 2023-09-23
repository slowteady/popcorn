import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Router from './router/Router';

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <RecoilRoot>
          <Router />
        </RecoilRoot>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
