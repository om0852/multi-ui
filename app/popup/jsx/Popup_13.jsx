"use client";
import React, { useState } from "react";

const Popup_13 = ({
  menuItems,
  distance = 150,
  label = "Menu",
  centerColor = "bg-cyan-500",
  menuColor = "bg-teal-400",
  centerRadius = "w-16 h-16",
  menuItemRadius = "w-12 h-12",
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const angles = Array.from({ length: menuItems.length }, (_, index) =>
    (360 / menuItems.length) * index
  );

  const menuStyles = (index) => {
    const angle = (angles[index] * Math.PI) / 180;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    if (!isChecked) {
      return {
        transform: `translate(0px, 0px) scale(0.5)`,
        opacity: 0,
        visibility: "hidden",
        transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
      };
    }

    return {
      transform: `translate(${x}px, ${y}px) scale(1)`,
      opacity: 1,
      visibility: "visible",
      transition: `transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.08 * index}s, opacity 0.6s ease-out ${0.08 * index}s`,
    };
  };

  const handleMenuItemClick = (item) => {
    if (item.onClick) {
      item.onClick();
    }
    setIsChecked(false);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-800">
      <div className="relative flex items-center justify-center">
        <button
          onClick={handleToggle}
          className={`${centerColor} ${centerRadius} rounded-full flex items-center justify-center text-white text-lg cursor-pointer relative z-10 transition-all duration-300`}
          style={{
            transform: isChecked ? "scale(1.1)" : "scale(1)",
            boxShadow: isChecked ? "0 0 20px rgba(34, 211, 238, 0.6)" : "none",
          }}
        >
          {label}
        </button>
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleMenuItemClick(item)}
            style={{
              ...menuStyles(index),
              animation: isChecked ? `wave 2s infinite ${index * 0.1}s` : "none",
            }}
            className={`absolute ${menuColor} ${menuItemRadius} text-white rounded-full flex items-center justify-center text-sm cursor-pointer hover:brightness-110 shadow-lg`}
          >
            {item.label}
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes wave {
          0%, 100% {
            transform: translate(${Math.cos(angles[0] * Math.PI / 180) * distance}px, ${Math.sin(angles[0] * Math.PI / 180) * distance}px) scale(1);
          }
          50% {
            transform: translate(${Math.cos(angles[0] * Math.PI / 180) * (distance + 20)}px, ${Math.sin(angles[0] * Math.PI / 180) * (distance + 20)}px) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default Popup_13; 