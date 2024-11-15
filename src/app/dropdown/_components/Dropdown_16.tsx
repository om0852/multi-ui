import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Interface for menu item structure
interface MenuItem {
  name: string;
  children?: MenuItem[];
  link?: string;
}

interface NestedCategoryMenuProps {
  options: MenuItem[]; // List of menu items passed as props
  onSelect?: (item: MenuItem) => void; // Called when a menu item is selected
  onChange?: (item: MenuItem, isOpen: boolean) => void; // Called when a submenu opens/closes
  onClick?: (item: MenuItem) => void; // Called when any menu item is clicked
}

const NestedCategoryMenu: React.FC<NestedCategoryMenuProps> = ({
  options,
  onSelect,
  onChange,
  onClick,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenus, setActiveMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (menuKey: string, item: MenuItem) => {
    const isOpen = !activeMenus[menuKey];
    setActiveMenus((prev) => ({
      ...prev,
      [menuKey]: isOpen,
    }));

    if (onChange) {
      onChange(item, isOpen);
    }
  };

  const handleItemClick = (item: MenuItem) => {
    if (onClick) onClick(item);
    if (item.link && onSelect) onSelect(item);
  };
  const renderMenuItems = (items: MenuItem[], level = 1): JSX.Element => {
    const submenuShift = `${level * 4 + 4}`;
  
    // Define colors based on levels
    const levelColors = [
      "bg-blue-100", // Level 1
      "bg-green-100", // Level 2
      "bg-yellow-100", // Level 3
      "bg-red-100", // Level 4
    ];
  
    const getColorClass = (level: number) =>
      levelColors[level - 1] || "bg-gray-100"; // Fallback color for deeper levels
  
    return (
      <ul className={`pl-${submenuShift} space-y-2`}>
        {items.map((item, index) => {
          const key = `${item.name}-${level}-${index}`;
          const hasChildren = item.children && item.children.length > 0;
  
          return (
            <li key={key} className="relative">
              <div
                className={`flex justify-between items-center py-2 px-4 cursor-pointer rounded-md hover:shadow-sm ${getColorClass(
                  level
                )}`}
                onClick={() => {
                  handleItemClick(item);
                  if (hasChildren) toggleMenu(key, item);
                }}
              >
                <div className="flex items-center space-x-2">
                  {hasChildren && (
                    <motion.div
                      animate={{
                        rotate: activeMenus[key] ? 90 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center"
                    >
                      <img
                        src="https://img.icons8.com/?size=100&id=2760&format=png&color=000000"
                        alt="submenu icon"
                        className="w-4 h-4"
                      />
                    </motion.div>
                  )}
                  <span className="text-gray-800 font-medium">
                    {item.link ? (
                      <a href={item.link} className="hover:underline">
                        {item.name}
                      </a>
                    ) : (
                      item.name
                    )}
                  </span>
                </div>
                {hasChildren && (
                  <motion.i
                    className={`fa ${
                      activeMenus[key] ? "fa-chevron-down" : "fa-chevron-right"
                    } text-gray-600`}
                    animate={{
                      rotate: activeMenus[key] ? 90 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </div>
              {hasChildren && (
                <AnimatePresence>
                  {activeMenus[key] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      {renderMenuItems(item.children!, level + 1)}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </li>
          );
        })}
      </ul>
    );
  };
  
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md border border-gray-200">
      <div
        className="flex items-center justify-between cursor-pointer py-3 px-4 bg-blue-500 text-white rounded-md"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <strong className="text-lg font-semibold">Select Category</strong>
        <motion.i
          className={`fa ${
            menuOpen ? "fa-chevron-up" : "fa-chevron-down"
          } text-white`}
          animate={{
            rotate: menuOpen ? 180 : 0,
          }}
          transition={{ duration: 0.2 }}
        />
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mt-4"
          >
            {renderMenuItems(options)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NestedCategoryMenu;
