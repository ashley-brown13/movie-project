import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadMovies } from '../store/movies'

const Movies = () => {
  const dispatch = useDispatch()
  const movies = useSelector(state => state.movies.movies);

  useEffect(() => {
    dispatch(loadMovies());
  }, []);

  return (
    <div className="movies-page">
      <h1 id="movies-page-title">Movies</h1>
      <div id="movies-list">
        {movies && movies.map((movie) => (
          <div className="movies-list-ind-movie" key={movie.id}>
            <a href={`/movies/${movie.id}`} className="ind-movie-title">
              {movie.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
