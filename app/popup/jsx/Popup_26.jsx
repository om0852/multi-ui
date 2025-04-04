"use client";
import React, { useState } from "react";

const Popup_26 = ({
  menuItems,
  radius = 120,
  label = "⚙️", // Default label for central button
  centerColor = "bg-blue-500", // Default center button color
  menuColor = "bg-green-500", // Default menu item color
  direction = "vertical", // Default direction of menu expansion
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuStyles = (index, total) => {
    const half = Math.ceil(total / 2);
    const isFirstHalf = index < half;
    const positionIndex = isFirstHalf ? index : index - half;

    let x = 0, y = 0;

    switch (direction) {
      case "vertical":
        y = isFirstHalf ? -(radius * (positionIndex + 1)) : radius * (positionIndex + 1);
        break;
      case "horizontal":
        x = isFirstHalf ? -(radius * (positionIndex + 1)) : radius * (positionIndex + 1);
        break;
      case "diagonal":
        x = isFirstHalf ? -(radius * (positionIndex + 1)) : radius * (positionIndex + 1);
        y = isFirstHalf ? -(radius * (positionIndex + 1)) : radius * (positionIndex + 1);
        break;
      default:
        break;
    }

    return {
      transform: isOpen
        ? `translate(${x}px, ${y}px) scale(1)`
        : `translate(0px, 0px) scale(0.5)`,
      opacity: isOpen ? 1 : 0,
      Visibility: isOpen ? "visible" : "hidden",
      transition: `transform 0.6s ease-in-out ${index * 0.1}s, opacity 0.4s ease-in-out`,
    };
  };

  const handleMenuItemClick = (item) => {
    item.onClick?.();
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-purple-800 to-gray-900">
      <div className="relative flex items-center justify-center">
        {/* Center Toggle Button */}
        <button
          onClick={toggleMenu}
          className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${centerColor} text-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out relative z-10`}
        >
          {label}
        </button>

        {/* Directional Menu Items */}
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleMenuItemClick(item)}
            style={menuStyles(index, menuItems.length)}
            className={`absolute w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium ${menuColor} text-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popup_26; 