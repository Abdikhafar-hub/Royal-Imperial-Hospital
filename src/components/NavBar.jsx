import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css'; // Import the corresponding CSS
import '@fortawesome/fontawesome-free/css/all.min.css';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
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
