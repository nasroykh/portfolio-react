import classes from './SideDrawer.module.scss';
import React from 'react';
import Logo from '../Logo/Logo';

const SideDrawer = (props) => {
    return (
        <ul className={`${classes.SideDrawer} ${props.showSd ? classes.ShowSd : ''}`}>
            <li><Logo/></li>
            <li><a onClick={props.showSdHandler} className={classes.Active} href="#home">Home</a></li>
            <li><a onClick={props.showSdHandler} href="#projects">Projects</a></li>
            <li><a onClick={props.showSdHandler} href="#about-me">About Me</a></li>
            <li><a onClick={props.showSdHandler} href="#contact">Contact</a></li>
        </ul>
    )
}

export default SideDrawer
