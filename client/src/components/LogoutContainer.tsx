import { FC, useState } from 'react';
import { useDashboardContext } from '../pages/DashboardLayout';
import Wrapper from '../assets/wrappers/LogoutContainer';
import { FaCaretDown, FaUserCircle } from 'react-icons/fa';

const LogoutContainer: FC<LogoutContainerProps> = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();

  return (
    <Wrapper>
      <button
        type="button"
        className="btn logout-btn"
        onClick={() => setShowLogout((prev) => !prev)}
      >
        <FaUserCircle />
        {user?.name}
        <FaCaretDown />
      </button>
      <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
        <button type="button" className="dropdown-btn" onClick={logoutUser}>
          logout
        </button>
      </div>
    </Wrapper>
  );
};

interface LogoutContainerProps {}

export default LogoutContainer;
