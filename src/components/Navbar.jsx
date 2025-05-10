import React from 'react';
import './Navbar.css';
import { SignInButton, SignOutButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <nav className="nav-container">
      <div className="logo">
        Stor-Edge
        <img src="/logos.png" alt="logo-icon" className="logo-img" />
      </div>

      <ul className="nav-links">
        <li><a href="#about-us">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#features">Features</a></li>
      </ul>

      <div className="auth-section">
        {!isSignedIn ? (
          <SignInButton>
            <button className="auth-button login-button">Login</button>
          </SignInButton>
        ) : (
          <SignOutButton>
            <button className="auth-button logout-button">Logout</button>
          </SignOutButton>
        )}
        <img src="/userpic.jpg" alt="User" className="user-pic" />
      </div>
    </nav>
  );
};

export default Navbar;