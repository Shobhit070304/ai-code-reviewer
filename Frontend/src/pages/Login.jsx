import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/user/login`,
      user
    );
    console.log(response);
    if (response.status === 200) {
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  }
  return (
    <div className="signup-container bg-zinc-900 w-screen h-screen flex justify-center items-center">
      <div className="border-2 border-zinc-300 bg-zinc-800 px-15 py-10 rounded-lg text-white">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2 className="font-semibold text-3xl text-center mb-6">LogIn </h2>

          <div className="form-group">
            <label htmlFor="email" className="text-md text-gray-300">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="w-full py-2 px-4 mt-2 rounded-md border-2  placeholder:text-gray-400 border-gray-300  mb-2"
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="text-md text-gray-300">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-full py-2 px-4 mt-2 rounded-md border-2  placeholder:text-gray-400 border-gray-300  mb-2"
              required
              placeholder="Enter your password"
            />
          </div>
          <button
            className="w-full py-2 mt-4 bg-blue-500 text-white rounded-lg"
            type="submit"
          >
            Login
          </button>
          <Link
            to={"/signup"}
            className="text-gray-500 text-center text-sm mt-2"
          >
            Already have an account?{" "}
            <span className="text-blue-500">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
