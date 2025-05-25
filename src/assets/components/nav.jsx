import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">Brand</h1>

        <button
          className="lg:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <motion.ul
          className={`absolute lg:static top-16 left-0 w-full lg:w-auto lg:flex items-center justify-center lg:space-x-6 bg-gray-800 lg:bg-transparent transition-all duration-300 ${
            isOpen ? 'block' : 'hidden'
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
          transition={{ duration: 0.3 }}
        >
          <li className="p-4 text-center lg:p-0">
            <a href="#" className="hover:text-gray-300">Home</a>
          </li>
          <li className="p-4 text-center lg:p-0">
            <a href="#" className="hover:text-gray-300">About</a>
          </li>
          <li className="p-4 text-center lg:p-0">
            <a href="#" className="hover:text-gray-300">Services</a>
          </li>
          <li className="p-4 text-center lg:p-0">
            <a href="#" className="hover:text-gray-300">Contact</a>
          </li>
        </motion.ul>
      </div>
    </nav>
  );
};

export default Navbar;
