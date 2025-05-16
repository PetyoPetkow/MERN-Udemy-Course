import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { BigSidebar, Navbar, SmallSidebar } from '../components';

const DashboardLayout: FC<DashboardLayoutProps> = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
      <Outlet />
    </Wrapper>
  );
};

interface DashboardLayoutProps {}

export default DashboardLayout;
