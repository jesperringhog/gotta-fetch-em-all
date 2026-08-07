import Link from "next/link";
import { MovieImg } from "./MovieImg";
import { getMovies } from "../services/movieService";

type MoviesPresentationProps = {
  query: string;
};

export const MoviesPresentation = async ({ query }: MoviesPresentationProps) => {
  const movies = await getMovies(query);

  return (
    <section className="flex flex-wrap gap-5">
      {movies.map((m) => (
        <Link key={m.imdbID} href={`/movies/${m.imdbID}`}>
          <MovieImg movie={m} />
        </Link>
      ))}
    </section>
  );
};
