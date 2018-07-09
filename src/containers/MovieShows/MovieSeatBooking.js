import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary/Auxiliary'; 
import MovieSeats from '../../components/Seats/MovieSeats'; 
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Movie/OrderSummary/OrderSummary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';

export class MovieSeatBooking extends Component {
    
    state = {
        purchasing: false
    }

    purchaseHandler = () => {
         
        if (this.props.isAuthenticated) {
            this.setState( { purchasing: true } );
        } else {
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
    }

    purchaseCancelHandler = () => {
        this.setState( { purchasing: false } );
    }

    purchaseContinueHandler = () => {
        
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    }

    updateSeats = ( e, seatAvail ) => { 
         
         if( e.target.checked ){

            this.props.onSeatsAdded( seatAvail );    
         }else{

            this.props.onSeatsRemoved( seatAvail );   
         } 
    }



    render () {

        const disabledInfo = {
            ...this.props.ings
        };
        
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        
        let orderSummary = null;
        let watchmovie = this.props.watchmovie?this.props.watchmovie:null;
        // let seats = this.props.seats?this.props.seats:null;
        
        if ( watchmovie ) {  
            orderSummary = <OrderSummary
                movieSelected={this.props.watchmovie}
                researvedseats={this.props.researvedseats}
                price={this.props.price}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler} />;
        }
      
        return (
            <Aux> 
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal> 
                <MovieSeats 
                    seatsAdded={this.updateSeats}
                    movie={this.props.onInitWatchMovie(this.props.history.location.state)}
                    seats={this.props.seats}
                    movie_id={this.props.movie_id}
                    reserved={this.props.researvedseats}
                    disabled={this.props.price===0?'disabled':null}
                    ordered={this.purchaseHandler}
                    isAuth={this.props.isAuthenticated}
                    price={this.props.price} /> 
            </Aux>
        );
    }
}

const mapStateToProps = state => {
 
    return {
        watchmovie:state.movieBooking.watchmovie,
        seats:state.movieBooking.seats,
        movie_id:state.movieBooking.movie_id, 
        price: state.movieBooking.totalPrice,
        error: state.movieBooking.error,
        researvedseats:state.movieBooking.researvedseats,
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => { 
    return {
        onSeatsAdded: (seatsAvail) => dispatch(actions.addSeats(seatsAvail)),
        onSeatsRemoved: (seatsRemove) => dispatch(actions.removeSeats(seatsRemove)), 
        onInitMovies: () => dispatch(actions.initMovies()),
        onInitWatchMovie: ( movie ) => dispatch(actions.initWatchMovie( movie )),
        onInitPurchase: () => dispatch(actions.bookingInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( MovieSeatBooking, axios ));