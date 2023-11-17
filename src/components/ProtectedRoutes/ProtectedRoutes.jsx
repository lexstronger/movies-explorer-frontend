import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes (props) {
  return (
    props.loggedIn 
    ? <Outlet />
    : <Navigate
      to="/"
      replace
    />
  )
}

export default ProtectedRoutes;