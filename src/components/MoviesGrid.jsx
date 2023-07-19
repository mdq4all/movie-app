import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import httpGet from '../utils/httpGet'
import Spinner from '../utils/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Empty } from './Empty';

const initialState = [];

const MoviesGrid = ({ search }) => {

    const [movies, setMovies] = useState(initialState);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
        
    useEffect(() => {
      setIsLoading(true);
      const searchUrl = search ? `search/movie?query=${search} &page=${page}` 
        : "discover/movie?page=" + page;
       httpGet(searchUrl)
       .then(data => {
        // console.log(data)
        setHasMore(data.page < data.total_pages)
        setIsLoading(false);
        setMovies(prevMovies => prevMovies.concat(data.results));
      })
    }, [search, page]);
  
  if(!isLoading && movies.length === 0) return <Empty />
  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<div className='flex justify-center'><Spinner /></div>} >

    
       <ul className='grid grid-cols-2 gap-10 px-8 justify-center mt-60 
          sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'> 
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  )
}

export default MoviesGrid
