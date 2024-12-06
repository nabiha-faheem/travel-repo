'use client'

import { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-800 shadow-md fixed w-full z-20 top-0 left-0">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <h1 className="text-3xl font-bold text-white">Travel</h1>
        </div>

        {/* Navbar Links - Desktop */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-green-400 transition duration-300">Home</Link>
          <Link href="/service" className="text-white hover:text-green-400 transition duration-300">Services</Link>
          <Link href="/booking" className="text-white hover:text-green-400 transition duration-300">Booking</Link>
          <Link href="/test" className="text-white hover:text-green-400 transition duration-300">Testimonials</Link>
          <Link href="/login" className="text-white hover:text-green-400 transition duration-300">Login</Link>
          <button className="bg-green-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700 transition duration-300">
            Sign Up
          </button>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4 space-y-4">
          <Link href="/" className="block text-white py-2 hover:text-green-400">Home</Link>
          <Link href="/service" className="block text-white py-2 hover:text-green-400">Services</Link>
          <Link href="/booking" className="block text-white py-2 hover:text-green-400">Booking</Link>
          <Link href="/test" className="block text-white py-2 hover:text-green-400">Testimonials</Link>
          <Link href="/login" className="block text-white py-2 hover:text-green-400">Login</Link>
          <button className="block w-full text-white py-2 px-6 bg-green-600 rounded-md font-semibold hover:bg-green-700 transition duration-300">
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
