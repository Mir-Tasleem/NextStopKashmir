import React from 'react';
import { tourPackages } from '../data/packages';
import PackageCard from '../components/packages/PackageCard';
import '../styles/Packages.css';

function Packages() {
  return (
    <div className="packages-page">
      <h1>Tour Packages</h1>
      
      <section className="package-section">
        <h2>Religious Tours</h2>
        <div className="packages-grid">
          {tourPackages.religious.map(pkg => (
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </div>
      </section>

      <section className="package-section">
        <h2>Adventure Tours</h2>
        <div className="packages-grid">
          {tourPackages.adventure.map(pkg => (
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Packages;