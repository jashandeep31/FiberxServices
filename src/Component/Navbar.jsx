import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Fiberx Services</div>
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-300 hover:text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
          <NavLink
            to="/"
            className="text-gray-300 hover:text-white block md:inline-block px-3 py-2 rounded-md text-sm font-medium"
            activeClassName="text-white"
            exact
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-300 hover:text-white block md:inline-block px-3 py-2 rounded-md text-sm font-medium"
            activeClassName="text-white"
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className="text-gray-300 hover:text-white block md:inline-block px-3 py-2 rounded-md text-sm font-medium"
            activeClassName="text-white"
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-300 hover:text-white block md:inline-block px-3 py-2 rounded-md text-sm font-medium"
            activeClassName="text-white"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
