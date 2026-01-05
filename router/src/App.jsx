import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home.jsx";
import Summary from "./Components/Summary.jsx";
import KeyPoints from "./Components/KeyPoints.jsx";
import Quiz from "./Components/Quiz.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/keypoints" element={<KeyPoints />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
