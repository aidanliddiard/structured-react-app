import React from 'react';
import { NavLink } from 'react-router-dom';
import { userAuth } from '../hooks/userHooks';

export default function Header() {
  const { logOut } = userAuth();

  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add</NavLink>
        </li>
        <li>
          <button onClick={logOut}>Sign Out</button>
        </li>
      </ul>
    </div>
  );
}
