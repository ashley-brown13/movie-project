import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { loadMovie } from '../store/movies';
import pictures from '../services/pictures';
import Header from '../components/header';

const Movie = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const { movieId } = useParams();
  const movie = useSelector(state => state.movies.movie);

  useEffect(() => {
    dispatch(loadMovie(movieId));
  }, [movieId]);

  const handleGoBackClick = () => {
    history.push("/movies");
  }

  return (
    <div id="total-movie-page">
    <Header />
      <div id="movie-page">
        {movie &&
          <div id="movie-container" key={movie.id}>
              <h1 className="ind-movie-title">{movie.title}</h1>
              <div className="side-by-side">
                <img src={pictures[movie.id]} alt={`${movie.title} Cover`}></img>
                <div className="movie-info">
                  <p id="release-date"><st>Release Date:</st> {movie.release}</p>
                  <div className="movie-songs">
                    <h3 id="movie-songs-title">Songs:</h3>
                    {movie.song_examples && movie.song_examples.map((song) => (
                      <p key={song}>{song}</p>
                    ))}
                  </div>
                  <button onClick={handleGoBackClick}>Go Back</button>
                </div>
              </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Movie;
