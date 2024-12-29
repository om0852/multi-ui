import React, { useState } from "react";

interface MenuItem {
  label: string;
  onClick?: () => void;
}

interface ZoomMenuProps {
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
    | "bottom-right"; // Direction of menu expansion
  label?: string; // Label for central button
  centerColor?: string; // Optional: Custom color for the central button
  menuColor?: string; // Optional: Custom color for the menu items
}

const ZoomMenu: React.FC<ZoomMenuProps> = ({
  menuItems,
  distance = 100,
  direction = "top",
  label = "🎯",
  centerColor = "bg-blue-600", // Default center button color
  menuColor = "bg-orange-500", // Default menu item color
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
        transition: `transform 0.4s ease-out, opacity 0.3s`,
      };
    }

    return {
      transform: `translate(${position.x}px, ${position.y}px) scale(1)`,
      opacity: 1,
      transition: `transform 0.5s ease-out ${index * 0.1}s, opacity 0.4s ease-out`,
    };
  };

  const handleMenuItemClick = (item: MenuItem) => {
    item.onClick?.();
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-b from-gray-700 to-black">
      <div className="relative flex items-center justify-center">
        {/* Center Toggle Button */}
        <button
          onClick={toggleMenu}
          className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${centerColor} text-white shadow-lg hover:ring-4 hover:ring-offset-2 hover:ring-blue-300 transition-all duration-300 ease-in-out relative z-10`}
        >
          {label}
        </button>

        {/* Directional Menu Items */}
        {menuItems.map((item, index) => (
          <div
            key={item.label}
            onClick={() => handleMenuItemClick(item)}
            style={menuStyles(index)}
            className={`absolute w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold ${menuColor} text-white shadow-md hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZoomMenu;
