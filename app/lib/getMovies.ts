import { OmdbResponse } from "../models/OmdbResponse";

export const getMovies = async (q: string, page: number) => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=3cf50f5c&s=${q}&page=${page}`
  );
  const data: OmdbResponse = await response.json();

  return data;
};
