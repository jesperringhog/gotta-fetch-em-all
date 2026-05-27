"use client";

import { useState } from "react";
import { getMovies } from "../services/movieService";
import { Movie } from "../models/Movie";

type MovieFormProps = {
  searchMovie: (text: string) => void;
}

export const MovieForm = ({searchMovie}: MovieFormProps) => {
  const [text, setText] = useState("");

  return (
    <form
      className="w-full flex justify-center gap-10"
      onSubmit={(e) => {
        e.preventDefault();
        searchMovie(text);
        setText("");
      }}
    >
      <label htmlFor="movieInput"></label>
      <input
        id="movieInput"
        type="text"
        placeholder="Movie"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};
