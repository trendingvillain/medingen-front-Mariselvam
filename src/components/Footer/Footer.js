import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-section">
          <img src="https://medingen.in/finalmiglogo-2-2.svg" alt="Medingen Logo" className="logo" />
          <h2>Medingen</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at urna et leo rhoncus mattis. Maecenas vel scelerisque nunc.
          </p>
        </div>
        <div className="columns">
          <div className="column">
            <h3>Website</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">How it works</a></li>
              <li><a href="#">What's our customers say?</a></li>
            </ul>
          </div>
          <div className="column">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>
          <div className="column">
            <h3>More</h3>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Become Member</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy;2024 Medingen. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;