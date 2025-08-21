import React, { useState } from "react";
import { Moon, Sun, User, Menu, X } from "lucide-react";

const NavBar = ({ isDarkMode, handleDarkModeToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-t from-blue-600 to-blue-300 dark:bg-gray-800 shadow-sm rounded-b-xl sticky top-0 z-10">
      <div className="flex items-center justify-between p-6">
        {/* Title */}
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">
          Student Performance Dashboard
        </h1>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={handleDarkModeToggle}
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* User Icon */}
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-300 dark:bg-gray-600">
            <User className="w-5 h-5 text-gray-700 dark:text-white" />
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-3 px-4 pb-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={handleDarkModeToggle}
            className="flex items-center space-x-2 p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
            <span>Toggle Dark Mode</span>
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-2 p-2 rounded-lg bg-gray-300 dark:bg-gray-600">
            <User className="w-5 h-5 text-gray-700 dark:text-white" />
            <span className="text-gray-700 dark:text-gray-200">Profile</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
