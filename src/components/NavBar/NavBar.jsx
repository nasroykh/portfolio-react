import React from 'react';
import classes from'./NavBar.module.scss';
import Logo from '../../elements/Logo/Logo';


const NavBar = (props) => {
    
    return (
        <nav className={`${classes.NavBar} ${props.scrolling ? classes.FixedNav : ''}`}>
            {/* Page Title maybe */}
            <Logo scrolling={props.scrolling}/>
            
            <div className={`${classes.MenuBtn} ${props.showSd ? classes.CloseBtn : ''}`}>
                <button onClick={props.showSdHandler}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}

export default NavBar
