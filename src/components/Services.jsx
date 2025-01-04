import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

function Services() {
  const services = [
    {
      title: 'Tour Packages',
      description: 'Customized tour packages for individuals, families, and groups',
      link: '/packages'
    },
    {
      title: 'Hotel Booking',
      description: 'Best deals on luxury, boutique, and budget accommodations',
      link: '/services/accommodation'
    },
    {
      title: 'Transport Services',
      description: 'Reliable transportation with experienced local drivers',
      link: '/services/transport'
    },
    {
      title: 'Adventure Activities',
      description: 'Skiing, trekking, camping, and other adventure sports',
      link: '/packages'
    }
  ];

  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <Link to={service.link} key={index} className="service-card-link">
            <div className="service-card">
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