import React, { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../../routes/auth";

export default function Login({ props }) {
  let navigate = useNavigate();
  const username_ref = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "user" && password === "user") {
      const data = {
        token: generateToken(),
      };
      localStorage.setItem("authCredential", data.token);
      navigate("/home");
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    username_ref.current.focus();
  }, []);

  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <div className="w-full md:w-1/3 m-2 p-5 bg-white shadow-md rounded-md">
        <p className="text-4xl font-black mt-6 mb-6 text-center text-gray-700 uppercase ">Login</p>
        <form onSubmit={handleLogin}>
          <input
            ref={username_ref}
            type="text"
            placeholder="Username"
            className="input border-2 border-gray-300 w-full max-w-lg mb-4"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered  border-2 border-gray-300 w-full max-w-lg mb-4"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <small className="text-red-600">username and password doesn't match! please try again</small>}
          <button type="submit" className={`btn text-white w-full mt-4`}>
            Login
          </button>
        </form>
      </div>
      <div>
        <p className="text-gray-800 mt">
          Username is <strong>user</strong> and password is <strong>user</strong>
        </p>
      </div>
    </section>
  );
}

let generateToken = () => {
  let r = (Math.random() + 1).toString(36).substring(1);
  return r;
};
