import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './components/Services';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <AboutUs />
              <Services />
              <Features />
              <Testimonials />
              <Footer />
              {/* Contact Us Button */}
              <button className="contact-us-button" onClick={toggleContactForm}>
                Contact Us
              </button>
              {/* Popup Contact Form */}
              {showContactForm && (
                <div className="popup-overlay">
                  <div className="popup-content centered-popup">
                    <ContactForm />
                    <button className="close-button" onClick={toggleContactForm}>
                      X
                    </button>
                  </div>
                </div>
              )}
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;