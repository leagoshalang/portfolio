import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
     <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center h-30">
        <h1 className="text-3xl font-bold text-blue-600">Shalang Leago</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link></li>
            <li><Link to="/languages" className="text-gray-700 hover:text-blue-600">Languages</Link></li>
            <li><Link to="/projects" className="text-gray-700 hover:text-blue-600">Projects</Link></li>
            <li><Link to="/contacts" className="text-gray-700 hover:text-blue-600">Contacts</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
