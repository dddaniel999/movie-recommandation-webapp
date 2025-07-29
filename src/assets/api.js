const apiKey = "6faacf77";
const prefix = "https://www.omdbapi.com/?t=";

export async function fetchMovieData(title) {
  const url = `${prefix}${encodeURIComponent(title)}&apikey=${apiKey}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Eroare rețea");
  }

  const data = await response.json();

  return data;
}
