import React from 'react';
import classes from './AboutMe.module.scss';
import picture from '../../assets/aboutme-pic.png';
import {ReactComponent as ShopifyAmLogo} from '../../assets/aboutme-shopify.svg';
import {ReactComponent as ReactAmLogo} from '../../assets/aboutme-react.svg';
import {ReactComponent as DbLogo} from '../../assets/server.svg';
import {ReactComponent as CompLogo} from '../../assets/compscience.svg';
import {ReactComponent as FinLogo} from '../../assets/finance.svg';

const AboutMe = () => {
    return (
        <section className={classes.AboutMe}>
            <h1>ABOUT ME</h1>
            <div>
                <h2>Nasreddine Yakhou</h2>
                <img src={picture} alt=""/>
                <p>I’m an eCommerce developer, with 2 years of web development experience.<br/>
                    I honestly love programming and solving problems and on top of that I take great pleasure in learning, 
                    I can’t support staying more than a day without acquiring a knowledge of something!<br/>
                    I also have intermediate skills in UI/UX design.</p>
                <ul>
                    <li>
                        <span><ShopifyAmLogo/></span>
                        <span>Skilled Shopify Theme Developer</span>
                    </li>

                    <li>
                        <span><ReactAmLogo/></span>
                        <span>Mastered React.js</span>
                    </li>

                    <li>
                        <span><DbLogo/></span>
                        <span>Mastered Databases</span>
                    </li>

                    <li>
                        <span><CompLogo/></span>
                        <span>Computer Science graduate</span>
                    </li>

                    <li>
                        <span><FinLogo/></span>
                        <span>Finance and accounting graduate</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default AboutMe
