"use client";

import { useState } from "react";
import { Movie } from "../models/Movie";
import { PiImageBroken } from "react-icons/pi";
import Image from "next/image";

type MovieImgProps = {
  movie: Movie;
};

export const MovieImg = ({ movie }: MovieImgProps) => {
  const [srcErr, setSrcErr] = useState(false);

  return (
    <div className="h-full flex justify-center items-center text-6xl text-zinc-600 bg-zinc-300">
      {srcErr || !movie.Poster || movie.Poster === "N/A" ? (
        <PiImageBroken />
      ) : (
        <Image
          src={movie.Poster}
          alt={movie.Title}
          width={100}
          height={100}
          className="w-auto"
          loading="eager"
          onError={() => setSrcErr(true)}
        />
      )}
    </div>
  );
};
