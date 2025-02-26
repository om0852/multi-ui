import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaArrowRight } from "react-icons/fa";

interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

interface DropdownProps {
  options: Option[];
  placeholder?: string; // Added placeholder prop
  onSelect?: (option: Option) => void;
  onChange?: (option: Option) => void;
  onClick?: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = "Select Language", // Default placeholder
  onSelect,
  onChange,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (onClick) onClick(); // Trigger custom onClick if passed
  };

  const handleSelect = (option: Option) => {
    if (option.disabled) return; // Prevent selection if option is disabled
    setSelectedOption(option);
    if (onSelect) onSelect(option); // Trigger onSelect if passed
    if (onChange) onChange(option); // Trigger onChange if passed
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative w-full ">
      {/* Dropdown Button */}
      <button
        className="flex items-center justify-between space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg border border-gray-700 hover:bg-gray-700 w-full"
        onClick={handleToggle}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <FaChevronDown
          className="transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
        />
      </button>

      {/* Dropdown Content (above the button) */}
      {isOpen && (
        <motion.div
          className="absolute bottom-full mb-2 w-full bg-gray-800 text-white rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <ul>
            {options.map((option) => (
              <li
                key={option.value}
                className={`flex items-center space-x-2 p-3 cursor-pointer rounded-lg transition-colors duration-200 hover:bg-gray-700 ${
                  option.disabled ? "text-gray-500 cursor-not-allowed" : ""
                }`}
                onClick={() => handleSelect(option)}
              >
                <FaArrowRight />
                <span>{option.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Dropdown;
