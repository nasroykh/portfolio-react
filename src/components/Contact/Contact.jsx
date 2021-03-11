import classes from './Contact.module.scss';
import React from 'react';
import Button from '../../elements/Button/Button';

const Contact = () => {
    return (
        <section className={classes.Contact}>
            <h1>CONTACT</h1>
            <Button>Send an e-mail</Button>
            <div>
                <span></span>
                <span>OR</span>
                <span></span>
            </div>
            <span>Fill this form to send a message</span>
            <form>
                <div>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name"/>
                </div>
                <div>
                    <label htmlFor="email">Your e-mail</label>
                    <input type="email" id="email"/>
                </div>
                <div>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject"/>
                </div>
                <div>
                    <label htmlFor="message">Your message</label>
                    <textarea name="" id="message" cols="30" rows="10"></textarea>
                </div>
                <Button>Submit</Button>
            </form>
        </section>
    )
}

export default Contact
