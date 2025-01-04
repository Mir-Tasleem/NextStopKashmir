import React from 'react';
import { CONTACT_INFO } from '../../constants/contact';

function PackageCard({ package: pkg }) {
  return (
    <div className="package-card">
      <h3>{pkg.title}</h3>
      <img src={pkg.image} alt="pkg" />
      <p className="duration">{pkg.duration}</p>
      <div className="highlights">
        <h4>Highlights:</h4>
        <ul>
          {pkg.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>
      <p className="description">{pkg.description}</p>
      <button className="book-now">
        <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target='_blank' rel='noopener noreferrer'>Book Now</a>
      </button>
    </div>
  );
}

export default PackageCard;