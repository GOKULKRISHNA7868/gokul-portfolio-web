import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaMoon, FaSun } from 'react-icons/fa';

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Gallery', to: 'gallery' },
  { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700 dark:text-white">Tupakula Gokul Krishna</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700 dark:text-gray-200 font-medium">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            title="Toggle Dark Mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            title="Toggle Dark Mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-700 dark:text-gray-200"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-md px-4 py-3 space-y-2 z-40">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth
              offset={-70}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="block cursor-pointer text-gray-800 dark:text-gray-200 hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
