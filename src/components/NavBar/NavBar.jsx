import React from 'react';
import classes from'./NavBar.module.scss';
import Logo from '../../elements/Logo/Logo';

const NavBar = () => {
    
    

    return (
        <nav className={classes.NavBar}>
            {/* Page Title maybe */}
            <Logo/>
            
            <div className={classes.MenuBtn}>
                <button>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}

export default NavBar
