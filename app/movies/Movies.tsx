import Image from "next/image";
import { OmdbResponse } from "../models/OmdbResponse";

export default async function Home() {
  const response = await fetch("http://www.omdbapi.com/?apikey=3cf50f5c&s=spider")
  const data: OmdbResponse = await response.json();

  return (
    <div className="flex flex-wrap justify-center items-center gap-10">
      {data.Search.map((movie) => 
        <div key={movie.imdbID} className="h-110 p-10 flex flex-col justify-between items-center bg-foreground rounded-xl">
          <p className="max-w-50 text-background">{movie.Title}</p>
          <Image src={movie.Poster} alt={movie.Title} width={200} height={200} className="rounded-xl"/>
        </div>
      )}
    </div>
  );
}
