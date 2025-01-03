"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaBars, FaSearch, FaArrowLeft, FaMicrophone, FaHome, FaInfoCircle, FaStore } from 'react-icons/fa';
import { IoIosContacts } from 'react-icons/io';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false); // Toggle for search input
  const [showHeaderContent, setShowHeaderContent] = useState(true); // Control visibility of other elements
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Function to handle search bar toggle
  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
    setShowHeaderContent(false); // Hide logo and menu when search is opened
  };

  // Function to handle going back to home page
  const handleBackClick = () => {
    setSearchOpen(false);
    setShowHeaderContent(true); // Show the header content again
  };

  return (
    <header className="bg-gray-100 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Container for Logo */}
        <div className="flex items-center space-x-4">
          {/* Hide logo and menu when search is opened */}
          {showHeaderContent && (
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-blue-600">Logo</Link>
            </div>
          )}
        </div>

        {/* Search input for small screens */}
        {searchOpen ? (
          <div className="md:hidden flex-1 relative">
            {/* Back icon */}
            <FaArrowLeft
              className="text-gray-700 text-2xl cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2"
              onClick={handleBackClick} // Handle back click
            />
            <input
              type="text"
              placeholder="Search..."
              className="absolute left-12  w-4/5 px-3 py-1 border border-gray-300 rounded-full focus:outline-none "
            />
            {/* Microphone icon */}
            <FaMicrophone
              className="text-gray-700 text-2xl cursor-pointer absolute  left-[280px] top-1/2 transform -translate-y-1/2"
              onClick={() => window.location.href = '/'} // Navigate to home when clicked
            />
          </div>
        ) : (
          <div className="md:hidden flex-1 relative flex items-center justify-end space-x-4">
            {/* Search icon */}
            <FaSearch
              className="text-gray-700 text-2xl cursor-pointer"
              onClick={handleSearchClick} // Toggle search input
            />
            {/* Menu icon for small screens */}
            <FaBars
              className="text-gray-700 hover:text-blue-600 text-2xl cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        )}

        {/* Menu and other content for large screens */}
        <div className="hidden md:flex flex-1 mx-4 relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none "
          />
          <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700" />
        </div>

        {/* Menu and cart icons */}
        {showHeaderContent && (
          <div className="hidden md:flex items-center space-x-6">
            <nav className="space-x-4 flex items-center">
              <Link href="/" className="text-gray-700 hover:text-blue-600 flex items-center space-x-2">
                <FaHome className="text-xl" />
                <span>Home</span>
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 flex items-center space-x-2">
                <FaInfoCircle className="text-xl" />
                <span>About</span>
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 flex items-center space-x-2">
                <IoIosContacts className="text-2xl" />
                <span>Contact</span>
              </Link>
              <Link href="/shop" className="text-gray-700 hover:text-blue-600 flex items-center space-x-2">
                <FaStore className="text-xl" />
                <span>Shop</span>
              </Link>
            </nav>

          </div>
        )}
      </div>

      {menuOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 w-48 z-50 md:hidden"
        >
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="text-gray-700 hover:text-blue-600 flex items-center space-x-2">
              <FaHome className="text-xl" />
              <span>Home</span>
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 flex items-center space-x-2">
              <FaInfoCircle className="text-xl" />
              <span>About</span>
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 flex items-center space-x-2">
              <IoIosContacts className="text-2xl" />
              <span>Contact</span>
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-blue-600 flex items-center space-x-2">
              <FaStore className="text-xl" />
              <span>Shop</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
