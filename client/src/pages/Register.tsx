import { FC } from 'react';
import { Link } from 'react-router-dom';

const Register: FC<RegisterProps> = () => {
  return (
    <div>
      <h1>Register</h1>
      <Link to="/login">Login</Link>
    </div>
  );
};

interface RegisterProps {}

export default Register;
