import classes from './Home.module.scss';
import React from 'react';
import Button from '../../elements/Button/Button';
import {ReactComponent as GithubLogo} from '../../assets/github.svg';
import {ReactComponent as InstagramLogo} from '../../assets/instagram.svg';
import {ReactComponent as LinkedinLogo} from '../../assets/linkedin.svg';
import {ReactComponent as ResumeLogo} from '../../assets/resume.svg';
import {ReactComponent as ScrollLogo} from '../../assets/scroll.svg';

const Home = () => {

    return (
        <section className={classes.Home} id="home">
            <div className={classes.HeroSection}>
                <h1>Hi! My name’s <b>Nas </b> <br/>
                    I’m an <b>eCommerce developer</b></h1>
                <div className={classes.HeroButtons}>
                    <Button>View Projects</Button>
                    <Button>Contact Now</Button>
                </div>
            </div>

            <aside className={classes.Aside}>
                <ul>
                    <li>
                        <a href="https://github.com/nasroykh">
                            <GithubLogo/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/nasreddine-yakhou-4b619a157">
                            <LinkedinLogo/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/nastech.dev">
                            <InstagramLogo/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <ResumeLogo/>
                        </a>
                    </li>
                </ul>
            </aside>

            {/* <div className={classes.ScrollDown}>
                <span>SCROLL DOWN</span>
                <ScrollLogo/>
            </div> */}

        </section>
    )
}

export default Home
