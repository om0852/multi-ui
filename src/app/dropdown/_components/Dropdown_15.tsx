import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownOption {
  id?: string;
  value?: string;
  label?: string;
  disabled?: boolean;
  separator?: boolean;
}

interface DropdownProps {
  options: DropdownOption[];
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
  onClick?: (option: DropdownOption) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, onChange, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>("");

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option: DropdownOption) => {
    if (option.disabled || option.separator) return;

    setSelected(option.label || "");
    setIsOpen(false);

    if (onSelect) onSelect(option.value || "");
    if (onChange) onChange(option.value || "");
    if (onClick) onClick(option);
  };

  return (
    <div className="relative w-full">
      <div
        className={`bg-gray-800 text-white flex items-center justify-between p-4 rounded-lg cursor-pointer border ${
          isOpen ? "border-blue-500 shadow-lg" : "border-gray-800"
        }`}
        onClick={toggleMenu}
      >
        <span>{selected || "Select an option"}</span>
        <motion.div
          className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent"
          animate={{ rotate: isOpen ? 180 : 0 }}
        ></motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-16 bg-gray-900 text-gray-200 rounded-lg shadow-lg border border-gray-700 w-full z-10 origin-top"
          >
            {options.map((option, index) => {
              if (option.separator) {
                return <div key={`separator-${index}`} className="border-t border-gray-700 my-2"></div>;
              }

              return (
                <li
                  key={option.id || index}
                  className={`p-4 cursor-pointer rounded-md ${
                    selected === option.label ? "bg-gray-700 text-white" : "hover:bg-gray-800"
                  } ${option.disabled ? "cursor-not-allowed text-gray-500" : ""}`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option.label}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
