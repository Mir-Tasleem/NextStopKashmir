import React from 'react';
import '../styles/Hero.css';
import Video from '../assets/video.mp4';

function Hero() {
  return (
    <div className="hero" id="home">
      <video className="hero-video" autoPlay muted loop>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>Discover Paradise on Earth</h1>
        <p>Experience the breathtaking beauty of Kashmir</p>
        <button className="cta-button">
          <a href="tel:+916006744142">Book Now</a>
        </button>
      </div>
    </div>
  );
}

export default Hero;
