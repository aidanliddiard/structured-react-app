import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { userAuth } from '../hooks/userHooks';

export default function PrivateRoute({ children, ...rest }) {
  const { user } = userAuth();
  const location = useLocation();
  return (
    <Route {...rest}>
      {user.email ? (
        children
      ) : (
        <Redirect to={{ pathname: '/auth', state: { from: location } }} />
      )}
    </Route>
  );
}
