import classes from './SkillIcon.module.scss';
import React from 'react';

const SkillIcon = (props) => {
    return (
        <span className={classes.SkillIcon}>
            {props.children}
        </span>
    )
}

export default SkillIcon;
