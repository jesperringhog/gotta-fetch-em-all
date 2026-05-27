"use client";

import Image from "next/image";
import { Movie } from "../models/Movie";

export type MoviesProps = {
  movies: Movie[];
}

export const Movies = ({movies}: MoviesProps) => (
  <div className="flex flex-wrap justify-center items-center gap-10">
    {movies.map((m) => (
      <div
        key={m.imdbID}
        className="h-110 p-10 flex flex-col justify-between items-center bg-foreground rounded-xl"
      >
        <p className="max-w-50 text-background">{m.Title}</p>
        <Image
          src={m.Poster}
          alt={m.Title}
          width={200}
          height={200}
          className="rounded-xl"
        />
      </div>
    ))}
  </div>
);
