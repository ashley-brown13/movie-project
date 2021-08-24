import React from 'react';
import { Link } from 'react-router-dom';
import constants from '../utils/constants';

const Home = () => {
  return <>
    <h1>Welcome to the Emme Challenge</h1>

    <Link to={constants.routes.signup}>Sign up</Link>  <Link to={constants.routes.login}>Login</Link>

  </>;
};

export default Home;
