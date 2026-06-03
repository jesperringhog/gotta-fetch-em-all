import Image from "next/image";
import { getMovies } from "../lib/getMovies";
import { Movie } from "../models/Movie";

export type MoviesProps = {
  movies: Movie[];
};

export const Movies = async ({ movies }: MoviesProps) => (
  <div className="flex flex-wrap justify-center items-center gap-10">
    {movies.map((m) => (
      <div
        key={m.imdbID}
        className="w-70 h-100 p-10 flex flex-col justify-between items-center bg-foreground rounded-xl"
      >
        <p className="max-w-50 text-background">{m.Title}</p>
        <Image
          src={m.Poster}
          alt={m.Title}
          width={200}
          height={200}
          className="w-auto h-auto rounded-xl"
          loading="eager"
        />
      </div>
    ))}
  </div>
);
