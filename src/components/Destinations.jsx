import React from 'react';
import '../styles/Destinations.css';
import { Link } from 'react-router-dom';
import Gulmarg from '../assets/Gulmarg.jpeg';
import dallake from '../assets/dallake.jpg';
import pahalgam from '../assets/pahalgam.jpg';
import sonmarg from '../assets/sonmarg.jpg'

function Destinations() {
  const destinations = [
    { name: 'Dal Lake', description: 'The jewel of Srinagar', image:dallake},
    { name: 'Gulmarg', description: 'Paradise for snow lovers', image:Gulmarg},
    { name: 'Pahalgam', description: 'Valley of Shepherds', image: pahalgam},
    { name: 'Sonamarg', description: 'The Meadow of Gold', image: sonmarg},
  ];

  return (
    <section className="destinations" id="destinations">
      <h2>Popular Destinations</h2>
      <div className="destinations-grid">
        {destinations.map((dest, index) => (
          <div className="destination-card" key={index}>
            <Link to='/offbeat-places'><img src={dest.image} alt="dest" /></Link>
            <h3>{dest.name}</h3>
            <p>{dest.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;
