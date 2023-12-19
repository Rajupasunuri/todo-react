import React, { useState } from 'react';
//import './app.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">Logo</span>
      </div>
      <button className="navbar-toggle" onClick={toggleNavbar}>
        Menu
      </button>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <a href="https://chat.openai.com/c/298e29fb-df16-49ba-a2af-cae999e1a813" className="navbar-link">
          Home
        </a>
        <a href="https://chat.openai.com/c/298e29fb-df16-49ba-a2af-cae999e1a813" className="navbar-link">
          About
        </a>
        <a href="https://chat.openai.com/c/298e29fb-df16-49ba-a2af-cae999e1a813" className="navbar-link">
          Services
        </a>
        <a href="https://chat.openai.com/c/298e29fb-df16-49ba-a2af-cae999e1a813" className="navbar-link">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
