import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MovieList.css';
import star from '../../../assets/images/star_16.png';
import heart from '../../../assets/images/heart.png';
 
const movieCard = (props) => { 

        return ( 
                <div className={[classes.movieCard,'col-sm-3'].join(' ')}>
                  <div className="card">
                    <img className="card-img-top" src={props.media_url} alt={props.movie_name} />  
                    <div className=""> 
                      <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            <Link to={{ pathname: '/bookseats', 
                            state: {
                                movieBookingDetails : props,
                                seat:'normal' 
                             } }}
                             className="btn btn-success btn-sm p-0 m-1">
                             Normal
                            </Link> 
                            <Link to={{ pathname: '/bookseats', 
                            state: {
                                movieBookingDetails : props,
                                seat:'superior' 
                             } }}
                             className="btn btn-warning btn-sm p-0 m-1">Superior</Link>
                          
                            <Link to={{ pathname: '/bookseats', 
                            state: {
                                movieBookingDetails : props,
                                seat:'sofa' 
                             } }} className="btn btn-primary btn-sm p-0 m-1">Sofa</Link>
                          </li>
                      </ul>
                      <div className="p-2">
                          <span style={{display:'block'}}>
                              <small><strong>{props.movie_name}</strong></small>
                          </span>
                          <span style={{display:'block'}}>
                              <img src={heart} alt="Likes" />
                              <small> {props.likes} | User Rating : {props.user_ratings}</small>
                              <img src={star} alt="Star ratings" />
                              </span>

                      </div>
                    </div>
                  </div>
              </div> 
        );
};

export default movieCard;