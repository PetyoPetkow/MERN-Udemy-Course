import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const HomeLayout: FC<HomeLayoutProps> = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

interface HomeLayoutProps {}

export default HomeLayout;
