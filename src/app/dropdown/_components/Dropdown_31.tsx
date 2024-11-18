import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownProps {
  options: string[];
  placeholder?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
  onClick?: () => void;
  value?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = "Select an option",
  onSelect,
  onChange,
  onClick,
  value = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>(value);

  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
    if (onClick) onClick();
  };

  const handleSelect = (item: string) => {
    setSelectedValue(item);
    setIsOpen(false);
    if (onSelect) onSelect(item);
    if (onChange) onChange(item);
  };

  return (
    <div className="relative w-full mt-4 ml-4">
      {/* Button */}
      <button
        onClick={toggleDropdown}
        className="relative flex items-center justify-between w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg font-medium focus:outline-none transition-all duration-300 hover:brightness-110"
      >
        <span>{selectedValue || placeholder}</span>
        <motion.span
          animate={{ rotate: isOpen ? -180 : 0 }}
          className="ml-2 text-white"
        >
          ▼
        </motion.span>
      </button>

      {/* Dropdown Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropdownVariants}
            className="absolute top-full left-0 mt-2 bg-gradient-to-b from-blue-600 to-teal-500 rounded-lg shadow-lg w-full overflow-hidden"
          >
            {options.map((item, index) => (
              <motion.li
                key={item}
                custom={index}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={itemVariants}
                className={`px-4 py-2 cursor-pointer text-white hover:bg-gray-700 transition-colors duration-200 ${
                  selectedValue === item ? "bg-gray-700" : ""
                }`}
                onClick={() => handleSelect(item)}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
