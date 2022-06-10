import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../firebase/AuthContext";

const ProtectedRoute = (props) => {
  const { currentUser } = useAuth();
  const location = useLocation();

  const { path } = props;
  if (path === "/login" || path === "/register") {
    return currentUser ? (
      <Navigate state={{ from: location }} to="/home" />
    ) : (
      <Outlet />
    );
  }

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default ProtectedRoute;
