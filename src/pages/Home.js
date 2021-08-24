import React from 'react';
import { Link } from 'react-router-dom';
import constants from '../utils/constants';
import clapper from '../images/artistic.jpg'

const Home = () => {
  return (
    <div className="homepage">
    <h1 id="homepage-title">The Movie Depot</h1>
    <img src={clapper} id="clapper"></img>
    <div id="homepage-buttons">
      <Link className="homepage-link" to={constants.routes.signup}>Sign up</Link>
      <Link className="homepage-link" to={constants.routes.login}>Login</Link>
    </div>
  </div>
  )
};

export default Home;
