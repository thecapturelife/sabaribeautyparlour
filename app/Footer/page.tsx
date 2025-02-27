import React from 'react';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white py-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 text-center sm:text-left">
        
        {/* Branding / Copyright */}
        <p className="text-sm sm:text-base">
          © {new Date().getFullYear()} Sabari&apos;s Beauty Parlour. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-3 sm:mt-0">
          <a href="https://www.instagram.com/_sabarii_____/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-300">
            <AiOutlineInstagram className="w-6 h-6" />
          </a>
          <a href="https://www.facebook.com/share/18YnjW7FCc/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-300">
            <AiOutlineFacebook className="w-6 h-6" />
          </a>
          <a href="mailto:sabarigirivasan463@gmail.com" className="hover:text-yellow-400 transition duration-300">
            <AiOutlineMail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
