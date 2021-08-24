import React, { useState, useEffect } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from './pages/Home';
import Movies from './pages/Movies';
import Movie from './pages/Movie';
import Signup from './pages/Signup';
import Login from './pages/Signin';
import { auth } from './services/firebase';
import constants from './utils/constants';

import './App.css';

const {
  movie,
  movies,
  login,
  signup,
} = constants.routes;

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: login, state: { from: props.location } }} />}
    />
  )
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === false
        ? <Component {...props} />
        : <Redirect to={movies} />}
    />
  )
}

const App = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
        setLoading(false);
      } else {
        setAuthenticated(false);
        setLoading(false);
      }
    })
  });

  return loading === true ? <h2>Loading...</h2> : (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <PrivateRoute exact path={movie} authenticated={authenticated} component={Movie}/>
        <PrivateRoute path={movies} authenticated={authenticated} component={Movies}/>
        <PublicRoute path={signup} authenticated={authenticated} component={Signup}/>
        <PublicRoute path={login} authenticated={authenticated} component={Login}/>
      </Switch>
    </Router>
  );
};

export default App;
