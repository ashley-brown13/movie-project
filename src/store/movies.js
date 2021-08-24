import actions from '../helpers/db'

const LOAD_ONE = 'movies/LOAD_ONE';
const LOAD_ALL = 'movies/LOAD_ALL';

const loadOne = (movie) => {
  return {
    type: LOAD_ONE,
    movie: movie,
  };
};

const loadAll = (movies) => {
  return {
    type: LOAD_ALL,
    movies: movies
  }
}

export const loadMovies = () => async dispatch => {
  const response = await actions.getMovies()
  const movies = response.data
  dispatch(loadAll(movies))
}

export const loadMovie = (id) => async dispatch => {
  const response = await actions.getMovie(id)
  const movie = response.data
  dispatch(loadOne(movie))
}

const initialState = { movie: null, movies: null }

const moviesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_ONE:
      newState = Object.assign({}, state);
      newState.movie = action.movie
      return newState
    case LOAD_ALL:
      newState = Object.assign({}, state);
      newState.movies = action.movies
      return newState
    default:
      return state;
  }
}

export default moviesReducer
