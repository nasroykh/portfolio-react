import classes from './Projects.module.scss';
import React from 'react'

const Projects = () => {
    return (
        <section className={classes.Projects}>
            <h1>PROJECTS</h1>
            <div>
                <div>
                    <span>Built using :</span>
                    <div>
                        CSS
                    </div>
                </div>
                <div>
                    <img src="" alt=""/>
                    <h2>Project title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <div>
                        <button>View code</button>
                        <button>Visit</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
