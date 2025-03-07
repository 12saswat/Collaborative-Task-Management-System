import React, { useState } from "react";
import axiox from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handelLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axiox.post(
        "http://localhost:5000/api/users/login",
        { email, password }
      );

      localStorage.setItem("Token", data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md" onSubmit={handelLogin}>
        <h2 className="text-lg font-semibold mb-4">Login</h2>
        <input
          className="border p-2 w-full mb-3"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="border p-2 w-full mb-3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="bg-blue-500 text-white p-2 w-full">Login</button>
      </form>
      <div>
        <p>
          New user?{" "}
          <Link to={"/register"} className="text-blue-600 border-b-2">
            register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
