import React, { useState } from 'react';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faTags,
  faBell,
  faUser,
  faCartShopping,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'Home', icon: faHouse, label: 'Home' },
    { id: 'Offers', icon: faTags, label: 'Offers' },
    { id: 'Notification', icon: faBell, label: 'Notification' },
    { id: 'Profile', icon: faUser, label: 'Profile' },
  ];

  return (
    <header className="header">
      <div className="logo">
        <img src="https://d26lh6sqkii1nb.cloudfront.net/products/medingen-logo.jpg" alt="Logo" className="logo-image" />
        <span className="logo-text">Medingen</span>
      </div>


      <button
        className="hamburger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
      </button>

      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href="#"
            className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab(item.id);
              setIsMenuOpen(false); 
            }}
          >
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={item.icon} className="icon" />
            </div>
            <span className="nav-label">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="cart-icon">
        <FontAwesomeIcon icon={faCartShopping} className="icon cart-icon-style" />
      </div>
    </header>
  );
};

export default Header;