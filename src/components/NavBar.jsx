import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Mobile menu icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex md:space-x-6 md:w-full md:justify-center">
        <li className="text-white"><Link to="/" className="active">Home</Link></li>
        <li className="text-white"><Link to="/admins">Admins</Link></li>
        <li className="text-white"><Link to="/patients">Patients</Link></li>
        <li className="text-white"><Link to="/doctors">Doctors</Link></li>
        <li className="text-white"><Link to="/appointments">Appointments</Link></li>
        <li className="text-white"><Link to="/medical-records">Medical Records</Link></li>
      </ul>

      {/* Logout button */}
      <button className="bg-red-500 text-white py-2 px-4 rounded">
        Logout
      </button>

      {/* Mobile menu */}
      <ul className={`absolute md:hidden bg-gray-800 w-full top-16 transition-all duration-500 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
        <li className="text-white py-2 text-center"><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li className="text-white py-2 text-center"><Link to="/admins" onClick={() => setIsOpen(false)}>Admins</Link></li>
        <li className="text-white py-2 text-center"><Link to="/patients" onClick={() => setIsOpen(false)}>Patients</Link></li>
        <li className="text-white py-2 text-center"><Link to="/doctors" onClick={() => setIsOpen(false)}>Doctors</Link></li>
        <li className="text-white py-2 text-center"><Link to="/appointments" onClick={() => setIsOpen(false)}>Appointments</Link></li>
        <li className="text-white py-2 text-center"><Link to="/medical-records" onClick={() => setIsOpen(false)}>Medical Records</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
