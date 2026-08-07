import { Movie } from "../models/Movie";
import { OmdbResponse } from "../models/OmdbResponse";
import { get } from "./serviceBase";

const BASE_URL = "http://www.omdbapi.com/?apikey=3cf50f5c&";

export const getMovies = async (query: string) => {
  const response = await get<OmdbResponse>(`${BASE_URL}s=${query}`);
  return response.Search;
};

export const getMovieById = async (id: string) =>
  await get<Movie>(`${BASE_URL}i=${id}`);
