import React from 'react';

import movieLogo from '../../assets/images/logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={movieLogo} alt="MyShow" />
    </div>
);

export default logo;