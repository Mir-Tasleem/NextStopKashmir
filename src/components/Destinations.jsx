import React from 'react';
import '../styles/Destinations.css';
import { Link } from 'react-router-dom';

function Destinations() {
  const destinations = [
    { name: 'Dal Lake', description: 'The jewel of Srinagar' },
    { name: 'Gulmarg', description: 'Paradise for snow lovers' },
    { name: 'Pahalgam', description: 'Valley of Shepherds' },
    { name: 'Sonamarg', description: 'The Meadow of Gold' },
  ];

  return (
    <section className="destinations" id="destinations">
      <h2>Popular Destinations</h2>
      <div className="destinations-grid">
        {destinations.map((dest, index) => (
          <div className="destination-card" key={index}>
            <h3>{dest.name}</h3>
            <p>{dest.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;
