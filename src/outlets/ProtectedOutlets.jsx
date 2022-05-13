import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { auth } from "../routes/auth";

export default function ProtectedOutlets() {
  if (!auth) {
    <Navigate to="login" />;
  }
  return (
    <div>
      <Link to="/home" />
      <Link to="/about" />
      <Outlet />
    </div>
  );
}
