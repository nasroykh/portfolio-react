import React from 'react';
import classes from  './LoadingPage.module.scss';

const LoadingPage = (props) => {
    return (
        <div className={`${classes.LoadingPage} ${props.pageLoaded ? classes.Hide : ''}`}>
            <div className={classes.Spinner}>Loading...</div>
            <h1>Portfolio is loading, Please wait...</h1>
        </div>
    )
}

export default LoadingPage;
