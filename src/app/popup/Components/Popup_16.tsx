import React, { useState } from "react";

interface MenuItem {
  label: string;
  onClick?: () => void;
}

interface DirectionalMenuProps {
  menuItems: MenuItem[];
  distance?: number; // Distance between menu items
  direction?:
    | "top"
    | "left"
    | "right"
    | "bottom"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"; // Menu direction
  label?: string; // Label for central button
  centerColor?: string; // Central button background color
  menuColor?: string; // Menu item background color
  centerRadius?: string; // Central button size
  menuItemRadius?: string; // Menu item size
}

const DirectionalMenu: React.FC<DirectionalMenuProps> = ({
  menuItems,
  distance = 80,
  direction = "top",
  label = "☰",
  centerColor = "bg-purple-500",
  menuColor = "bg-yellow-400",
  centerRadius = "w-16 h-16",
  menuItemRadius = "w-12 h-12",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const getPosition = (index: number) => {
    const multiplier = index + 1;
    switch (direction) {
      case "top":
        return { x: 0, y: -distance * multiplier };
      case "bottom":
        return { x: 0, y: distance * multiplier };
      case "left":
        return { x: -distance * multiplier, y: 0 };
      case "right":
        return { x: distance * multiplier, y: 0 };
      case "top-left":
        return { x: -distance * multiplier, y: -distance * multiplier };
      case "top-right":
        return { x: distance * multiplier, y: -distance * multiplier };
      case "bottom-left":
        return { x: -distance * multiplier, y: distance * multiplier };
      case "bottom-right":
        return { x: distance * multiplier, y: distance * multiplier };
      default:
        return { x: 0, y: 0 };
    }
  };

  const menuStyles = (index: number) => {
    const position = getPosition(index);

    if (!isOpen) {
      return {
        transform: `translate(0, 0) scale(0.5)`,
        opacity: 0,
        transition: `transform 0.5s ease-in, opacity 0.3s`,
      };
    }

    return {
      transform: `translate(${position.x}px, ${position.y}px) scale(1)`,
      opacity: 1,
      transition: `transform 0.7s ease-out ${index * 0.1}s, opacity 0.5s ease-out`,
    };
  };

  const handleMenuItemClick = (item: MenuItem) => {
    item.onClick?.();
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-800">
      <div className="relative flex items-center justify-center">
        {/* Central Toggle Button */}
        <button
          onClick={toggleMenu}
          className={`${centerColor} ${centerRadius} rounded-full flex items-center justify-center text-white text-xl shadow-lg cursor-pointer`}
          style={{ zIndex: 10 }}
        >
          {label}
        </button>

        {/* Directional Menu Items */}
        {menuItems.map((item, index) => (
          <div
            key={item.label}
            onClick={() => handleMenuItemClick(item)}
            style={menuStyles(index)}
            className={`absolute ${menuColor} ${menuItemRadius} rounded-full flex items-center justify-center text-sm text-black shadow-lg transition-all ease-in-out transform hover:scale-110`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectionalMenu;
