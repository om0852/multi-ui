"use client";
import React, { useState } from "react";

const Popup_3 = ({
  menuItems,
  distance = 180, // Default: 180px distance for menu items
  centralContent = "Menu", // Default: Text content for the central button
  centerColor = "bg-green-500",
  menuColor = "bg-purple-400",
  centerRadius = "w-36 h-36", // Default center button radius
  menuItemRadius = "w-14 h-14", // Default menu item radius
  onCenterClick, // onClick handler for the center button
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const angles = Array.from({ length: menuItems.length }, (_, index) =>
    (360 / menuItems.length) * index
  );

  const menuStyles = (index) => {
    if (!isChecked) {
      return {
        transform: `scale(0) rotate(0deg)`,
        opacity: 0,
        visibility: "hidden",
        transitionDelay: `${0.1 * index}s`,
      };
    }

    const angle = (angles[index] * Math.PI) / 180; // Convert to radians
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    return {
      transform: `translate(${x}px, ${y}px) scale(1)`,
      opacity: 1,
      visibility: "visible",
      transitionDelay: `${0.1 * index}s`,
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
        <input
          type="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={handleToggle}
          className="hidden"
        />
        {/* Center Toggle Button */}
        <label
          htmlFor="checkbox"
          onClick={onCenterClick} // Execute onCenterClick if passed
          className={`${centerColor} ${centerRadius} rounded-full flex items-center justify-center text-white text-lg cursor-pointer relative z-10 transition-all duration-300 transform`}
          style={{
            transform: isChecked ? "rotate(45deg) scale(1.1)" : "rotate(0deg)",
          }}
        >
          {centralContent}
        </label>
        {/* Circular Menu Items */}
        {menuItems.map((item, index) => (
          <a
            key={item.id}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              handleMenuItemClick(item);
            }}
            style={menuStyles(index)}
            className={`absolute ${menuColor} ${menuItemRadius} text-white rounded-full flex items-center justify-center text-sm no-underline transition-all duration-300 ease-in-out`}
          >
            {item.content}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Popup_3; 