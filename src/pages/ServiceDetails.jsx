import React from 'react';
import { useParams } from 'react-router-dom';
import { services } from '../data/services';
import '../styles/ServiceDetails.css';

function ServiceDetails() {
  const { id } = useParams();
  const service = services[id];

  if (!service) {
    return (
      <div className="service-details">
        <h1>Service not found</h1>
      </div>
    );
  }

  return (
    <div className="service-details">
      <h1>{service.title}</h1>
      {service.options && (
        <div className="service-options">
          {service.options.map((option, index) => (
            <div key={index} className="service-option">
              <h3>{option.title}</h3>
              <p>{option.description}</p>
              <ul>
                {option.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      {service.vehicles && (
        <div className="service-vehicle-parent">
          <h2>Available Vehicles</h2>
          <div className="service-vehicles">
            {service.vehicles.map((vehicle, index) => (
              <div key={index} className="vehicle-option">
                <h3>{vehicle.type}</h3>
                <p>Suitable for: {vehicle.suitable}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ServiceDetails;
