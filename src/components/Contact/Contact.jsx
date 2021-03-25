import classes from './Contact.module.scss';
import React from 'react';
import Button from '../../elements/Button/Button';
import PageTitle from '../../elements/PageTitle/PageTitle';

const Contact = () => {
    return (
        <section className={classes.Contact} id="contact">
            <PageTitle>CONTACT</PageTitle>
            <Button type="link" href="mailto:nasreddine.yakhou@pm.me">Send an e-mail <b> to copy e-mail address)</b></Button>
            <div className={classes.SeparatorLine}>
                <span></span>
                <span>OR</span>
                <span></span>
            </div>
            <span>Fill the form below to send a message</span>
            <form className={classes.ContactForm} action='https://formsubmit.io/send/f424f8a1-4f4e-4e00-9142-95ab3c64ae5f' method='POST'>
                <input name="_redirect" type="hidden" id="name" value="https://www.nasykh.com/"/>
                <div>
                    <input type="text" name="name" id="name" required/>
                    <label htmlFor="name">Your name</label>
                </div>
                <div>
                    <input type="email" name="email" id="email" required/>
                    <label htmlFor="email">Your e-mail</label>
                </div>
                <div>
                    <input type="text" name="subject" id="subject" required/>
                    <label htmlFor="subject">Subject</label>
                </div>
                <div>
                    <textarea name="message" id="message" rows="10" required></textarea>
                    <label htmlFor="message">Your message</label>
                </div>
                <Button type="button">Submit</Button>
            </form>
        </section>
    )
}

export default Contact
