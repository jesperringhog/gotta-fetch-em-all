import { Movie } from "@/app/models/Movie";
import React, { useEffect, useState } from "react";

export const useStorage = (
  watchList: Movie[],
  setWatchList: React.Dispatch<React.SetStateAction<Movie[]>>,
) => {
  useEffect(() => {
    const storedWatchList = localStorage.getItem("watchlist");

    if (storedWatchList) setWatchList(JSON.parse(storedWatchList));

    console.log("useEffect read");
  }, [setWatchList]);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchList));

    console.log("useEffect write");
  }, [watchList]);
};
