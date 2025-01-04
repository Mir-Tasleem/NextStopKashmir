import React from 'react';
import { offbeatPlaces } from '../data/offbeat-places';
import OffbeatCard from '../components/offbeat/OffbeatCard';
import '../styles/OffbeatPlaces.css';
import { Link } from 'react-router-dom';

function OffbeatPlaces() {
  return (
    <div className="offbeat-places">
      <h1>Discover Hidden Gems</h1>
        <div className="offbeat-grid">
          {offbeatPlaces.map((place) => (
            <OffbeatCard key={place.id} place={place} />
          ))}
        </div>
    </div>
  );
}

export default OffbeatPlaces;
