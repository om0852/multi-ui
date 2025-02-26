import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownProps {
  options: { label: string; value: string; disabled?: boolean }[];
  label: string;
  onChange?: (value: string | null) => void; // Fires when selection changes
  onSelect?: (selectedOption: { label: string; value: string }) => void; // Fires when an option is selected
  onClick?: () => void; // Fires when dropdown trigger is clicked
}

const Dropdown_12: React.FC<DropdownProps> = ({
  options,
  label,
  onChange,
  onSelect,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (state: boolean) => {
    setIsOpen(state);
    if (state && onClick) onClick();
  };

  const handleOptionClick = (option: { label: string; value: string; disabled?: boolean }) => {
    if (option?.disabled) return; // Skip disabled options
    setSelectedValue(option.value);
    if (onChange) onChange(option.value);
    if (onSelect) onSelect(option);
    setIsOpen(false);
  };

  return (
    <div
      className="dropdown relative"
      ref={dropdownRef}
      onMouseEnter={() => toggleDropdown(true)}
      onMouseLeave={() => toggleDropdown(false)}
    >
      {/* Dropdown Trigger */}
      <button
        className="dropbtn flex items-center w-full justify-between px-4 py-2 bg-green-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => toggleDropdown(!isOpen)}
      >
        {selectedValue ? options.find((opt) => opt.value === selectedValue)?.label || label : label}
        <i
          className={`ri-arrow-${isOpen ? "drop-up" : "drop-down"}-line ml-2`}
        ></i>
      </button>

      {/* Dropdown Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="dropdown-content absolute bg-white shadow-md rounded-md mt-2 py-2 w-full left-0"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            role="menu"
          >
            {options.map((option, index) => (
              <a
                key={index}
                href="#"
                role="menuitem"
                className={`block px-4 py-2 text-black hover:bg-gray-100 focus:outline-none ${
                  option.disabled ? "cursor-not-allowed text-gray-400" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleOptionClick(option);
                }}
              >
                {option.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown_12;
