"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import framer motion for animations

// Define types for Dropdown options
interface Option {
  label: string;
  value: string;
  onClick?: (value: string) => void; // Optional click handler
  disabled?: boolean; // Optional flag to disable option
}

interface DropdownProps {
  label: string;
  options: Option[]; // Array of options with custom properties
  onChange?: (value: string) => void; // Function to handle option selection
}

const Dropdown_3: React.FC<DropdownProps> = ({ label, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOptionClick = (option: Option) => {
    if (option.onClick) {
      option.onClick(option.value); // Call the custom onClick function if provided
    }
    if (onChange) {
      onChange(option.value); // Handle onChange
    }
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target && !target.closest('.dropdown-wrapper')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative inline-block dropdown-wrapper">
      <button
        className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold text-sm shadow-md border-2 border-indigo-600 hover:bg-indigo-500 focus:outline-none"
        onClick={handleButtonClick}
      >
        {label}
        <motion.svg
          className="w-4 h-4 transform transition-transform"
          style={{ rotate: isOpen ? -180 : 0 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? -180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </motion.svg>
      </button>
      <motion.div
        className="absolute left-0 w-56 mt-2 bg-white shadow-lg rounded-md border border-gray-200 z-50"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, scaleY: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: "top right" }}
      >
        {options.map((option, index) => (
          <button
            key={index}
            className={`block w-full px-4 py-2 text-sm text-left ${option.disabled ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"} focus:outline-none`}
            onClick={() => !option.disabled && handleOptionClick(option)}
            disabled={option.disabled}
          >
            {option.label}
          </button>
        ))}
      </motion.div>
    </div>
  );
};

Dropdown_3.displayName = 'Dropdown_3';

export default Dropdown_3;
