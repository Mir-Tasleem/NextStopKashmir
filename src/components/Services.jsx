import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';
import transport from '../assets/transport.jpg'
import travel from '../assets/Travel.jpg'
import adventure from '../assets/Adventure.jpg'
import Hotelrahvilla from '../assets/HOTELRAHVILLAS.Jpeg';


function Services() {
  const services = [
    {
      title: 'Tour Packages',
      description: 'Customized tour packages for individuals, families, and groups',
      link: '/packages',
      image: travel
    },
    {
      title: 'Hotel Booking',
      description: 'Best deals on luxury, boutique, and budget accommodations',
      link: '/services/accommodation',
      image: Hotelrahvilla
    },
    {
      title: 'Transport Services',
      description: 'Reliable transportation with experienced local drivers',
      link: '/services/transport',
      image: transport
    },
    {
      title: 'Adventure Activities',
      description: 'Skiing, trekking, camping, and other adventure sports',
      link: '/packages',
      image: adventure
    }
  ];

  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <Link to={service.link} key={index} className="service-card-link">
            <div className="service-card">
              <img src={service.image}></img>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Services;