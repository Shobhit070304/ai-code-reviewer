import React from "react";
import CodeReviewer from "./components/CodeReviewer";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/code-review" element={<CodeReviewer />} />
      </Routes>
    </>
  );
}

export default App;
