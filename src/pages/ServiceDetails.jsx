import React from 'react';
import { useParams } from 'react-router-dom';
import { services } from '../data/services';
import '../styles/ServiceDetails.css';
import Hotelheewan from '../assets/Hotelheewan.Jpeg';
import Hotelrahvilla from '../assets/HOTELRAHVILLAS.Jpeg';
import Namrose from '../assets/Namrose.Jpeg';
import Khyberhimalayan from '../assets/Khyberhimalayan.jpeg';
import Countrysideresorts from '../assets/Countrysideresorts.jpeg';
import HTDBN from '../assets/HOTELTHEDEWANBYNAQASH.Jpeg';
import Houseboat from '../assets/Houseboat.jpg'
import Houseboat2 from '../assets/Houseboat2.jpg'
import Houseboat3 from '../assets/Houseboat3.jpg'

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
    <div className="service-page">
      <div className="service-details">
        <h1>{service.title}</h1>
        {service.options && (
          <div className="service-options">
            {service.options.map((option, index) => (
              <div key={index} className="service-option">
                <img src={option.image}></img>
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
      <div className="service-images">
        <div class="grid-item"><img src={Hotelheewan} alt="Image 1"/></div>
        <div class="grid-item"><img src={Hotelrahvilla} alt="Image 2"/></div>
        <div class="grid-item"><img src={Namrose} alt="Image 3"/></div>
        <div class="grid-item"><img src={Khyberhimalayan} alt="Image 4"/></div>
        <div class="grid-item"><img src={Countrysideresorts} alt="Image 5"/></div>
        <div class="grid-item"><img src={HTDBN} alt="Image 6"/></div>
        <div class="grid-item"><img src={Houseboat} alt="Image 7"/></div>
        <div class="grid-item"><img src={Houseboat2} alt="Image 8"/></div>
        <div class="grid-item"><img src={Houseboat3} alt="Image 9"/></div>
      </div>
    </div>
  );
}

export default ServiceDetails;
