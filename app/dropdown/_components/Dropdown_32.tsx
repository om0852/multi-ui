import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownProps {
  options: string[];
  placeholder?: string;
  onSelect?: (selectedItems: string[]) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = "Select Languages",
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleCheck = (option: string) => {
    setCheckedItems((prev) => {
      const isChecked = prev.includes(option);
      const updatedItems = isChecked
        ? prev.filter((item) => item !== option)
        : [...prev, option];
      if (onSelect) onSelect(updatedItems);
      return updatedItems;
    });
  };

  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="relative w-full mx-auto ">
      {/* Select Button */}
      <div
        onClick={toggleDropdown}
        className={`flex items-center justify-between bg-white h-12 px-4 rounded-lg shadow-md cursor-pointer ${
          isOpen ? "ring-2 ring-blue-500" : ""
        }`}
      >
        <span className="text-gray-800 text-base font-medium">
          {checkedItems.length > 0
            ? `${checkedItems.length} Selected`
            : placeholder}
        </span>
        <div className="flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full">
          <img
            src="https://img.icons8.com/?size=100&id=2760&format=png&color=000000"
            alt="Arrow Icon"
            className={`w-3 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {/* Dropdown List */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="absolute mt-2 w-full bg-white rounded-lg shadow-lg max-h-56 overflow-y-auto"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropdownVariants}
          >
            {options.map((option, index) => (
              <li
                key={index}
                className={`flex items-center px-4 py-3 cursor-pointer hover:bg-blue-100 ${
                  checkedItems.includes(option) ? "bg-blue-50" : ""
                }`}
                onClick={() => handleCheck(option)}
              >
                {/* Checkbox */}
                <div
                  className={`flex items-center justify-center w-4 h-4 border rounded-sm mr-3 transition-colors ${
                    checkedItems.includes(option)
                      ? "bg-blue-500 border-blue-500"
                      : "border-gray-300"
                  }`}
                >
                  {checkedItems.includes(option) && (
                    <span className="text-white text-xs">✓</span>
                  )}
                </div>
                {/* Option Text */}
                <span className="text-gray-800 text-base">{option}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
