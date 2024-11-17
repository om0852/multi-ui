import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownOption {
  id: number;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  placeholder: string;
  onSelect?: (option: DropdownOption) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, placeholder, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null);

  const handleSelect = (option: DropdownOption) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  return (
    <div className="relative w-full max-w-full">
      {/* Dropdown trigger */}
      <div
        className="wrapper-dropdown flex items-center justify-between bg-gray-800 text-white px-4 py-2 rounded-lg cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="selected-display">{selectedOption?.label || placeholder}</span>
        <motion.svg
          className="arrow w-5 h-5 transition-transform"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 14.5l5-5 5 5"
          />
        </motion.svg>
      </div>

      {/* Dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="dropdown absolute left-0 right-0 bg-gray-800 text-white mt-2 rounded-lg shadow-lg py-2 max-h-60 overflow-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {options.map((option) => (
              <motion.li
                key={option.id}
                className="item px-4 py-2 hover:bg-gray-700 rounded-md cursor-pointer"
                onClick={() => handleSelect(option)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.95 }}
              >
                {option.label}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
