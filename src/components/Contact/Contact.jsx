import classes from './Contact.module.scss';
import React from 'react';
import Button from '../../elements/Button/Button';
import PageTitle from '../../elements/PageTitle/PageTitle';

const Contact = () => {
    return (
        <section className={classes.Contact} id="contact">
            <PageTitle>CONTACT</PageTitle>
            <Button>Send an e-mail</Button>
            <div className={classes.SeparatorLine}>
                <span></span>
                <span>OR</span>
                <span></span>
            </div>
            <span>Fill this form to send a message</span>
            <form className={classes.ContactForm}>
                <div>
                    <input type="text" id="name" required/>
                    <label htmlFor="name">Your name</label>
                </div>
                <div>
                    <input type="email" id="email" required/>
                    <label htmlFor="email">Your e-mail</label>
                </div>
                <div>
                    <input type="text" id="subject" required/>
                    <label htmlFor="subject">Subject</label>
                </div>
                <div>
                    <textarea name="" id="message" cols="20" rows="10" required></textarea>
                    <label htmlFor="message">Your message</label>
                </div>
                <Button>Submit</Button>
            </form>
        </section>
    )
}

export default Contact
