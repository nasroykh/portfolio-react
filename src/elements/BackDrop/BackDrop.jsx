import classes from './BackDrop.module.scss';
import React from 'react';

const BackDrop = (props) => {
    return (
        <div className={`${classes.BackDrop} ${props.showBd ? classes.ShowBd : ''}`} onClick={props.hideBdHandler}></div>
    )
}

export default BackDrop;
