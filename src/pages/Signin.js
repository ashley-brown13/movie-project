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
    <div>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h1>
          Login to
          <Link to="/">
            Emme Jr Challenge
          </Link>
        </h1>
        <p>
          Fill in the form below to login to your account.
        </p>
        <div>
          <input
            placeholder="Email"
            name={constants.auth.email}
            type="email"
            onChange={handleChange}
            value={email}
          />
        </div>
        <div>
          <input
            placeholder="Password"
            name={constants.auth.password}
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
          Don't have an account? <Link to={constants.routes.signup}>Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;