import classes from './PageTitle.module.scss';
import React from 'react';

const PageTitle = (props) => {
    return (
        <h1 className={classes.PageTitle}>{props.children}</h1>
    )
}

export default PageTitle;