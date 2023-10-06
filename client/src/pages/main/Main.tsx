import { Outlet } from 'react-router-dom';
import MainLayout from '../../components/layouts/MainLayout';

const Main = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default Main;
