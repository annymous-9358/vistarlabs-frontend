import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Vistaar Labs</h3>
          <p>Custom web applications and AI integration services.</p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>Copyright {year} Vistaar Labs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
