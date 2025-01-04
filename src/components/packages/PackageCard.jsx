import React from 'react';

function PackageCard({ package: pkg }) {
  return (
    <div className="package-card">
      <h3>{pkg.title}</h3>
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
      <button className="book-now">Book Now</button>
    </div>
  );
}

export default PackageCard;