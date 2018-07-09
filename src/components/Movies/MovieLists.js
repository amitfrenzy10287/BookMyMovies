import React from 'react';
import classes from './MovieLists.css';
import ScrollArea from 'react-scrollbar';
import MoviesFilter from './MoviesFilter/MoviesFilter';
import Spinner from '../UI/Spinner/Spinner';

const MovieLists=(props)=> {
 
        const movieCard = props.movieCard?props.movieCard:<Spinner/>;
        
        return(
            
            <div className="container-fluid">
                <div className="row">
                    <MoviesFilter/> 
                    <div className={['col-md-9',classes.contentMovies].join(' ')}>
                        <ScrollArea style={{ height: '800px' }}>             
                            <div className="row m-2"> 
                                  { movieCard } 
                            </div>
                        </ScrollArea>    
                    </div> 
                </div>
            </div>
            
        );
    } 

export default MovieLists;
