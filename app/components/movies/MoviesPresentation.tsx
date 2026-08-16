import Link from "next/link";
import { MovieImg } from "./MovieImg";
import { Button } from "../Button";
import { Movie } from "@/app/models/Movie";

type MoviesPresentationProps = {
  movies: Movie[];
};

export const MoviesPresentation = ({ movies }: MoviesPresentationProps) => (
  <section className="w-full flex flex-wrap justify-center gap-5">
    {movies.map((m) => (
      <div key={m.imdbID} className="flex flex-col items-center">
        <Link href={`/movies/${m.imdbID}`}>
          <MovieImg movie={m} />
        </Link>
        <div className="w-full flex justify-end bg-black">
          <Button movie={m}></Button>
        </div>
      </div>
    ))}
  </section>
);
