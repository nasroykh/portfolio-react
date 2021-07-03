import classes from './Projects.module.scss';
import React from 'react'
import PageTitle from '../../elements/PageTitle/PageTitle';
import SkillIcon from '../../elements/SkillIcon/SkillIcon';
import rbform from '../../assets/rbform.png';
import cmswebapp from '../../assets/cmswebapp.gif';
import advent from '../../assets/advent.png';
import hablamos from '../../assets/hablamos.png';
import CodeIcon from '../../elements/CodeIcon/CodeIcon';
import ViewIcon from '../../elements/ViewIcon/ViewIcon';
import {ReactComponent as SlideIcon} from '../../assets/arrow-slide.svg';
import {ReactComponent as BootstrapLogo} from '../../assets/bootstrap.svg';
// import {ReactComponent as CssLogo} from '../../assets/css.svg';
import {ReactComponent as AjaxLogo} from '../../assets/ajax.svg';
import {ReactComponent as FigmaLogo} from '../../assets/figma.svg';
// import {ReactComponent as HtmlLogo} from '../../assets/html.svg';
import {ReactComponent as JqueryLogo} from '../../assets/jquery.svg';
import {ReactComponent as JsLogo} from '../../assets/js.svg';
import {ReactComponent as MongoDbLogo} from '../../assets/mongodb.svg';
import {ReactComponent as MysqlLogo} from '../../assets/mysql.svg';
import {ReactComponent as NodejsLogo} from '../../assets/nodejs.svg';
import {ReactComponent as ReactLogo} from '../../assets/react.svg';
import {ReactComponent as ReduxLogo} from '../../assets/redux.svg';
import {ReactComponent as SassLogo} from '../../assets/sass.svg';
// import {ReactComponent as ShopifyLogo} from '../../assets/shopify.svg';
import {ReactComponent as SocketIOLogo} from '../../assets/socketio.svg';
// import {ReactComponent as TsLogo} from '../../assets/ts.svg';
import {ReactComponent as XdLogo} from '../../assets/xd.svg';


