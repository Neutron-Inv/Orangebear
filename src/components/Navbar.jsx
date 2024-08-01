import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
export default function Navbar() {
  return (
    <nav className="bg-accentblue p-4">
      <div className="container mx-auto flex justify-between items-center">
      <img src={Logo} alt="Logo"    className="h-16 ml-12" />
        <ul className="flex space-x-28 mr-14">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link to="/explore" className="text-white hover:text-gray-300">Explore</Link>
          </li>
          <li>
            <Link to="/support" className="text-white hover:text-gray-300">Support</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
