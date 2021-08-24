import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signin } from "../helpers/auth";
import constants from "../utils/constants";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === constants.auth.email) setEmail(value);
    if (name === constants.auth.password) setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      await signin(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div id="login-page">
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        id="login-form"
      >
        <Link id="login-page-title-link" className="auth-page-link" to="/">The Movie Depot</Link>
        <h1 className="auth-page-title">
          Login
        </h1>
        <p className="auth-directions">
          Fill in the form below to login.
        </p>
        <div>
          <input
            placeholder="Email"
            name={constants.auth.email}
            className="auth-page-input"
            type="email"
            onChange={handleChange}
            value={email}
          />
        </div>
        <div>
          <input
            placeholder="Password"
            name={constants.auth.password}
            className="auth-page-input"
            onChange={handleChange}
            value={password}
            type="password"
          />
        </div>
        <div>
          {error ? (
            <p>{error}</p>
          ) : null}
          <button type="submit">Login</button>
        </div>
        <hr/>
        <p>
          Don't have an account? <Link className="auth-page-link" to={constants.routes.signup}>Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
