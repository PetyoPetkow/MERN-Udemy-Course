import { createContext, FC, useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { BigSidebar, Navbar, SmallSidebar } from '../components';

const DashboardContext = createContext<DashboardContextState>({
  user: { name: '' },
  showSidebar: false,
  isDarkTheme: false,
  toggleDarkTheme: () => {},
  toggleSidebar: () => {},
  logoutUser: () => {},
});

const DashboardLayout: FC<DashboardLayoutProps> = () => {
  const user = { name: 'john' };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  const logoutUser = async () => {
    console.log('logout user');
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
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
      </Wrapper>
    </DashboardContext.Provider>
  );
};

interface DashboardLayoutProps {}

interface DashboardContextState {
  user: { name: string };
  showSidebar: boolean;
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
  toggleSidebar: () => void;
  logoutUser: () => void;
}

export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
