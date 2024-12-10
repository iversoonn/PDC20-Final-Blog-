import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, currentUser }) => {
  return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
