import React from "react";
import { useNavigate } from "react-router-dom";

function KeyPoints() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>⭐ Key Learning Points</h2>

      <ul>
        <li>Search movies using API</li>
        <li>Debouncing improves performance</li>
        <li>Dynamic results while typing</li>
        <li>Handles no-result scenario</li>
      </ul>

      <button onClick={() => navigate("/quiz")}>
        Next → Quiz
      </button>
    </div>
  );
}

export default KeyPoints;
