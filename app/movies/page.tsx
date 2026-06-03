import { SearchMovies } from "./SearchMovies";
import { Movies } from "./Movies";
import { getMovies } from "../lib/getMovies";
import { Suspense } from "react";
import { OmdbResponse } from "../models/OmdbResponse";
import { MoviesPagination } from "./MoviesPagination";

type MovieAppProps = {
  searchParams: Promise<{ q: string; page?: string }>;
};

export default async function MovieApp({ searchParams }: MovieAppProps) {
  const { q, page: pageParam } = await searchParams;
  const page = Number(pageParam) || 1;

  const movies = q
    ? await getMovies(q, page)
    : ({
        Search: [],
        totalResults: "0",
        Response: "true",
      } satisfies OmdbResponse);
  return (
    <>
      <SearchMovies />
      <Suspense fallback={<>Loading...</>}>
        {q && <Movies movies={movies.Search} />}
        <MoviesPagination moviesTotal={movies.totalResults} q={q} page={page} />
      </Suspense>
    </>
  );
}
