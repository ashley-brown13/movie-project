import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../helpers/auth';
import constants from '../utils/constants';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      await signup(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === constants.auth.email) setEmail(value);
    if (name === constants.auth.password) setPassword(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>
          Sign Up to <Link to="/">Emme Jr Challenge</Link>
        </h1>
        <p>Fill in the form below to create an account.</p>
        <div>
          <input placeholder="Email" name={constants.auth.email} type="email" onChange={handleChange} value={email}/>
        </div>
        <div>
          <input placeholder="Password" name={constants.auth.password} onChange={handleChange} value={password} type="password"/>
        </div>
        <div>
          {error && <p>{error}</p>}
          <button type="submit">Sign up</button>
        </div>
        <hr/>
        <p>Already have an account? <Link to={constants.routes.login}>Login</Link></p>
      </form>
    </div>
  )
};

export default SignUp;