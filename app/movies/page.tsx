"use client";

import { useState } from "react";
import { MovieForm } from "../components/MovieForm";
import { Movies } from "../components/Movies";
import { getMovies } from "../services/movieService";
import { Movie } from "../models/Movie";

export default function MovieApp() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const searchMovie = async (text: string) => {
    const result = await getMovies(text);
  
    setMovies(result);
  }

  return (
    <div>
      <MovieForm searchMovie={searchMovie} />
      <Movies movies={movies} />
    </div>
  );
}
