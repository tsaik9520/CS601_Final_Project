import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="nav-bar">
        <Link to="my-portfolio-app">Home</Link>
        <Link to="/biography">About</Link>
        <Link to="/interests">Interests</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;