import React, { Component } from 'react'; 
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './OrderSummary.css';

class OrderSummary extends Component {
    render () {
        
         const bookingSummary = this.props.researvedseats ? Object.keys( this.props.researvedseats )
            .map( rKey => {
                return (
                    <span className="d-block text-uppercase" key={rKey}>
                        {this.props.movieSelected.seat} : 
                        <span className="badge badge-success badge-pill">
                        {this.props.researvedseats[rKey]}</span>
                    </span>
                );
            } ) : null; 

        let media_url = this.props.movieSelected.length !== 0 &&
                        this.props.movieSelected.movieBookingDetails.media_url ? 
                        this.props.movieSelected.movieBookingDetails.media_url : null;    

        return (
            <Aux> 
                    <h4>{ this.props.movieSelected.length !== 0  ?
                     this.props.movieSelected.movieBookingDetails.movie_name : null }</h4>
                    <p className="font-italic">Book your tickets now : </p> 

                    <span className="text-center col-md-3">
                        <img src={media_url} alt="Movie poster" className={[classes.imgOrder,'rounded'].join(' ')} />
                    </span> 
                    <div>
                        {bookingSummary}
                    </div>
                    <p>
                        <strong>
                            Total Price: { this.props.price ? this.props.price.toFixed( 2 ) : 0 }
                        </strong>
                    </p>
                    <p> Continue to Checkout? </p>
                    
                    <button className="btn btn-danger btn-sm m-1" 
                    onClick={this.props.purchaseCancelled}>CANCEL</button>
                    
                    <button className="btn btn-primary btn-sm m-1" 
                    onClick={ this.props.purchaseContinued }>CONTINUE</button>
            </Aux>
        );
    }
}

export default OrderSummary;