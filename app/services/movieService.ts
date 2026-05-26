import { OmdbResponse } from "../models/OmdbResponse";

export const getMovies = async (searchText: string) => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=3cf50f5c&s=${searchText}`
  );
  const data: OmdbResponse = await response.json();

  return data.Search;
};
