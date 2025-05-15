import { FC } from 'react';
import { Link } from 'react-router-dom';

const Login: FC<LoginProps> = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link to="/register">Register</Link>
    </div>
  );
};

interface LoginProps {}

export default Login;
