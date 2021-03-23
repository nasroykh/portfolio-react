import classes from './Contact.module.scss';
import React from 'react';
import Button from '../../elements/Button/Button';
import PageTitle from '../../elements/PageTitle/PageTitle';

const Contact = () => {
    return (
        <section className={classes.Contact} id="contact">
            <PageTitle>CONTACT</PageTitle>
            <Button type="link" href="mailto:nasreddine.yakhou@protonmail.com">Send an e-mail <b> to copy e-mail address)</b></Button>
            <div className={classes.SeparatorLine}>
                <span></span>
                <span>OR</span>
                <span></span>
            </div>
            <span>Fill this form to send a message (NOT FUNCTIONAL)</span>
            <form className={classes.ContactForm}>
                <div>
                    <input type="text" name="your-name" id="name" required/>
                    <label htmlFor="name">Your name</label>
                </div>
                <div>
                    <input type="email" name="your-email" id="email" required/>
                    <label htmlFor="email">Your e-mail</label>
                </div>
                <div>
                    <input type="text" name="subject" id="subject" required/>
                    <label htmlFor="subject">Subject</label>
                </div>
                <div>
                    <textarea name="your-message" id="message" rows="10" required></textarea>
                    <label htmlFor="message">Your message</label>
                </div>
                <Button type="button">Submit</Button>
            </form>
        </section>
    )
}

export default Contact
