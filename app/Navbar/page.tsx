"use client";
import Image from "next/image";
import logo from "@/app/assets/Sabari1.png";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Home from "../page";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-32 bg-white/10 backdrop-blur-md shadow-lg flex items-center justify-between px-6 md:px-12 z-50">
      {/* Left Navigation (Desktop) */}
      <ul className="hidden md:flex w-1/3 justify-start gap-8 text-white text-lg font-semibold">
      
      <li className="hover:text-gray-700 cursor-pointer">Home</li>
        <li className="hover:text-gray-700 cursor-pointer">About</li>
        <li className="hover:text-gray-700 cursor-pointer">Contact</li>
      </ul>

      {/* Center Logo */}
      <div className="flex justify-center md:w-1/3">
        <Image src={logo} alt="logo" priority className="w-36 h-36 object-contain" />
      </div>

      {/* Right Navigation (Desktop) */}
      <ul className="hidden md:flex w-1/3 justify-end gap-8 text-white text-lg font-semibold">
        <li className="hover:text-gray-700 cursor-pointer">Services</li>
        <li className="hover:text-gray-700 cursor-pointer">Price List</li>
        <li className="hover:text-gray-700 cursor-pointer">Gallery</li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white text-3xl" onClick={handleMenuClick}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu (Fixed and Smooth Animation) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center text-white text-2xl space-y-6 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button className="absolute top-5 right-6 text-3xl" onClick={closeMenu}>
          <FiX />
        </button>
        <ul className="flex flex-col space-y-6 text-center">
          <li className="hover:text-gray-400 cursor-pointer" onClick={closeMenu}>Home</li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={closeMenu}>About</li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={closeMenu}>Contact</li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={closeMenu}>Services</li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={closeMenu}>Price List</li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={closeMenu}>Gallery</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
