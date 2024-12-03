import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import MovieList from "./MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = (title) => {
    // TODO: Implement adding a new movie to the list
    const newMovie = { id: Date.now(), title, watched: false }; // Create new movie object
    setMovies([...movies, newMovie]); // Add movie to the list
  };

  const handleToggleWatched = (id) => {
    // TODO: Implement toggling a movie's watched status
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  };

  const handleDeleteMovie = (id) => {
    // TODO: Implement deleting a movie from the list
    setMovies(movies.filter((movie) => movie.id !== id)); // Remove movie from list
  };

  return (
    <div>
      <h1>Favorite Movies</h1>
      {/* TODO: Add AddMovieForm Component */}
      <AddMovieForm onAddMovie={handleAddMovie} />
      {/* TODO: Add MovieList Component */}
      <MovieList
        movies={movies}
        onToggleWatched={handleToggleWatched}
        onDeleteMovie={handleDeleteMovie}
      />
    </div>
  );
}

export default App;
