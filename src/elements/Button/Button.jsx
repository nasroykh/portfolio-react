import classes from './Button.module.scss';
import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';

const Button = (props) => {
    let content;

    switch (props.type) {
        case 'link':
            content = (
                <a href={props.href} className={classes.Button}>
                    {props.children}
                </a>
            );
            break;

        case 'button':
            content = (
                <button type="submit" name="submit-form" className={classes.Button}>
                    {props.children}
                </button>
            );
            break;

        default:
            break;
    }
    return (
        <Auxiliary>
            {content}
        </Auxiliary>
    )
}

export default Button;
