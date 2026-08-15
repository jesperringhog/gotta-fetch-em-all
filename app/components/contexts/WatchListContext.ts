import { Movie } from "@/app/models/Movie";
import React, { createContext } from "react";

export type WatchListContextType = {
  watchList: Movie[];
  setWatchList: (movies: Movie[]) => void;
};

export const WatchListContext = createContext<WatchListContextType>({
  watchList: [],
  setWatchList: (movies: Movie[]) => {},
});
