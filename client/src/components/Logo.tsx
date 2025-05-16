import { FC } from 'react';
import logo from '../assets/images/logo.svg';

const Logo: FC<LogoProps> = () => {
  return <img src={logo} alt="jobify" className="logo" />;
};

interface LogoProps {}

export default Logo;
