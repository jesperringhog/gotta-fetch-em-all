"use client";

import { useContext } from "react";
import { WatchListContext } from "../components/contexts/WatchListContext";
import { MovieImg } from "../components/movies/MovieImg";
import { MoviesPresentation } from "../components/movies/MoviesPresentation";

export default function WatchList() {
  const { watchList } = useContext(WatchListContext);

  return <MoviesPresentation movies={watchList} />;
}
