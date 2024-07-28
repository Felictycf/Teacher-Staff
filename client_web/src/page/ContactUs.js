import React from 'react';
import './ContactUs.css';

function ContactUs() {
    return (
        <div className="contact-us-container">
            <h1>Contact Us</h1>
            <p>Please feel free to reach out to us with any questions or inquiries.</p>
            <form className="contact-us-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactUs;
