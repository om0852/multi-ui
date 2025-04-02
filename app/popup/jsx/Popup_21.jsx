"use client";
import React, { useState } from "react";

const Popup_21 = ({
  menuItems,
  distance = 100,
  label = "☀️", // Default label for central button
  centerColor = "bg-blue-600", // Default center button color
  menuColor = "bg-red-500", // Default menu item color
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const getPosition = (index) => {
    const angle = (360 / menuItems.length) * index - 90; // Adjust for top start
    const angleRad = (Math.PI / 180) * angle;
    const x = Math.cos(angleRad) * distance;
    const y = Math.sin(angleRad) * distance;

    return { x, y };
  };

  const menuStyles = (index) => {
    const position = getPosition(index);

    if (!isOpen) {
      return {
        transform: `translate(0, 0) scale(0)`,
        opacity: 0,
        visibility: "hidden",
        transition: `transform 0.4s ease-in, opacity 0.2s`,
      };
    }

    return {
      transform: `translate(${position.x}px, ${position.y}px) scale(1)`,
      opacity: 1,
      visibility: "visible",
      transition: `transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) ${
        index * 0.05
      }s, opacity 0.5s ease-out ${index * 0.05}s`,
    };
  };

  const handleMenuItemClick = (item) => {
    item.onClick?.();
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-t from-gray-900 to-gray-700">
      <div className="relative flex items-center justify-center">
        {/* Center Toggle Button */}
        <button
          onClick={toggleMenu}
          className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${centerColor} text-white shadow-xl hover:rotate-180 transform transition-all duration-500 ease-in-out relative z-10`}
        >
          {label}
        </button>

        {/* Radial Menu Items */}
        {menuItems.map((item, index) => (
          <div
            key={typeof item.label === 'string' ? item.label : index}
            onClick={() => handleMenuItemClick(item)}
            style={menuStyles(index)}
            className={`absolute w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold ${menuColor} text-white shadow-md hover:scale-125 transform transition-all duration-300 ease-in-out cursor-pointer`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popup_21; 