import * as actionTypes from './actionTypes';

export const initWatchMovie = ( watchmovie ) => {
    return {
        type: actionTypes.INIT_WATCH_MOVIE,
        watchmovie: watchmovie
    };
};

export const addSeats = ( seats ) => {
    return {
        type: actionTypes.ADD_SEATS,
        seats: seats
    };
};

export const removeSeats = ( seats ) => {
    return {
        type: actionTypes.REMOVE_SEATS,
        seats: seats
    };
};
 
export const setMovies = ( movies ) => {
    return {
        type: actionTypes.SET_MOVIES,
        movies: movies
    };
};

export const setSeats = ( seats ) => {
    return {
        type: actionTypes.SET_SEATS,
        seats: seats
    };
};


export const initMovies = () => {
    return {
        type: actionTypes.INIT_MOVIES
    };
};

export const fetchMoviesFailed = () => {
    return {
        type: actionTypes.FETCH_MOVIES_FAILED
    };
};