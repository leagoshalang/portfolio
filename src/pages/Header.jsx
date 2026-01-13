import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Name aligned left */}
        <h1 className="text-3xl font-bold text-blue-600 flex-shrink-0">
          Shalang Leago
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            </li>
            <li>
              <Link to="/languages" className="text-gray-700 hover:text-blue-600">Languages</Link>
            </li>
            <li>
              <Link to="/projects" className="text-gray-700 hover:text-blue-600">Projects</Link>
            </li>
            <li>
              <Link to="/contacts" className="text-gray-700 hover:text-blue-600">Contacts</Link>
            </li>
          </ul>
        </nav>

      
        <button
          className="md:hidden text-gray-700 hover:text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden fixed top-16 left-0 w-full bg-white shadow-md z-40">
          <ul className="flex flex-col items-center space-y-6 py-6">
            <li>
              <Link to="/" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li>
              <Link to="/languages" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Languages</Link>
            </li>
            <li>
              <Link to="/projects" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Projects</Link>
            </li>
            <li>
              <Link to="/contacts" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Contacts</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
