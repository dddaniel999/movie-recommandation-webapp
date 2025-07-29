import React, { useState } from "react";

export default function MovieSearch({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-lg">
      <input
        type="text"
        placeholder="Introdu numele filmului..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="text-white flex-1 px-4 py-3 rounded-l-lg shadow-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-r-lg text-white font-semibold shadow-md transition duration-300"
      >
        Caută
      </button>
    </form>
  );
}
