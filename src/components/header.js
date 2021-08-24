import React from 'react';
import { auth } from '../services/firebase';
import {signout} from '../helpers/auth';

const Header = () => {
  const currentUser = auth().currentUser

  return (
    <div className="header">
      <a href='/'><h1 id="header-title">The Movie Depot</h1></a>
      <div className="email-and-logout">
        <p>{currentUser.email}</p>
        <button id="logout-button" onClick={signout}>Logout</button>
      </div>
    </div>
  )

}

export default Header;
