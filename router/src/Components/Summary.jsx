import React from "react";
import { useNavigate } from "react-router-dom";

function Summary() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>📘 Movie Search Summary</h2>

      <p>
        Users can search movies by title using API.
        Debouncing is used to reduce unnecessary API calls.
      </p>

      <button onClick={() => navigate("/keypoints")}>
        Next → Key Points
      </button>
    </div>
  );
}

export default Summary;
