import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {

    totalPrice: 0,
    error: false,
    movieSelected:null,
    building: false,
    movies:[],
    movie_id:null,
    researvedseats:[],
    watchmovie:[]
}; 

const initWatchMovie = ( state, action ) => {

    const updatedSt = {
        watchmovie: action.watchmovie ? action.watchmovie : null,
    } 
    return updateObject( state, updatedSt );
};


const purchaseMovieFinish = ( state, action ) => {
 
    const updatedSt = {
        researvedseats: [],
        totalPrice:0
    } 
    return updateObject( state, updatedSt );
};

const addSeats = ( state, action ) => {
     
    state.researvedseats.push( action.seats.seat_name );

    const updatedState = {
        researvedseats: state.researvedseats,
        totalPrice: state.totalPrice + parseInt(action.seats.seatcost),
        movieSelected:action.seats.movie_name,
        movie_id:action.seats.movie_id,
        auditorium:action.seats.auditorium,
        building: true
    } 
     
    return updateObject( state, updatedState );
};

const removeSeats = ( state, action ) => {
      
    var index = state.researvedseats.indexOf(action.seats.seat_name);
    if (index >= 0) {
      state.researvedseats.splice( index, 1 );
    }

    const updatedState = {
        researvedseats: state.researvedseats,
        totalPrice: state.totalPrice - parseInt(action.seats.seatcost),
        movieSelected:state.totalPrice === 0?action.seats.movie_name:null,
        auditorium:state.totalPrice === 0?action.seats.auditorium:null,
        building: true
    }
     
    return updateObject( state, updatedState );
}; 

const setMovies = (state, action) => {
    // 
    const updatedSetMovies = {
        movies: action.movies?action.movies[0]:[],
    } 
    return updateObject( state, updatedSetMovies );
};

const setSeats = (state, action) => {
    // 
    const updatedSetSeats = {
        seats: action.seats?action.seats[0]:[],
    } 
    return updateObject( state, updatedSetSeats );
};

const initMovies = (state, action) => {
    const updatedMoviesSt = {
        movies: action.movies?action.movies[0]:[],
    }
    return updateObject( state, updatedMoviesSt);
};

const fetchMoviesFailed = (state, action) => {
    return updateObject( state, { error: true } );
};

const reducer = ( state = initialState, action ) => {
    
    switch ( action.type ) {
        
        case actionTypes.ADD_SEATS: return addSeats( state, action );
        case actionTypes.BOOK_MOVIE_FINISH: return purchaseMovieFinish( state, action );
        case actionTypes.INIT_MOVIES: return initMovies( state, action );
        case actionTypes.SET_MOVIES: return setMovies( state, action );
        case actionTypes.SET_SEATS: return setSeats( state, action ); 
        case actionTypes.REMOVE_SEATS: return removeSeats(state, action);
        case actionTypes.INIT_WATCH_MOVIE: return initWatchMovie(state, action);
        case actionTypes.FETCH_MOVIES_FAILED: return fetchMoviesFailed(state, action);
        default: return state;
    }
};

export default reducer;