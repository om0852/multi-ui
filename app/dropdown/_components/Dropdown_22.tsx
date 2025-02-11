import React, { useState } from "react";
import { motion } from "framer-motion";

type Option = {
  id: string;
  label: string;
  children?: Option[];
  disabled?: boolean;
};

interface DropdownProps {
  options: Option[];
  placeholder?: string;
  onSelect?: (option: Option) => void;
  onChange?: (option: Option) => void;
  onClick?: (option: Option) => void;
}

const Dropdown_22: React.FC<DropdownProps> = ({
  options,
  placeholder = "Select an option",
  onSelect,
  onChange,
  onClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleOptionClick = (option: Option) => {
    if (option.disabled) return;

    setSelectedOption(option);
    setActiveSubMenu(null); // Close any open submenu
    setIsMenuOpen(false);

    if (onSelect) onSelect(option);
    if (onChange) onChange(option);
    if (onClick) onClick(option);
  };

  const handleSubMenuClick = (menuId: string) => {
    setActiveSubMenu(activeSubMenu === menuId ? null : menuId);
  };

  return (
    <div className="relative inline-block w-full">
      {/* Dropdown_22 Button */}
      <button
        className="w-full flex justify-between items-center px-4 py-3 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={toggleMenu}
      >
        {selectedOption ? selectedOption.label : placeholder}
        <motion.span
          animate={{ rotate: isMenuOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-white"
        >
          ▼
        </motion.span>
      </button>

      {/* Dropdown_22 Options */}
      {isMenuOpen && (
        <motion.div
          className="absolute top-14 left-0 w-full bg-white rounded-lg shadow-xl z-20"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          <ul className="divide-y divide-gray-200">
            {options.map((option) => (
              <li key={option.id} className="relative">
                <button
                  className={`w-full px-4 py-3 text-left hover:bg-gray-100 ${
                    option.disabled ? "text-gray-400 cursor-not-allowed" : ""
                  }`}
                  onClick={() =>
                    option.children
                      ? handleSubMenuClick(option.id)
                      : handleOptionClick(option)
                  }
                  disabled={option.disabled}
                >
                  {option.label}
                  {option.children && (
                    <motion.span
                      className="absolute right-4 text-gray-400"
                      animate={{
                        rotate: activeSubMenu === option.id ? 90 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      ▶
                    </motion.span>
                  )}
                </button>

                {/* Submenu */}
                {option.children && activeSubMenu === option.id && (
                  <motion.div
                    className="absolute top-0 left-full mt-1 w-56 bg-white shadow-lg rounded-lg"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ul className="divide-y divide-gray-200">
                      {option.children.map((childOption) => (
                        <li key={childOption.id}>
                          <button
                            className={`w-full px-4 py-3 text-left hover:bg-gray-100 ${
                              childOption.disabled
                                ? "text-gray-400 cursor-not-allowed"
                                : ""
                            }`}
                            onClick={() => handleOptionClick(childOption)}
                            disabled={childOption.disabled}
                          >
                            {childOption.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Dropdown_22;
