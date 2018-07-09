import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import MovieLists from '../../components/Movies/MovieLists';
import MovieList from '../../components/Movies/MoviesList/MovieList'; 
import MovieCarousel from '../../components/UI/MovieCarousel/MovieCarousel';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';

export class MovieShows extends Component {
    
    state = {
        purchasing: false
    }

    componentDidMount () {
        
        this.props.onInitMovies();
    } 

    render () { 

        let movies = this.props.movies ? this.props.movies:null;
        let movieCardPanel= <Spinner/>;  
        
        if( movies ){

            movieCardPanel = Object.keys( movies ).map( function( key ){ 
                   
                   if( movies[key] ) {
                        return( 
                            <Aux> 
                                <MovieList key={key} {...movies[key]} /> 
                            </Aux>
                        );  
                   }  
            });    
        }

      
        return (
            <Aux>
                <MovieCarousel/>  
                <MovieLists movieCard={movieCardPanel}/> 
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    
    return {
        movies:state.movieBooking.movies,
        error: state.movieBooking.error,
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    
    return { 
        onInitMovies: () => dispatch(actions.initMovies()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( MovieShows, axios ));