import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MenuOption {
  name: string;
  link?: string;
  children?: MenuOption[];
}

interface DropdownMenuProps {
  options: MenuOption[];
  placeholder?: string;
  onSelect?: (value: string) => void;
  onClick?: (name: string) => void;
}

const NavigationDropdown: React.FC<DropdownMenuProps> = ({
  options,
  placeholder = "Select an option",
  onSelect,
  onClick,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>({});

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleSelect = (name: string, link?: string) => {
    if (onSelect) onSelect(name);
    if (link) window.open(link, "_blank"); // Open the link if provided
    setDropdownOpen(false); // Close dropdown after selection
  };

  const handleClick = (name: string) => {
    if (onClick) onClick(name);
  };

  const toggleSubmenu = (name: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const renderMenuItems = (items: MenuOption[], level = 0) => {
    return items.map((item) => (
      <div key={item.name} className="relative">
        {/* Main menu item */}
        <button
          onClick={() => {
            if (item.children) {
              toggleSubmenu(item.name);
            } else {
              handleSelect(item.name, item.link);
              handleClick(item.name);
            }
          }}
          className={`flex justify-between items-center w-full px-4 py-2 text-left text-sm hover:bg-gray-700 ${
            level > 0 ? "pl-6" : ""
          }`}
        >
          <span>{item.name}</span>
          {item.children && (
            <motion.span
              animate={{ rotate: openSubmenus[item.name] ? 90 : 0 }}
              className="ml-2 text-gray-400"
            >
              ▶
            </motion.span>
          )}
        </button>

        {/* Render children if they exist */}
        <AnimatePresence>
          {item.children && openSubmenus[item.name] && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className={`bg-gray-800 rounded-lg shadow-lg ml-${level === 0 ? 0 : 4}`}
            >
              {renderMenuItems(item.children, level + 1)}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    ));
  };

  return (
    <div className="relative inline-block text-white font-sans">
      {/* Dropdown button */}
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 flex items-center"
      >
        {placeholder}
        <motion.span
          animate={{ rotate: dropdownOpen ? 180 : 0 }}
          className="ml-2"
        >
          ▼
        </motion.span>
      </button>

      {/* Dropdown menu */}
      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute mt-2 bg-gray-800 rounded-lg shadow-lg w-64 z-10"
          >
            {renderMenuItems(options)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavigationDropdown;
