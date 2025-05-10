import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Welcome to Our Inventory Management System</h1>
        <p>Streamline your inventory and operations with ease!</p>

        <div className="popup-wrapper">
          <Link to="/features" className="btn">
            Learn More
          </Link>
        </div>

        <div className="auth-links">
          {/* Clerk buttons are now in the Navbar */}
        </div>
      </div>
    </section>
  );
};

export default Home;