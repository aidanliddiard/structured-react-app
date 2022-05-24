import React from 'react';
import { NavLink } from 'react-router-dom';
import { userAuth } from '../hooks/userHooks';

export default function Header() {
  const { logOut, user } = userAuth();

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {user.email && (
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
        )}
        {user.email && (
          <li>
            <NavLink to="/add">Add</NavLink>
          </li>
        )}
        <li>
          {user.email ? (
            <button onClick={logOut}>Sign Out</button>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
        </li>
      </ul>
    </div>
  );
}
