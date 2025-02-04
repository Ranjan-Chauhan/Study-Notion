import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen min min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
