import React from 'react';
import { motion } from 'framer-motion';

// Define a type for the custom menu props
interface MenuItem {
  label: string; // The label for the menu item
  link?: string; // Optional link, if provided will render an anchor tag
  onClick?: () => void; // Optional onClick handler for the item
}

interface MenuProps {
  menuLabel?: string; // Label for the menu button
  bgColor?: string; // Background color of the dropdown
  textColor?: string; // Text color of the menu items
  hoverBgColor?: string; // Background color when hovered
  hoverTextColor?: string; // Text color when hovered
  maxWidth?: string; // Max width for the mega menu
  menuData?: MenuItem[][]; // Dropdown_26 data: a 2D array representing columns and their items
  placeholder?: string; // Placeholder for empty or undefined menu items
}

const Dropdown_26: React.FC<MenuProps> = ({
  menuLabel = 'Dropdown_26', // Default menu label
  bgColor = 'bg-slate-200', // Default background color is slate
  textColor = 'text-gray-600', // Default text color is gray
  hoverBgColor = 'hover:bg-gray-200', // Default hover background
  hoverTextColor = 'hover:text-blue-500', // Default hover text color
  maxWidth = 'w-max', // Default width is max
  menuData = [], // Default to empty array (no data)
  placeholder = 'No items available', // Default placeholder text
}) => {
  return (
    <div className="menu-wrapper w-full" role="navigation">
      <ul className="nav flex list-none w-full p-0 m-0">
        {/* Dropdown_26 Item */}
        <li className="relative group w-full" role="menuitem">
          <div className="relative w-full">
            {/* Button */}
            <button
              className="bg-gray-800 text-white px-5 py-3 font-bold border-l border-r border-gray-600 hover:bg-gray-700 focus:outline-none w-full"
            >
              {menuLabel}
            </button>

            {/* Mega Dropdown_26 Dropdown */}
            <motion.div
              className={`mega-menu absolute top-full w-full left-0 ${maxWidth} ${bgColor} border border-gray-300 rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible z-10`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex p-4 space-x-6">
                {menuData.length > 0 ? (
                  menuData.map((column, colIndex) => (
                    <div key={colIndex} className="nav-column w-full">
                      {column.length > 0 ? (
                        <>
                          {column.map((item, index) => (
                            <div key={index} className="mb-2">
                              <a
                                href={item.link || '#'}
                                className={`${textColor} ${hoverTextColor} ${hoverBgColor} block px-4 py-2 rounded`}
                                onClick={item.onClick}
                              >
                                {item.label}
                              </a>
                            </div>
                          ))}
                        </>
                      ) : (
                        <p className={`${textColor} text-center`}>{placeholder}</p>
                      )}
                    </div>
                  ))
                ) : (
                  <p className={`${textColor} text-center`}>{placeholder}</p>
                )}
              </div>
            </motion.div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown_26;
