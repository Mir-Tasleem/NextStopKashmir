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
        <div className="google-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.988909795311!2d74.89210127436097!3d34.01849561951383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e189007ad29577%3A0xfba3f7bacb2a31af!2sHaji%20ali%20mohd%20sofi%20tengan!5e0!3m2!1sen!2sin!4v1736012934894!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;

