import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let navbarClasses = ['mainmenu-area'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  return (
    <nav className={`${navbarClasses.join(' ')} flex-no-wrap fixed top-0 z-10 flex w-full items-center justify-between py-2 shadow-md shadow-black/5 lg:flex-wrap lg:justify-start lg:py-4`}>
      <div className="navbar-header container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="navbar-brand">
          <img src={logo} alt="Logo" className="h-8" />
        </a>
        <button
          type="button"
          className="ml-auto sm:hidden text-gray-800 focus:outline-none"
          onClick={toggleNavbar}
        >
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } sm:flex sm:items-center sm:justify-between w-full sm:w-auto`}
          id="primary_menu"
        >
          <ul className="flex flex-col sm:flex-row sm:space-x-6">
            <li className="active"><a href="#home_page" className="block py-2 px-4 text-gray-100 hover:text-blue-600">Home</a></li>
            <li><a href="#about_page" className="block py-2 px-4 text-gray-100 hover:text-blue-600">About</a></li>
            <li><a href="#features_page" className="block py-2 px-4 text-gray-100 hover:text-blue-600">Features</a></li>
            <li><a href="#gallery_page" className="block py-2 px-4 text-gray-100 hover:text-blue-600">Gallery</a></li>
            <li><a href="#price_page" className="block py-2 px-4 text-gray-100 hover:text-blue-600">Pricing</a></li>
            <li><a href="#questions_page" className="block py-2 px-4 text-gray-100 hover:text-blue-600">FAQ</a></li>
            <li><a href="blog.html" className="block py-2 px-4 text-gray-100 hover:text-blue-600">Blog</a></li>
            <li><a href="#contact_page" className="block py-2 px-4 text-gray-100 hover:text-blue-600">Contacts</a></li>
          </ul>
          <div className="mt-4 sm:mt-0 sm:ml-6">
            <a href="#" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-200">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
