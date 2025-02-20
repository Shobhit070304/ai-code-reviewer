import React from "react";
import { Link } from "react-router-dom";

function Front() {
  return (
    <div className="h-full w-full flex flex-col gap-4 justify-center items-center -mt-15">
      <h1 className="text-5xl font-bold">
        Transforming <span className="text-blue-500">Code</span> Reviews for Modern Developers
      </h1>
      <p className="text-gray-400 my-2 not-[]:text-lg">
        Leverage the power of AI to identify bugs, improve performance, and
        ensure best practices—effortlessly and efficiently.
      </p>
      <input type="text" placeholder="Write something to start" className="py-2 px-4 border-2 border-gray-300 rounded-lg placeholder:text-center placeholder:text-gray-400 w-1/2" />
      <div className="flex gap-4">
        <Link className="bg-blue-500 text-white px-14 py-4 rounded-lg font-semibold ">
          Get start
        </Link>
        <Link className="text-blue-500 px-10 py-4 rounded-lg font-semibold border-2 border-gray-200">
          Watch Demo
        </Link>
      </div>
    </div>
  );
}

export default Front;
