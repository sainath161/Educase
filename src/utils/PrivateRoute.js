import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

const PrivateRoute = ({ element, ...rest }) => {
  const { user } = useUser();

  return user ? (
    <Routes>
    <Route {...rest} element={element} /></Routes>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
