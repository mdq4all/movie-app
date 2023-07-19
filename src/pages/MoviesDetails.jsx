import { useParams } from 'react-router-dom'
import httpGet from '../utils/httpGet'
import { useEffect, useState } from 'react'
import Spinner from '../utils/Spinner';
import { getImage } from '../utils/getImage';

const initialState = {};

const MoviesDetails = () => {

const [movie, setMovie] = useState(initialState);
const [isLoading, setIsLoading] = useState(true);

    const { movieId } = useParams();
    useEffect(() => {
      setIsLoading(true);
      httpGet('movie/' + movieId)
      .then (data => {
        setIsLoading(false);
        setMovie(data)}
        )
    }, [movieId]);
    const imageUrl = getImage(movie.poster_path, '500');

  return (
    <div className='max-w-[400px] mx-auto pt-60 px-4 md:flex md:max-w-[850px]'>
     {!isLoading ? <img src={imageUrl} alt={movie.title} className='w-[400px] h-[600px] rounded-lg' /> : <Spinner />}
      <div className='p-5 text-gray-300 md:py-0'>
        <h2 className=' text-xl pb-3'>
            <span className='font-bold'>Title: </span>{movie.title}</h2>
        {movie.genres && (
          <p className='text-xl pb-3'>
              <span className='font-bold'>Genres: </span>
              {movie && movie.genres.map((genre) => genre.name).join(', ')}
          </p>
        )}
        <p className='pb-3'>
            <span className='font-bold text-xl'>Description: </span>{movie.overview}</p>
        <p><span className='font-bold text-xl'>Release date: </span>{movie.release_date}</p>
      </div>
    </div>
  )
}

export default MoviesDetails
