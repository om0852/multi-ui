import React, { useState } from "react";

interface MenuItem {
  label: string;
  onClick?: () => void;
}

interface FanMenuProps {
  menuItems: MenuItem[];
  distance?: number;
  label?: string;
  centerColor?: string;
  menuColor?: string;
  centerRadius?: string;
  menuItemRadius?: string;
}

const FanMenu: React.FC<FanMenuProps> = ({
  menuItems,
  distance = 120,
  label = "☰",
  centerColor = "bg-blue-500",
  menuColor = "bg-yellow-400",
  centerRadius = "w-16 h-16",
  menuItemRadius = "w-10 h-10",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuStyles = (index: number) => {
    const angle = (360 / menuItems.length) * index; // Equal spacing in a circular pattern
    const radian = (angle * Math.PI) / 180;
    const x = Math.cos(radian) * distance;
    const y = Math.sin(radian) * distance;

    if (!isOpen) {
      return {
        transform: `translate(0, 0) scale(0)`,
        opacity: 0,
        transition: `transform 0.4s cubic-bezier(0.17, 0.67, 0.83, 0.67), opacity 0.3s`,
      };
    }

    return {
      transform: `translate(${x}px, ${y}px) scale(1)`,
      opacity: 1,
      transition: `transform 0.6s ease-out ${index * 0.1}s, opacity 0.4s ease-out ${index * 0.1}s`,
    };
  };

  const handleMenuItemClick = (item: MenuItem) => {
    item.onClick?.();
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-900">
      <div className="relative flex items-center justify-center">
        {/* Central Toggle Button */}
        <button
          onClick={toggleMenu}
          className={`${centerColor} ${centerRadius} rounded-full flex items-center justify-center text-white text-xl shadow-lg cursor-pointer transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          {label}
        </button>

        {/* Rotating Menu Items */}
        {menuItems.map((item, index) => (
          <div
            key={item.label}
            onClick={() => handleMenuItemClick(item)}
            style={menuStyles(index)}
            className={`absolute ${menuColor} ${menuItemRadius} rounded-full flex items-center justify-center text-xs text-black shadow-md transition-all ease-in-out transform hover:scale-110`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FanMenu;
