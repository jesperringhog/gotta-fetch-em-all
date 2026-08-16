"use client";

import { useState } from "react";
import { PiImageBroken } from "react-icons/pi";
import Image from "next/image";
import { Movie } from "@/app/models/Movie";

type MovieImgProps = {
  movie: Movie;
};

export const MovieImg = ({ movie }: MovieImgProps) => {
  const [srcErr, setSrcErr] = useState(false);

  return (
    <div className="flex justify-center items-center bg-zinc-300">
      {srcErr || !movie.Poster || movie.Poster === "N/A" ? (
        <PiImageBroken className="text-6xl text-zinc-600" />
      ) : (
        <Image
          src={movie.Poster}
          alt={movie.Title}
          width={500}
          height={500}
          className="w-auto h-100"
          loading="eager"
          onError={() => setSrcErr(true)}
        />
      )}
    </div>
  );
};
