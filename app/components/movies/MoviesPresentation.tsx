import Link from "next/link";
import { MovieImg } from "./MovieImg";
import { getMovies } from "@/app/services/movieService";
import { Button } from "../Button";

type MoviesPresentationProps = {
  query: string;
};

export const MoviesPresentation = async ({
  query,
}: MoviesPresentationProps) => {
  const movies = await getMovies(query);

  return (
    <section className="flex flex-wrap gap-5">
      {movies.map((m) => (
        <div key={m.imdbID} className="border">
          <Link href={`/movies/${m.imdbID}`}>
            <MovieImg movie={m} />
          </Link>
          <Button movie={m}></Button>
        </div>
      ))}
    </section>
  );
};
