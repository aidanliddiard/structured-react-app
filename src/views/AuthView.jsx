import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { userAuth } from '../hooks/userHooks';

export default function AuthView() {
  const { handleAuth, email, setEmail, password, setPassword, error } =
    userAuth();

  const [authType, setAuthType] = useState('login');
  // const [error, setError] = useState('');

  return (
    <>
      <h3>Log-in or Sign-up</h3>
      <div>
        <label>
          Log-In
          <input
            type={'radio'}
            value={'login'}
            checked={authType === 'login'}
            onChange={() => setAuthType('login')}
          />
        </label>
        <label>
          Sign-Up
          <input
            type={'radio'}
            value={'signup'}
            checked={authType === 'signup'}
            onChange={() => setAuthType('signup')}
          />
        </label>
      </div>
      <label>
        Email
        <input
          type={'email'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type={'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button onClick={() => handleAuth(authType)}>Submit</button>
      {error && <p>{error}</p>}
    </>
  );
}
