import React from 'react';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    
    const bookingSummary = props.researvedseats ? Object.keys( props.researvedseats )
            .map( rKey => {
                return (
                    <span className="d-block text-uppercase" key={rKey}>
                        { props.movieSelected.seat } 
                        <span className="badge badge-success badge-pill">
                            { props.researvedseats[rKey] }
                        </span>
                    </span> );
            } ) : null; 
    let media_url = props.movieSelected.length !== 0 &&
                        props.movieSelected.movieBookingDetails.media_url?
                        props.movieSelected.movieBookingDetails.media_url:null;           

    return (
        <div className={classes.CheckoutSummary}>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                  <strong>{props.movieSelected.length !==0 ? 
                    props.movieSelected.movieBookingDetails.movie_name:''}
                  </strong> Hope you will enjoy the movie.
            </div>
            <div>
                    <span className="text-center">
                        <img src={media_url} alt="Movie poster" className={[classes.imgMovie,'rounded'].join(' ')} />
                    </span>
                 <div>
                    {bookingSummary}
                </div>
                <p><strong>Total Price : {props.price.toFixed( 2 )}</strong></p>
            </div>
            <button 
                className="btn btn-danger btn-sm m-1"
                onClick={props.checkoutCancelled}>CANCEL</button>
            <button 
                className="btn btn-primary btn-sm m-1"
                onClick={props.checkoutContinued}>CONTINUE</button>
        </div>
    );
}

export default checkoutSummary;