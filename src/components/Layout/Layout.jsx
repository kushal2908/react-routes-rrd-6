import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Layout({ children }) {
  const history = useNavigate();
  const logout = () => {
    localStorage.removeItem("authCredential");
    history("/");
  };
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <Link to="/home" class="btn btn-ghost normal-case text-xl">
            React Routes
          </Link>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a onClick={logout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-6 mt-4">{children}</div>
    </div>
  );
}
