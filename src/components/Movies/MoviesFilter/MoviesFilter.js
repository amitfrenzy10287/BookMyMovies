import React from 'react';
import classes from './MoviesFilter.css';

const MoviesFilter = (props) =>{
	return(
		<div className={['col-md-2',classes.contentMoviesSidebar].join(' ')}>
	        <h6> GENRE </h6>   
	         <div className="custom-control custom-checkbox">
	          <input type="checkbox" className="custom-control-input"
	          name="action" id="action" defaultChecked={true} />
	          <label className="custom-control-label">Action</label>
	         </div>
	         <div className="custom-control custom-checkbox">
	          <input type="checkbox" className="custom-control-input" name="comedy" id="comedy" defaultChecked={true} />
	          <label className="custom-control-label">Comedy</label>
	         </div>
	    </div>
	);
}
export default MoviesFilter;	