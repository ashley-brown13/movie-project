import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { loadMovie } from '../store/movies';

const pictures = {
  "3D1N7yX8vCuWwiyfPTaJ": "https://upload.wikimedia.org/wikipedia/en/b/ba/Pinocchio-1940-poster.jpg",
  "83yx5d8sQTGh3c0KvsJ2": "https://upload.wikimedia.org/wikipedia/en/c/c1/Alice_in_Wonderland_%281951_film%29_poster.jpg",
  "95dabQoLRYIUAmX0WynM": "https://upload.wikimedia.org/wikipedia/en/d/d8/SwordintheStonePoster.JPG",
  "H79u9RyNMqE9qtA339CO": "https://upload.wikimedia.org/wikipedia/en/c/c6/LiloandStitchmovieposter.jpg",
  "WWHt8pOkgigN0FrQiUjw": "https://upload.wikimedia.org/wikipedia/en/0/05/Frozen_%282013_film%29_poster.jpg",
  "XBZJ4Mn9wjtrKZTCxPGf": "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg",
  "cinMt2WMzSKhao8VAwRJ": "https://upload.wikimedia.org/wikipedia/en/c/c0/The_Little_Mermaid_%28Official_1989_Film_Poster%29.png",
  "mRrQ4VyPvBdvoAaR0D6x": "https://upload.wikimedia.org/wikipedia/en/a/ac/Rescuersposter.jpg",
  "oDt7XtoGiLJvP4diArmv": "https://upload.wikimedia.org/wikipedia/en/6/65/Hercules_%281997_film%29_poster.jpg"
}

const Movie = () => {
  let history = useHistory();
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
                  {movie.song_examples.map((song) => (
                    <p key={song}>{song}</p>
                  ))}
                </div>
                <button onClick={handleGoBackClick}>Go Back</button>
              </div>

            </div>
        </div>
      }
    </div>
  );
};

export default Movie;
