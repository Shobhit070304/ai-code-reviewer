import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className="w-full h-20 px-20 bg-white flex items-center justify-between border-b-1 border-gray-200">
      <Link to={"/"}>
        <img
        className="w-14"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZJd44r5Wb0JwkxnLZ8A-x7o9NyvYLIks_2Q&s"
          alt=""
        />
      </Link>
      <div>
        <Link className="text-gray-400 px-4 hover:text-blue-500 hover:border-2 border-gray-200 p-2 rounded-full" href="">
          Home
        </Link>
        <Link to={"/code-review"} className="text-gray-400 px-4 hover:text-blue-500 hover:border-2 border-gray-200 p-2 rounded-full" href="">
          Code review
        </Link>
        <Link className="text-gray-400 px-4 hover:text-blue-500 hover:border-2 border-gray-200 p-2 rounded-full" href="">
          Features
        </Link>
        <Link className="text-gray-400 px-4 hover:text-blue-500 hover:border-2 border-gray-200 p-2 rounded-full" href="">
          Pricing
        </Link>
      </div>

      <div>
        <button className="px-4 py-2 cursor-pointer rounded-lg mx-2 border-2 border-gray-400 hover:bg-blue-500 hover:text-white">
          Sign in
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 cursor-pointer rounded-lg mx-2 hover:bg-blue-400">
          Sign up free
        </button>
      </div>
    </div>
  );
}

export default Navbar;
