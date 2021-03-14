import classes from './Button.module.scss';
import React from 'react';

const Button = (props) => {
    return (
        <button className={classes.Button}>
            {props.children}
        </button>
    )
}

export default Button;
