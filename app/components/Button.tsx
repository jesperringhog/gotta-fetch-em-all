"use client";

import { Movie } from "../models/Movie";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useWatchList } from "./hooks/useWatchList";

type ButtonProps = {
  movie: Movie;
};

export const Button = ({ movie }: ButtonProps) => {
  const {watchList, setWatchList} = useWatchList();

  const addedMovie = watchList.some((item) => item.imdbID === movie.imdbID);

  const toggleWatchList = () => {
    setWatchList((current) => {
      const addedMovie = current.some((item) => item.imdbID === movie.imdbID);

      if (addedMovie) return current.filter((item) => item.imdbID !== movie.imdbID);

      return [...current, movie]
    })
  }

  return (
    <button
      onClick={toggleWatchList}
      className="p-5 text-2xl text-white cursor-pointer hover:scale-110 transition-transform duration-300"
    >
      {addedMovie ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
    </button>
  );
};
