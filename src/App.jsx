import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/contact/FloatingButtons';
import Home from './pages/Home';
import Packages from './pages/Packages';
import ServiceDetails from './pages/ServiceDetails';
import OffbeatPlaces from './pages/OffbeatPlaces';
import './App.css';
import ContactPage from './pages/Contactpage';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/offbeat-places" element={<OffbeatPlaces />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <FloatingButtons />
      <Footer />
    </div>
  );
}

export default App;
