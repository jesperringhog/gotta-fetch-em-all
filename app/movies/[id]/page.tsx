import { MovieImg } from "@/app/components/movies/MovieImg";
import { getMovieById } from "@/app/services/movieService";

type MovieDetailsProps = {
    params: Promise<{ id: string }>
}

export default async function MovieDetails ({params}: MovieDetailsProps) {
    const { id } = await params;
    const movie = await getMovieById(id); 

    return <>
        <MovieImg movie={movie}/>
    </>;
}