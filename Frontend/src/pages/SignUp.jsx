import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    try {
      e.preventDefault();

      const newUser = {
        name,
        email,
        password,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/register`,
        newUser
      );

      if (response.status === 200) {
        alert("Registration successful!");
        navigate("/");
        localStorage.setItem("token", response.data.token);
      } else {
        alert("Registration failed. Please try again.");
      }
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert("Please try again.");
    }
  }

  return (
    <div className="signup-container bg-zinc-900 w-screen h-screen flex justify-center items-center">
      <div className="border-2 border-zinc-300 bg-zinc-800 px-15 py-10 rounded-lg text-white">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2 className="font-semibold text-3xl text-center mb-6">Sign Up</h2>
          <div className="form-group">
            <label htmlFor="username" className="text-md text-gray-300">
              Username
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="w-full py-2 px-4 mt-2 rounded-md border-2  placeholder:text-gray-400 border-gray-300  mb-2"
              required
              placeholder="Enter your name"
            />
          </div>
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
            Sign Up
          </button>
          <Link to={"/login"} className="text-gray-500 m-auto text-sm mt-2">
            Already a user? <span className="text-blue-500">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
