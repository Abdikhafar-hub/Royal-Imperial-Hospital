import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
      </div>
      <ul className={`md:flex md:space-x-6 md:items-center absolute md:relative bg-gray-800 md:bg-transparent w-full md:w-auto transition-all duration-500 ease-in-out ${isOpen ? 'top-16' : '-top-full'}`}>
        <li className="text-white py-2 md:py-0 text-center"><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li className="text-white py-2 md:py-0 text-center"><Link to="/admins" onClick={() => setIsOpen(false)}>Admins</Link></li>
        <li className="text-white py-2 md:py-0 text-center"><Link to="/patients" onClick={() => setIsOpen(false)}>Patients</Link></li>
        <li className="text-white py-2 md:py-0 text-center"><Link to="/doctors" onClick={() => setIsOpen(false)}>Doctors</Link></li>
        <li className="text-white py-2 md:py-0 text-center"><Link to="/appointments" onClick={() => setIsOpen(false)}>Appointments</Link></li>
        <li className="text-white py-2 md:py-0 text-center"><Link to="/medical-records" onClick={() => setIsOpen(false)}>Medical Records</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
