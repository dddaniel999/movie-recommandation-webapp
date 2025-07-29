export default function CachedMovies({ setMovieData, updateBodyClass }) {
  const raw = localStorage.getItem("movie_cache");
  if (!raw) return <p className="text-gray-400">Niciun film salvat.</p>;

  const cache = JSON.parse(raw);
  const movies = Object.entries(cache);

  if (!movies.length)
    return <p className="text-gray-400">Niciun film salvat.</p>;

  return (
    <ul className="space-y-4">
      {movies.map(([key, movieWrapper]) => {
        const movie = movieWrapper.data;
        return (
          <li
            key={key}
            className="flex items-center justify-between bg-gray-700 px-6 py-4 rounded-xl shadow transition-transform duration-300 hover:scale-101"
          >
            <div className="flex items-center gap-4">
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "./assets/images/noimage.png"
                }
                alt={movie.Title}
                className="w-[60px] h-[90px] object-cover rounded shadow-md"
              />
              <div>
                <h3 className="text-lg font-semibold">{movie.Title}</h3>
                <p className="text-gray-400">{movie.Year}</p>
                {movie.Ratings && movie.Ratings.length > 0 && (
                  <p className="text-sm text-yellow-300 mt-1">
                    {movie.Ratings[0].Source}: {movie.Ratings[0].Value}
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={() => {
                setMovieData(movie);
                updateBodyClass(movie.Genre);
              }}
              className="text-blue-400 hover:text-blue-300 underline text-sm"
            >
              Reîncarcă
            </button>
          </li>
        );
      })}
    </ul>
  );
}
