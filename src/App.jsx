import React, { useState } from "react";
import MovieSearch from "./components/MovieSearch";
import MovieCard from "./components/MovieCard";
import { fetchMovieData } from "./assets/api";
import { getFromCache, saveToCache } from "./assets/cache";
import CachedMovies from "./components/CachedMovies";

export default function App() {
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (title) => {
    setError("");
    setMovieData(null);

    const cached = getFromCache(title);
    if (cached) {
      setMovieData(cached);
      updateBodyClass(cached.Genre);
      return;
    }

    try {
      const data = await fetchMovieData(title);

      if (data.Response === "True") {
        saveToCache(title, data);
        setMovieData(data);
        updateBodyClass(data.Genre);
      } else {
        setError("Titlul introdus nu a fost găsit.");
        document.body.className = "";
      }
    } catch (e) {
      setError("Eroare la interogare. Încearcă din nou mai târziu.");
      document.body.className = "";
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start text-white px-4 py-8 transition-all duration-500">
      <div className="w-full max-w-3xl flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-8 tracking-tight hover:scale-105 transition-transform duration-300 text-yellow-300">
          🎬 Recomandări de Film
        </h1>
        <MovieSearch onSearch={handleSearch} />
        {error && <p className="text-red-400 mt-4 text-center">{error}</p>}
        {movieData && (
          <div className="fade-in w-full">
            <MovieCard movie={movieData} />
          </div>
        )}
      </div>

      <div className="w-full max-w-3xl mt-12 px-4">
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">🎞 Filme salvate</h2>
            <button
              onClick={() => {
                localStorage.removeItem("movie_cache");
                window.location.reload();
              }}
              className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded"
            >
              Șterge tot
            </button>
          </div>

          <CachedMovies
            setMovieData={setMovieData}
            updateBodyClass={updateBodyClass}
          />
        </div>
      </div>
    </div>
  );
}

// Funcție care setează  de fundal în funcție de gen
function updateBodyClass(genreString) {
  const genre = genreString.toLowerCase();
  if (genre.includes("romance")) {
    document.body.className = "genre-romance";
  } else if (genre.includes("horror")) {
    document.body.className = "genre-horror";
  } else if (genre.includes("action")) {
    document.body.className = "genre-action";
  } else if (genre.includes("comedy")) {
    document.body.className = "genre-comedy";
  } else {
    document.body.className = "";
  }
}
