import React from 'react';
import classes from './MovieSeats.css';
import MovieSeat from './MovieSeat/MovieSeat';
import { Redirect } from 'react-router-dom'


const MovieSeats = ( props ) =>{
  // 
  let seatType = props.movie.watchmovie.seat ? props.movie.watchmovie.seat : null;
  let watchmovie = props.movie.watchmovie.movieBookingDetails ? 
  props.movie.watchmovie.movieBookingDetails : null; 
  let movieSelected = watchmovie.movie_id ? watchmovie.movie_id : null; 
  let poster_image = watchmovie.poster_url ? watchmovie.poster_url: null;
  let reserved  = props.reserved;
  let selectedMovieId = props.movie_id;
  const seat = props.seats ? Object.keys( props.seats )
      .map( sKey => {
          let seatCost = seatType === 'normal' ? props.seats[sKey].normal : seatType === 'superior' ? 
          props.seats[sKey].superior : seatType === 'sofa' ? props.seats[sKey].sofa : undefined;

          let seatAvail = {  
              movie_name : watchmovie.movie_name,
              movie_id   : watchmovie.movie_id,
              auditorium : props.seats[sKey].auditorium,
              seat_name  : props.seats[sKey].seat_id ,
              seatcost   : seatCost,
          };
           
          if( props.seats[sKey].movie_id === movieSelected  
            && seatCost !== undefined )
          { 
              return(

                  <MovieSeat 
                  seatname = { props.seats[sKey].seat_id }
                  cost={ seatCost }
                  movie_id={watchmovie.movie_id}
                  reserved={reserved}
                  selectedMovieId = {selectedMovieId}
                  id = { sKey } 
                  added={ (e) => props.seatsAdded(e,seatAvail) }
                  />    
              );
          } 
   } ) : <Redirect to="/" />;
      
return(  
        <div className={classes.seatContainer}>
        <img src={poster_image} alt={watchmovie.movie_name} className={classes.poster} />      
            <div className="container-fluid">

                <div className="row"> 
                   <div className={[classes.movieDetailPanel,'col-md-12'].join(' ')}> 
                          <div className="row">
                              <div className="col-3"> 
                                    <img src={watchmovie.media_url} alt="Movie Poster" className="img-thumbnail" /> 
                              </div>
                              <div className="col-9 text-white">
                                   <h1> { watchmovie.movie_name } </h1> 
                                   <p> <button type="button" className="btn btn-outline-primary btn-sm">
                                        { watchmovie.type.toUpperCase() }</button> </p>
                                   <p> <span className="badge badge-primary">{ watchmovie.format }</span> </p>
                              </div>  
                          </div>
                          <div className={[classes.movieSummaryPanel,'row'].join(' ')}>
                            <div className="col-3"></div>
                            <div className="col-9"> 
                                <blockquote className="blockquote">
                                  <p className="mb-0"><strong>SYNOPSIS :
                                  </strong> {watchmovie.description}</p> 
                                </blockquote>
                            </div>
                          </div> 
                          <div className="row">
                          <div className="col-3">
                              
                              <p className="font-weight-bold">SEAT TYPE   :
                              <span className="badge badge-warning text-uppercase">{seatType}</span></p>
                              <p className="font-weight-bold">TOTAL PRICE :
                              <span className="badge badge-primary">{ props.price }</span></p>

                          </div>
                          <div className="col-6 border border-danger">
                              {seat}
                          </div>                          
                          <div className="col-3">
                            <button
                            className="btn btn-primary btn-lg"
                            disabled={props.disabled} 
                            onClick={props.ordered}>
                            {props.isAuth ?
                            'BOOK NOW' : 'SIGN IN TO CONTINUE'}</button>
                          </div> 
                      </div>
                      </div> 
                      

                </div>
            </div>
        </div>
  );
    
}

export default MovieSeats;