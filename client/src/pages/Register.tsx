import { FC } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo } from '../components';

const Register: FC<RegisterProps> = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            defaultValue="john"
            required
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>Already a member?</p>
        <Link to="/login" className="member-btn">
          Login
        </Link>
      </form>
    </Wrapper>
  );
};

interface RegisterProps {}

export default Register;
