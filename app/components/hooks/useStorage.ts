import { Movie } from "@/app/models/Movie";
import { useEffect, useState } from "react";

export const useStorage = (watchList: Movie[]) => {
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchList));
    console.log("useEffect");
  }, [watchList]);
};
