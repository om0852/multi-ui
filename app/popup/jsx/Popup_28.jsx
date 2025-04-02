"use client";
import React, { useState } from "react";

const Popup_28 = ({
  menuItems,
  radius = 120,
  label = "✨", // Default label for central button
  centerColor = "bg-pink-500", // Default center button color
  menuColor = "bg-yellow-400", // Default menu item color
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuStyles = (index, total) => {
    const angle = (360 / total) * index;
    const radians = (angle * Math.PI) / 180;
    const x = Math.cos(radians) * radius;
    const y = Math.sin(radians) * radius;

    return {
      transform: isOpen
        ? `translate(${x}px, ${y}px) scale(1)`
        : `translate(0px, 0px) scale(0.5)`,
      opacity: isOpen ? 1 : 0,
      Visibility: isOpen ? "visible" : "hidden",
      animation: isOpen
        ? `pulse 1.5s infinite alternate ease-in-out ${index * 0.1}s`
        : "none",
      transition: `transform 0.6s ease-in-out ${index * 0.1}s, opacity 0.4s ease-in-out`,
    };
  };

  const handleMenuItemClick = (item) => {
    item.onClick?.();
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-black via-indigo-900 to-gray-800">
      <div className="relative flex items-center justify-center">
        {/* Center Toggle Button */}
        <button
          onClick={toggleMenu}
          className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${centerColor} text-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out relative z-10 animate-bounce`}
        >
          {label}
        </button>

        {/* Radial Menu Items */}
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleMenuItemClick(item)}
            style={menuStyles(index, menuItems.length)}
            className={`absolute w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium ${menuColor} text-black cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:shadow-lg`}
          >
            {item.label}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes pulse {
          from {
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          }
          to {
            box-shadow: 0 0 20px rgba(255, 255, 255, 1);
          }
        }
      `}</style>
    </div>
  );
};

export default Popup_28; 