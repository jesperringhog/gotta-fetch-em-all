import { Movie } from "@/app/models/Movie";
import React, { createContext } from "react";

export type WatchListContextType = {
  watchList: Movie[];
  setWatchList: React.Dispatch<React.SetStateAction<Movie[]>>;
};

export const WatchListContext = createContext<WatchListContextType | null>(null)
