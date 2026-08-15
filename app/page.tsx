import { Suspense } from "react";
import { SearchMovies } from "./components/SearchForm";
import { MoviesPresentation } from "./components/movies/MoviesPresentation";

type HomeProps = {
  searchParams: Promise<{ q: string }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const { q } = await searchParams;

  return (
    <>
      <SearchMovies />
      {q ? (
        <Suspense fallback={<>Loading...</>}>
          <MoviesPresentation query={q} />
        </Suspense>
      ) : null}
    </>
  );
}
