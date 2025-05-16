import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout: FC<DashboardLayoutProps> = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

interface DashboardLayoutProps {}

export default DashboardLayout;
