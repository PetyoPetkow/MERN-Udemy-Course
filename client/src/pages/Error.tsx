import { FC } from 'react';
import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';

const Error: FC<ErrorProps> = () => {
  const error = useRouteError();
  console.log(error);

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Page not found</h3>
          <p>We can't seem to find the page you are looking for</p>
          <Link to="/dashboard">back home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
        <Link to="/dashboard">back home</Link>
      </div>
    </Wrapper>
  );
};

interface ErrorProps {}

export default Error;
