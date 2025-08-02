import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaAngleDown } from 'react-icons/fa';
import Hero from './Hero.jsx';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  
  <header className='  bg-[#0A3A5C] lg:clip-slant lg:pb-20'>

  <div className="w-full text-white  px-12 py-6  lg:px-20   min-h-[40px]" >
    <div className=" max-w-7xl mx-auto flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-semibold">Logo</div>

      {/* Desktop Nav Links */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/faqs">FAQs</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/signin" className="flex items-center gap-1">
          Sign In <FaAngleDown className="text-xs" />
        </Link>
        <span className="ml-2">
          <img
            src="https://flagcdn.com/16x12/gb.png"
            alt="UK Flag"
            className="w-5 h-4"
          />
        </span>
      </nav>

      {/* Mobile Menu Icon */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden focus:outline-none text-white"
      >
        {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="md:hidden bg-[#0A3A5C] text-white px-12  py-4 flex flex-col gap-4  ">
      <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
      <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
      <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
      <Link to="/faqs" onClick={() => setMenuOpen(false)}>FAQs</Link>
      <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
      <Link to="/signin" onClick={() => setMenuOpen(false)}>Sign In</Link>
      <span className="">
          <img
            src="https://flagcdn.com/16x12/gb.png"
            alt="UK Flag"
            className="w-5 h-4"
          />
        </span>
    </div>
  )}

  <Hero />
</header>
  );
};

export default Navbar;
