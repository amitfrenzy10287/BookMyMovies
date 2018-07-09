import React from 'react'; 
import classes from './MovieSeat.css';


const MovieSeat = ( props ) => { 
 	
	let defChecked = 	props.reserved && 
						props.reserved.includes(props.seatname) ===true &&
						props.movie_id === props.selectedMovieId ? true : false;	
	return(

		<div className="col">
	          <input id={ props.id } 
	          className={ classes.seatSelect }
	          seatname={props.seatname} 
	          onChange={props.added}  
	          defaultChecked={defChecked}
	          type="checkbox" value={ props.cost } name="seat[]" />
	          <label for={ props.id } className={ classes.seat }> 
	          { props.seatname }</label>
	           
	    </div>	
	);
}
export default MovieSeat;