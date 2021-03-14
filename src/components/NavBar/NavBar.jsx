import React from 'react';
import classes from'./NavBar.module.scss';
import Logo from '../../elements/Logo/Logo';
import SideDrawer from '../../elements/SideDrawer/SideDrawer';
import BackDrop from '../../elements/BackDrop/BackDrop';

const NavBar = (props) => {
    
    return (
        <nav className={classes.NavBar}>
            {/* Page Title maybe */}
            <Logo/>
            
            <div className={`${classes.MenuBtn} ${props.showSd ? classes.CloseBtn : ''}`}>
                <button onClick={props.showSdHandler}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <SideDrawer showSd={props.showSd} showSdHandler={props.showSdHandler}/>
            <BackDrop showBd={props.showSd} hideBdHandler={props.showSdHandler}/>
        </nav>
    )
}

export default NavBar
