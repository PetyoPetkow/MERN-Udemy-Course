import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const HomeLayout: FC<HomeLayoutProps> = () => {
  return (
    <div>
      <nav>HomeLayout</nav>
      <Outlet />
    </div>
  );
};

interface HomeLayoutProps {}

export default HomeLayout;
