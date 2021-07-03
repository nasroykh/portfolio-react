import classes from './Home.module.scss';
import React from 'react';
import Button from '../../elements/Button/Button';
import {ReactComponent as GithubLogo} from '../../assets/github.svg';
import {ReactComponent as InstagramLogo} from '../../assets/instagram.svg';
import {ReactComponent as LinkedinLogo} from '../../assets/linkedin.svg';
import {ReactComponent as ResumeLogo} from '../../assets/resume.svg';
import {ReactComponent as ScrollLogo} from '../../assets/scroll.svg';
import resume from '../../assets/nasykh-resume.pdf';

const Home = (props) => {

    return (
        <section className={classes.Home} id="home">
            <div className={classes.HeroSection}>
                <h1>Hi! My name is <b>Nas </b> <br/>
                    I am a <b>Software Developer</b></h1>
                <div className={classes.HeroButtons}>
                    <Button type="link" href="#projects">View Projects</Button>
                    <Button type="link" href="#contact">Contact Now</Button>
                </div>
            </div>

            <aside className={classes.Aside}>
                <ul>
                    <li>
                        <a href="https://github.com/nasroykh" rel="noreferrer" target='_blank'>
                            <span>Github</span>
                            <GithubLogo/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/nasreddine-yakhou-4b619a157" rel="noreferrer" target='_blank'>
                            <span>LinkedIn</span>
                            <LinkedinLogo/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/nastech.dev" rel="noreferrer" target='_blank'>
                            <span>Instagram</span>
                            <InstagramLogo/>
                        </a>
                    </li>
                    <li>
                        <a href={resume} download>
                            <span>Resume</span>
                            <ResumeLogo/>
                        </a>
                    </li>
                </ul>
            </aside>

            <div className={`${classes.ScrollDown} ${props.scrolling ? classes.HideScrollDown : ''}`}>
                <span>SCROLL DOWN</span>
                <ScrollLogo/>
            </div>

        </section>
    )
}

export default Home
