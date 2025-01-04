import React from 'react';

function OffbeatCard({ place }) {
  return (
    <div className="offbeat-card">
      <h3>{place.name}</h3>
      <p className="description">{place.description}</p>
      <div className="activities">
        <h4>Activities:</h4>
        <ul>
          {place.activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OffbeatCard;