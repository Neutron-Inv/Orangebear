import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-accentblue p-4 font-pp-neue-machina">
      <div className="container mx-auto flex justify-between items-center">
        <img src={Logo} alt="Logo" className="md:h-12 h-8 ml-2 md:ml-8" />
        <div className="text-xl text-accentorange font-bold md:hidden">
        <span className="text-white">Orange</span>Bear
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            <FaBars />
          </button>
        </div>
        <ul className="invisible md:visible absolute md:relative md:flex space-x-28 mr-2 text-xs">
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
      <div
        className={`fixed inset-0 bg-accentblue bg-opacity-95 z-40 transition-opacity duration-500 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <button onClick={toggleMenu} className="text-white text-2xl absolute top-4 right-4 z-50">
          <FaTimes />
        </button>
        <div className={`flex flex-col items-center justify-center h-full transition-transform duration-500 ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <ul className="space-y-8">
            <li>
              <Link to="/" className="text-white text-2xl hover:text-gray-300" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white text-2xl hover:text-gray-300" onClick={toggleMenu}>About</Link>
            </li>
            <li>
              <Link to="/explore" className="text-white text-2xl hover:text-gray-300" onClick={toggleMenu}>Explore</Link>
            </li>
            <li>
              <Link to="/support" className="text-white text-2xl hover:text-gray-300" onClick={toggleMenu}>Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
