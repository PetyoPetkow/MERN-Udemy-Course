import { FC } from 'react';
import Wrapper from '../assets/wrappers/BigSidebar';
import { NavLink } from 'react-router-dom';
import links from '../utils/links';
import { useDashboardContext } from '../pages/DashboardLayout';
import Logo from './Logo';

const BigSidebar: FC<BigSidebarProps> = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            {links.map(({ text, path, icon }) => (
              <NavLink to={path} key={text} className="nav-link" end>
                <span className="icon">{icon}</span>
                {text}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

interface BigSidebarProps {}

export default BigSidebar;
