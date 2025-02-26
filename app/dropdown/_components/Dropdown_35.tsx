import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="relative">
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
        onClick={toggleDropdown}
      >
        Toggle Dropdown
      </button>
      <motion.ul
        variants={dropdownVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        className="absolute bg-white shadow-md rounded mt-2"
      >
        <li className="py-2 px-4 hover:bg-gray-100">Home</li>
        <li className="py-2 px-4 hover:bg-gray-100">Portfolio</li>
        <li className="py-2 px-4 hover:bg-gray-100">About</li>
      </motion.ul>
    </div>
  );
};

export default Dropdown;