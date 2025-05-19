import { FC } from 'react';
import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import links from '../utils/links';
import { NavLink } from 'react-router-dom';
import { useDashboardContext } from '../pages/DashboardLayout';

const SmallSidebar: FC<SmallSidebarProps> = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            {links.map(({ text, path, icon }) => (
              <NavLink
                to={path}
                key={text}
                className="nav-link"
                onClick={toggleSidebar}
                end
              >
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

interface SmallSidebarProps {}

export default SmallSidebar;
