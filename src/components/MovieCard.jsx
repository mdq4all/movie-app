import { Link } from "react-router-dom";
import { getImage } from "../utils/getImage";

const MovieCard = ({ movie }) => {

    const imageUrl =  getImage(movie.poster_path, '300');

  return (
    <li className="text-xl text-gray-50 text-center mx-auto sm:w-[230px]">
        <Link to={`/movies/${movie.id}`}>
            <img src={imageUrl} alt={movie.title + " poster"} 
                className={`rounded-lg bg-slate-200 hover:opacity-80 
                  ${!movie.poster_path ? "min-h-min py-[2.8rem] md:py[3.65rem]" : ""}
                  md:min-h-[360px]`} /> 
            <h2>{movie.title}</h2>
            <h3>({movie.release_date.substring(0, 4)})</h3> 
        </Link>
    </li>
  )
}

export default MovieCard
