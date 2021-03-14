import classes from './Projects.module.scss';
import React from 'react'
import PageTitle from '../../elements/PageTitle/PageTitle';
import SkillIcon from '../../elements/SkillIcon/SkillIcon';
import pic from '../../assets/project-view.png';
import CodeIcon from '../../elements/CodeIcon/CodeIcon';
import ViewIcon from '../../elements/ViewIcon/ViewIcon';
import {ReactComponent as SlideIcon} from '../../assets/arrow-slide.svg';
import {ReactComponent as BootstrapLogo} from '../../assets/bootstrap.svg';
import {ReactComponent as CssLogo} from '../../assets/css.svg';
import {ReactComponent as FigmaLogo} from '../../assets/figma.svg';
import {ReactComponent as HtmlLogo} from '../../assets/html.svg';
import {ReactComponent as JqueryLogo} from '../../assets/jquery.svg';
import {ReactComponent as JsLogo} from '../../assets/js.svg';
import {ReactComponent as MongoDbLogo} from '../../assets/mongodb.svg';
import {ReactComponent as MysqlLogo} from '../../assets/mysql.svg';
import {ReactComponent as NodejsLogo} from '../../assets/nodejs.svg';
import {ReactComponent as ReactLogo} from '../../assets/react.svg';
import {ReactComponent as ReduxLogo} from '../../assets/redux.svg';
import {ReactComponent as SassLogo} from '../../assets/sass.svg';
import {ReactComponent as ShopifyLogo} from '../../assets/shopify.svg';
import {ReactComponent as TsLogo} from '../../assets/ts.svg';
import {ReactComponent as XdLogo} from '../../assets/xd.svg';

const Projects = () => {
    return (
        <section className={classes.Projects} id="projects">
            <PageTitle>PROJECTS</PageTitle>
            <div className={classes.ProjectsGrid}>
                <div className={classes.SlideControls}>
                        <button><SlideIcon/></button>
                        <button><SlideIcon/></button>
                </div>
                <div className={classes.Project}>
                        <h2>Project 1 title</h2>
                    <div className={classes.ProjectView}>
                        <img src={pic} alt=""/>
                        <div className={classes.ProjectDetails}>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <div className={classes.ProjectLinks}>
                                <a href="#">
                                    <span>View code</span>
                                    <CodeIcon color="#101820"/>
                                </a>
                                <a href="#">
                                    <ViewIcon color="#101820"/>
                                    <span>Visit</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={classes.BuiltUsing}>
                        <span>Built using :</span>
                        <div className={classes.TechLogos}>
                            <div>
                                <SkillIcon>
                                    <JsLogo/>
                                </SkillIcon>
                                <span>JavaScript</span>
                            </div>
                            <div>
                                <SkillIcon>
                                    <HtmlLogo/>
                                </SkillIcon>
                                <span>HTML 5</span>
                            </div>
                            <div>
                                <SkillIcon>
                                    <CssLogo/>
                                </SkillIcon>
                                <span>CSS 3</span>
                            </div>
                            <div>
                                <SkillIcon>
                                    <SassLogo/>
                                </SkillIcon>
                                <span>SASS</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.Project}>
                        <h2>Project 2 title</h2>
                    <div className={classes.ProjectView}>
                        <img src={pic} alt=""/>
                        <div className={classes.ProjectDetails}>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <div className={classes.ProjectLinks}>
                                <a href="#">
                                    <span>View code</span>
                                    <CodeIcon color="#101820"/>
                                </a>
                                <a href="#">
                                    <ViewIcon color="#101820"/>
                                    <span>Visit</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={classes.BuiltUsing}>
                        <span>Built using :</span>
                        <div className={classes.TechLogos}>
                            <div>
                                <SkillIcon>
                                    <JsLogo/>
                                </SkillIcon>
                                <span>JavaScript</span>
                            </div>
                            <div>
                                <SkillIcon>
                                    <HtmlLogo/>
                                </SkillIcon>
                                <span>HTML 5</span>
                            </div>
                            <div>
                                <SkillIcon>
                                    <CssLogo/>
                                </SkillIcon>
                                <span>CSS 3</span>
                            </div>
                            <div>
                                <SkillIcon>
                                    <SassLogo/>
                                </SkillIcon>
                                <span>SASS</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.Project}>
                        <h2>Project 3 title</h2>
                    <div className={classes.ProjectView}>
                        <img src={pic} alt=""/>
                        <div className={classes.ProjectDetails}>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <div className={classes.ProjectLinks}>
                                <a href="#">
                                    <span>View code</span>
                                    <CodeIcon color="#101820"/>
                                </a>
                                <a href="#">
                                    <ViewIcon color="#101820"/>
                                    <span>Visit</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={classes.BuiltUsing}>
                        <span>Built using :</span>
                        <div className={classes.TechLogos}>
                            <div>
                                <SkillIcon>
                                    <JsLogo/>
                                </SkillIcon>
                                <span>JavaScript</span>
                            </div>
                            <div>
                                <SkillIcon>
                                    <HtmlLogo/>
                                </SkillIcon>
                                <span>HTML 5</span>
                            </div>
                            <div>
                                <SkillIcon>
                                    <CssLogo/>
                                </SkillIcon>
                                <span>CSS 3</span>
                            </div>
                            <div>
                                <SkillIcon>
                                    <SassLogo/>
                                </SkillIcon>
                                <span>SASS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
