import { Suspense } from "react";
import { SearchMovies } from "./components/SearchForm";
import { MoviesPresentation } from "./components/movies/MoviesPresentation";
import { getMovies } from "./services/movieService";

type HomeProps = {
  searchParams: Promise<{ q: string }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const { q } = await searchParams;
  const movies = await getMovies(q);

  return (
    <>
      <SearchMovies />
      {q ? (
        <Suspense fallback={<>Loading...</>}>
          <MoviesPresentation movies={movies} />
        </Suspense>
      ) : null}
    </>
  );
}
