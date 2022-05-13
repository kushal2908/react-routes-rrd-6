import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { auth } from "../routes/auth";
import PrivateRoute from "../routes/PrivateRoute";

export default function ProtectedOutlets() {
  if (!auth) {
    <Navigate to="login" />;
  }
  return (
    <div>
      <PrivateRoute to="/home" />
      <PrivateRoute to="/about" />
      <Outlet />
    </div>
  );
}
