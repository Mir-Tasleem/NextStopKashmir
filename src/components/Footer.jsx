import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>NextStop #Kashmir</h3>
          <p>Your gateway to paradise on earth</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            <a href="mailto:nextstopkashmir@gmail.com">
              Email: nextstopkashmir@gmail.com
            </a>
          </p>
          <p>Phone: +91 6006744142</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 NextStop #Kashmir. All rights reserved.</p>
        <p>
          Created by: <a href="jehlumcites.in">JhelumSites</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
