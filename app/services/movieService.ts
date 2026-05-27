import { OmdbResponse } from "../models/OmdbResponse";

export const getMovies = async (text: string) => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=3cf50f5c&s=${text}`
  );
  const data: OmdbResponse = await response.json();

  return data.Search;
};
