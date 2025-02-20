import React from "react";
import Navbar from "../components/Navbar";
import Front from "../components/Front";

function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Navbar />
      <Front />
    </div>
  );
}

export default Home;
