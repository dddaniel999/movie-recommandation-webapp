# Movie Recommendation App

A simple React + Tailwind CSS web app that allows users to search for movies using the OMDb API and view cached results locally.

## Features

- Movie search with title input
- Poster, rating, year, and summary display
- Local caching with custom logic via `localStorage`
- Fallback image if poster is missing
- Clean, responsive UI with Tailwind CSS
- Basic component structure with modular React code

## Technologies Used

- React (Vite)
- Tailwind CSS
- JavaScript (ES6+)
- OMDb API
- localStorage

## File Structure

- `src/components/` – UI components
- `src/assets/api.js` – API key and fetch logic
- `src/assets/cache.js` – Caching layer with `localStorage`
- `plantUML/` – UML diagrams and basic documentation

## OMDb API

This project uses an OMDb API key stored in `api.js`.  
If you wish to replace it, edit the `apiKey` value inside `src/assets/api.js`.

> Note: The current key is a test key and may expire.

## UML / Diagrams

Basic use case modeling is included in `plantUML/UML.png`. The original `.puml` file is also provided.
> Note: Use Case scenarios are written in Romanian

## Getting Started

Install dependencies and run locally:

```bash
npm install
npm run dev
```

# Demo
A short presentation video is available on YouTube:
[Watch the demo](https://youtu.be/Anb6L653J8Q)


> Note: This application was developed and presented as a university project.
