import React from "react";
import noImage from "../assets/images/noimage.png";

export default function MovieCard({ movie }) {
  const { Title, Year, Rated, Runtime, Plot, Poster, Ratings } = movie;

  const audienceRating = Ratings?.find((r) => r.Source === "Rotten Tomatoes");
  const score = audienceRating ? parseInt(audienceRating.Value) : null;
  let recommendation = null;
  let colorClass = "text-white";

  if (score !== null) {
    if (score > 80) {
      recommendation = "Ar trebui să vizionați acest film chiar acum!";
      colorClass = "text-green-400";
    } else if (score < 50) {
      recommendation = "Film cu review-uri negative!";
      colorClass = "text-red-400";
    } else {
      recommendation = "Film cu review-uri mixte!";
      colorClass = "text-yellow-400";
    }
  }

  return (
    <div className="movie-card fade-in mt-6 w-full max-w-3xl bg-gray-800 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-8 p-8 transition-transform duration-300 hover:scale-105">
      <img
        src={Poster !== "N/A" ? Poster : noImage}
        alt={Title}
        className="md:w-60 max-w-full h-[445px] object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            {Title} <span className="text-gray-400">({Year})</span>
          </h2>
          <p className="mb-2">
            <span className="font-semibold">Rating:</span> {Rated}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Durata:</span> {Runtime}
          </p>
          <p className="mt-4 text-base italic text-gray-300 leading-relaxed">
            {Plot}
          </p>
        </div>
        {recommendation && (
          <div className="mt-6">
            <p className={`text-lg font-semibold ${colorClass}`}>
              {recommendation}
            </p>
            <p className="text-gray-400">(Scor: {score}%)</p>
          </div>
        )}
      </div>
    </div>
  );
}