const Projects = (props) => {
    let slideStyle = {
        transform: `translate(-${props.slidePosition}00%)`
    }
    
    return (
        <section className={classes.Projects} id="projects">
            <PageTitle>PROJECTS</PageTitle>
            <div className={classes.ProjectsGrid}>
                <div className={classes.SlideControls}>
                        <button id="prev" onClick={props.slideHandler}><SlideIcon/></button>
                        <button id="next" onClick={props.slideHandler}><SlideIcon/></button>
                </div>
                <div className={classes.Project} style={slideStyle}>
                        <h2>Hablamos - Web app</h2>
                    <div className={classes.ProjectView}>
                        <img src={hablamos} alt=""/>
                        <div className={classes.ProjectDetails}>
                        <p>Chat web app developed using MERN Stack (Real-time messaging, group chat system, dark/light mode, messages and friend requests notifications...etc)</p>                            
                            <div className={classes.ProjectLinks}>
                                <a href="https://github.com/nasroykh/hablamos-react-frontend-mobile" rel="noreferrer" target='_blank'>
                                    <span>View code</span>
                                    <CodeIcon color="#101820"/>
                                </a>
                                <a href="https://hablamos.me/" rel="noreferrer" target='_blank'>
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
                                    <FigmaLogo/>
                                </SkillIcon>
                                <span>Figma</span>
                            </div>
                            <div>
                                <SkillIcon>
                                    <ReactLogo/>
                                </SkillIcon>
                                <span>React.js</span>
                            </div>
                            <div>
                                <SkillIcon>
                                    <ReduxLogo/>
                                </SkillIcon>
                                <span>Redux</span>
                            </div>
                            <div>
                                <SkillIcon>
                                    <NodejsLogo/>
                                </SkillIcon>
                                <span>Node.js</span>
                            </div>
                            <div>
                                <SkillIcon>
                                    <SocketIOLogo/>
                                </SkillIcon>
                                <span>Socket.io</span>
                            </div>
                            <div>
                                <SkillIcon>
                                    <MongoDbLogo/>
                                </SkillIcon>
                                <span>MongoDB</span>
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
                <div className={classes.Project} style={slideStyle}>
                        <h2>Advent - Agency Website</h2>
                    <div className={classes.ProjectView}>
                        <img src={advent} alt=""/>
                        <div className={classes.ProjectDetails}>
                            <p>Landing page developed using Vishwajeet's UI design on Figma.
                                I designed the mobile version to follow the "mobile-first" approach.</p>
                            <div className={classes.ProjectLinks}>
                                <a href="https://github.com/nasroykh/advent-frontend" rel="noreferrer" target='_blank'>
                                    <span>View code</span>
                                    <CodeIcon color="#101820"/>
                                </a>
                                <a href="https://advent-landingpage-6c3c64.netlify.app/" rel="noreferrer" target='_blank'>
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
                                    <FigmaLogo/>
                                </SkillIcon>
                                <span>Figma</span>
                            </div>
                            <div>
                                <SkillIcon>
                                    <JsLogo/>
                                </SkillIcon>
                                <span>JavaScript</span>
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
                <div className={classes.Project} style={slideStyle}>
                    <h2>RbForm - Web app</h2>
                    <div className={classes.ProjectView}>
                        <img src={rbform} alt=""/>
                        <div className={classes.ProjectDetails}>
                            <p>Web app developed during my internship, I introduced it at my thesis presentation.</p>
                            <div className={classes.ProjectLinks}>
                                <a href="https://github.com/nasroykh/rbform-nodejs" rel="noreferrer" target='_blank'>
                                    <span>View code</span>
                                    <CodeIcon color="#101820"/>
                                </a>
                                <a href="https://youtu.be/Sael3KElCrA" rel="noreferrer" target='_blank'>
                                    <ViewIcon color="#101820"/>
                                    <span>Show preview</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={classes.BuiltUsing}>
                        <span>Built using :</span>
                        <div className={classes.TechLogos}>
                            <div>
                                <SkillIcon>
                                    <JqueryLogo/>
                                </SkillIcon>
                                <span>jQuery</span>
                            </div>
                            <div>
                                <SkillIcon>
                                    <AjaxLogo/>
                                </SkillIcon>
                                <span>AJAX</span>
                            </div>
                            <div>
                                <SkillIcon>
                                    <BootstrapLogo/>
                                </SkillIcon>
                                <span>Bootstrap</span>
                            </div>
                            <div>
                                <SkillIcon>
                                    <XdLogo/>
                                </SkillIcon>
                                <span>Adobe Xd</span>
                            </div>
                            <div>
                                <SkillIcon>
                                    <NodejsLogo/>
                                </SkillIcon>
                                <span>Node.js</span>
                            </div>
                            <div>
                                <SkillIcon>
                                    <MysqlLogo/>
                                </SkillIcon>
                                <span>MySQL</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.Project} style={slideStyle}>
                        <h2>B.M.C - Web app</h2>
                    <div className={classes.ProjectView}>
                        <img src={cmswebapp} alt=""/>
                        <div className={classes.ProjectDetails}>
                            <p>React web app designed and developed for a medical center.</p>
                            <div className={classes.ProjectLinks}>
                                <a href="https://github.com/nasroykh/cms-react-frontend" rel="noreferrer" target='_blank'>
                                    <span>View code</span>
                                    <CodeIcon color="#101820"/>
                                </a>
                                <a href="/" rel="noreferrer" target='_blank'>
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
                                    <FigmaLogo/>
                                </SkillIcon>
                                <span>Figma</span>
                            </div>
                            <div>
                                <SkillIcon>
                                    <SassLogo/>
                                </SkillIcon>
                                <span>SASS</span>
                            </div>
                            <div>
                                <SkillIcon>
                                    <ReactLogo/>
                                </SkillIcon>
                                <span>React.js</span>
                            </div>
                            <div>
                                <SkillIcon>
                                    <NodejsLogo/>
                                </SkillIcon>
                                <span>Node.js</span>
                            </div>
                            <div>
                                <SkillIcon>
                                    <MysqlLogo/>
                                </SkillIcon>
                                <span>MySQL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
