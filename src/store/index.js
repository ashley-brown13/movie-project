import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import moviesReducer from "./movies";

const rootReducer = combineReducers({
  movies: moviesReducer
});

let enhancer = applyMiddleware(thunk)

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
