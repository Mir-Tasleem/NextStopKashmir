import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import '../styles/Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Get in Touch</h2>
      <div className="contact-container">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;