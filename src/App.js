import React from "react";
import MovieList from "./components/MovieList";
import "./App.css";

function App() {
  return (
    <div className="App bg-gray-900 min-h-screen text-white">
      <header className="text-center py-6">
        <h1 className="text-3xl font-bold">🎬 Popular Movies</h1>
        <p className="text-gray-400 mt-2">Movies fetched from TMDB API</p>
      </header>
      <main>
        <MovieList />
      </main>
    </div>
  );
}

export default App;
