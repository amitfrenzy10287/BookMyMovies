import React from 'react';

import classes from './Order.css';
import star from '../../assets/images/star_16.png';
import heart from '../../assets/images/heart.png';

const order = ( props ) => { 

const seatsBooked = props.researvedseats.map( function( seat ) {
    return  <span className="text-primary text-uppercase font-weight-bold d-inline p-2">
                <small>
                    <span>
                        {[props.seatType,seat.toString()].join(' : ')}
                    </span> 
                </small>
            </span>
});
    return (
        <div className={ classes.Order }>
            <div className="row">
                <div className="col-2 text-left"> 
                    <img src={ props.movie.media_url } 
                    className="img-thumbnail rounded" alt={props.movie.movie_name} /> 
                </div>
                <div className="col-10">
                    <div className="text-danger font-weight-bold">
                        { props.movie.movie_name } 
                        <span className="badge badge-success m-1">
                            { props.movie.type }
                        </span>
                        <span className="badge badge-primary m-1">
                            { props.movie.format }
                        </span>
                        <span className="badge badge-warning">
                            { props.movie.genre }
                        </span>
                    </div>
                    <div className="text-primary font-italic">
                        <small>Critics Ratings : 
                        { props.movie.critics_ratings } <img src={star} alt="Critics rating" /> | 
                        User Ratings : { props.movie.user_ratings } <img src={star} alt="User rating" />
                        </small>
                    </div>
                    <div className="text-primary font-italic">
                        <img src={heart} alt="People likes" />
                        { props.movie.likes }
                    </div>
                    <div>
                        {seatsBooked}
                    </div>
                    <div className="text-primary font-italic">
                        <small>
                            Ticket type : 
                        </small>
                        <span className="badge badge-success text-uppercase">
                            { props.order.deliveryMethod }
                        </span> 
                    </div>
                    <div>
                        
                        <strong className="text-success font-weight-bold">
                            Total Price : 
                            {  [ props.movie.currency_name,Number.parseFloat( props.price ).toFixed( 2 ),
                             props.movie.currency].join(' ') }
                        </strong>
                    </div>
                </div>
            </div>
        </div>  
    );
};

export default order;