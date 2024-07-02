import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 pl-4">
      <div className="container mx-auto flex flex-col items-start md:items-center">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-4">
          <NavLink to="/" className="hover:text-white" activeClassName="text-white">Home</NavLink>
          <NavLink to="/contact" className="hover:text-white" activeClassName="text-white">Contact Us</NavLink>
          <NavLink to="/partners" className="hover:text-white" activeClassName="text-white">Partners</NavLink>
          <NavLink to="/terms-conditions" className="hover:text-white" activeClassName="text-white">Terms and Conditions</NavLink>
          <NavLink to="/privacy-policy" className="hover:text-white" activeClassName="text-white">Privacy Policy</NavLink>
          <NavLink to="/earning-disclaimer" className="hover:text-white" activeClassName="text-white">Earnings Disclaimer</NavLink>
        </div>
        <div className="text-sm text-center">
          © 2024 Fiberx Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
