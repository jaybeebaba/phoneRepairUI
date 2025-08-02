import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="lg:clip-slant-top bgblue text-white w-full p-12 lg:pb-8 pt-8 lg:pt-32 lg:px-20">
      {/* Slanted top edge */}
      <div className="">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-center md:text-left">
          {/* Logo */}
          <div>
            <h2 className="font-bold text-xl">Logo</h2>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/services" className="hover:underline">Services</Link></li>
              <li><Link to="/faqs" className="hover:underline">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <p>332-277-6032</p>
            <p>Everyday 10:00am - 10:00pm</p>
            <p>info@helprepairs.com</p>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="font-semibold mb-2">Follow us on</h3>
            <div className="flex justify-center md:justify-start gap-3 mt-2">
              <span className="bg-green-500 p-2 rounded hover:bg-green-600 cursor-pointer">
                <FaFacebookF />
              </span>
              <span className="bg-green-500 p-2 rounded hover:bg-green-600 cursor-pointer">
                <FaTwitter />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-xs mt-8">
        www.companyname.com
      </div>
    </div>
  );
};

export default Footer;
