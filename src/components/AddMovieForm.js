import React, { useState } from "react";

export default function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault(); // Prevent page refresh
    if (title.trim()) {
      onAddMovie(title); // Add the movie using the onAddMovie function passed from App
      setTitle(""); // Clear the input field after submission
    }
  };

  return ( // TODO: add a form to add a new movie
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Update title on input change
        placeholder="Enter movie title"
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}
