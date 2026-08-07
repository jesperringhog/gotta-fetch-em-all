import { Suspense } from "react";
import { MoviesPresentation } from "../components/MoviesPresentation";
import { SearchForm } from "../components/SearchForm";

type MoviePageProps = {
  searchParams: Promise<{ q: string }>;
};

export default async function MoviePage({ searchParams }: MoviePageProps) {
  const { q } = await searchParams;

  return (
    <>
      <SearchForm />
      {q ? (
        <Suspense fallback={<>Loading...</>}>
          <MoviesPresentation query={q} />
        </Suspense>
      ) : null}
    </>
  );
}
