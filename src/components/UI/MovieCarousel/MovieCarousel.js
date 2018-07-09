import React,{Component} from 'react'; 
import Carousel from 'nuka-carousel'; 
import classes from './MovieCarousel.css';

import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';

class MovieCarousel extends Component {

	render(){

	    return ( 
	    	<div> 
		        <Carousel className={classes.movieslide} slidesToShow={2} cellSpacing={20} >
			        <img alt="movie1" className={[classes.sliderimage,'rounded img-fluid'].join(' ')} src={image2} />
			        <img alt="movie2" className={[classes.sliderimage,'rounded img-fluid'].join(' ')} src={image1} />
			        <img alt="movie3" className={[classes.sliderimage,'rounded img-fluid'].join(' ')} src={image3} />
			        <img alt="movie4" className={[classes.sliderimage,'rounded img-fluid'].join(' ')} src={image4} />
		      	</Carousel>
	      	</div>
	    )
	}
}

export default MovieCarousel;