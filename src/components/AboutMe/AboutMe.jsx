import React from 'react';
import classes from './AboutMe.module.scss';
import PageTitle from '../../elements/PageTitle/PageTitle';
import SkillIcon from '../../elements/SkillIcon/SkillIcon';
import picture from '../../assets/aboutme-pic.png';
import {ReactComponent as ShopifyAmLogo} from '../../assets/aboutme-shopify.svg';
import {ReactComponent as ReactAmLogo} from '../../assets/aboutme-react.svg';
import {ReactComponent as DbLogo} from '../../assets/server.svg';
import {ReactComponent as CompLogo} from '../../assets/compscience.svg';
import {ReactComponent as FinLogo} from '../../assets/finance.svg';

const AboutMe = () => {
    return (
        <section className={classes.AboutMeContainer} id="about-me">
            <PageTitle>ABOUT ME</PageTitle>
            <div className={classes.AboutMe}>
                <h2>Nasreddine Yakhou</h2>
                <img src={picture} alt=""/>
                <p>I’m an eCommerce developer, with 2 years of web development experience.<br/><br/>
                    I honestly love programming and solving problems and on top of that I take great pleasure in learning, 
                    I can’t support staying more than a day without acquiring a knowledge of something!<br/><br/>
                    I also have intermediate skills in UI/UX design.</p>
                <ul className={classes.SkillSet}>
                    <li>
                        <SkillIcon><ShopifyAmLogo/></SkillIcon>
                        <span>Skilled Shopify Theme Developer</span>
                    </li>

                    <li>
                        <SkillIcon><ReactAmLogo/></SkillIcon>
                        <span>Mastered React.js</span>
                    </li>

                    <li>
                        <SkillIcon><DbLogo/></SkillIcon>
                        <span>Mastered Databases</span>
                    </li>

                    <li>
                        <SkillIcon><CompLogo/></SkillIcon>
                        <span>Computer Science graduate</span>
                    </li>

                    <li>
                        <SkillIcon><FinLogo/></SkillIcon>
                        <span>Finance and accounting graduate</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default AboutMe
