import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResult, setNoResult] = useState(false);

  useEffect(() => {
    if (query.trim() === "") {
      setMovies([]);
      setNoResult(false);
      return;
    }

    const timer = setTimeout(() => {
      fetchMovies();
    }, 500); // 👉 Debouncing (500ms)

    return () => clearTimeout(timer);
  }, [query]);

  const fetchMovies = async () => {
    setLoading(true);
    setNoResult(false);

    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${query}`
      );
      const data = await res.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setNoResult(true);
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>🎬 Movie Search App</h1>
      <p>Search movies by title</p>

      <input
        type="text"
        placeholder="Search movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <br /><br />

      {loading && <p>Loading...</p>}

      {noResult && <p>❌ No Results Found</p>}

      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            {movie.Title} ({movie.Year})
          </li>
        ))}
      </ul>

      <button onClick={() => navigate("/summary")}>
        Go to Summary
      </button>
    </div>
  );
}

export default Home;
