"use client";

import { useContext } from "react";
import { BiHeart } from "react-icons/bi";
import { WatchListContext } from "./contexts/WatchListContext";
import { Movie } from "../models/Movie";

type ButtonProps = {
  movie: Movie;
};

export const Button = ({ movie }: ButtonProps) => {
  const { watchList, setWatchList } = useContext(WatchListContext);

  return (
    <button onClick={() => setWatchList([...watchList, movie])} className="text-2xl cursor-pointer">
      <BiHeart />
    </button>
  );
};
