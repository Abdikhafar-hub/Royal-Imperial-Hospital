import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import the corresponding CSS

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
        <li>
          <Link to="/" className="active">Home</Link>
        </li>
        <li>
          <Link to="/admins">Admins</Link>
        </li>
        <li>
          <Link to="/patients">Patients</Link>
        </li>
        <li>
          <Link to="/doctors">Doctors</Link>
        </li>
        <li>
          <Link to="/appointments">Appointments</Link>
        </li>
        <li>
          <Link to="/medical-records">Medical Records</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
