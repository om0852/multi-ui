import React, { useState } from "react";
import { motion } from "framer-motion";

type Option = {
  id?: string;
  value?: string;
  label?: string;
  disabled?: boolean;
  separator?: boolean;
};

interface CustomDropdownProps {
  options: Option[];
  placeholder?: string;
  onSelect?: (option: Option) => void;
  onChange?: (option: Option) => void;
  onClick?: (option: Option) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  placeholder = "Select an option",
  onSelect,
  onChange,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    if (option.disabled || option.separator) return; // Ignore disabled or separator options
    setSelectedOption(option);
    setIsOpen(false);

    // Trigger callback functions if provided
    if (onSelect) onSelect(option);
    if (onChange) onChange(option);
    if (onClick) onClick(option);
  };

  return (
    <div className="relative w-full">
      {/* Dropdown_21 Button */}
      <div
        className="bg-black text-white p-3 cursor-pointer rounded-md flex justify-between items-center"
        onClick={toggleDropdown}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <motion.img
          src="https://img.icons8.com/?size=100&id=2760&format=png&color=ffffff"
          alt="dropdown icon"
          className="w-5 h-5"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Dropdown_21 Area */}
      {isOpen && (
        <motion.div
          className="absolute top-12 w-full bg-white rounded-md shadow-md overflow-hidden z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="space-y-0">
            {options.map((option, index) =>
              option.separator ? (
                // Render a separator
                <li
                  key={`separator-${index}`}
                  className="h-px bg-gray-300 my-2"
                />
              ) : (
                // Render normal option
                <motion.li
                  key={option.id || `option-${index}`}
                  className={`p-3 cursor-pointer border-b border-gray-200 ${
                    option.disabled
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : `hover:bg-opacity-90 ${
                          index === 0
                            ? "bg-white"
                            : index === 1
                            ? "bg-gray-300"
                            : index === 2
                            ? "bg-gray-500 text-white"
                            : index === 3
                            ? "bg-gray-700 text-white"
                            : "bg-gray-900 text-white"
                        }`
                  }`}
                  onClick={() => handleOptionClick(option)}
                  initial={{ marginTop: -40 }}
                  animate={{ marginTop: 0 }}
                  transition={{ duration: 0.3 + index * 0.1 }}
                >
                  {option.label}
                </motion.li>
              )
            )}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default CustomDropdown;
