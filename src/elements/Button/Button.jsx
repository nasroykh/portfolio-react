import classes from './Button.module.scss';
import React from 'react';

const Button = (props) => {
    return (
        <div className={classes.Button}>
            <button>{props.children}</button>
        </div>
    )
}

export default Button;
