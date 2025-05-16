import { FC } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';

const Register: FC<RegisterProps> = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="john" />
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue="Smith"
        />
        <FormRow type="text" name="location" defaultValue="earth" />
        <FormRow type="email" name="email" defaultValue="john@gmail.com" />
        <FormRow type="password" name="password" defaultValue="secret123" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

interface RegisterProps {}

export default Register;
