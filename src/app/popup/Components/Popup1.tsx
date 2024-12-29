"use client"
import React, { useState } from "react";

interface MenuItem {
  label: string;
  href: string;
}

interface Popup1Props {
  menuItems: MenuItem[];
  distance?: number; // Optional: Distance of menu items from the center
  label?: string; // Optional: Label for the central toggle button
  centerColor?: string; // Optional: Background color for the central button
  menuColor?: string; // Optional: Background color for menu items
}

const Popup1: React.FC<Popup1Props> = ({
  menuItems,
  distance = 192, // Default: 12em (192px)
  label = "Click me",
  centerColor = "bg-blue-500",
  menuColor = "bg-orange-400",
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const angles = Array.from({ length: menuItems.length }, (_, index) =>
    (360 / menuItems.length) * index
  );

  const menuStyles = (index: number) => {
    if (!isChecked) {
      return {
        transform: `translate(0px, 0px) rotate(360deg)`,
        opacity: 0,
        transitionDelay: `${0.1 * index}s`,
      };
    }

    const angle = (angles[index] * Math.PI) / 180; // Convert to radians
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    return {
      transform: `translate(${x}px, ${y}px) rotate(0deg)`,
      opacity: 1,
      transitionDelay: `${0.1 * index}s`,
    };
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
          className={`${centerColor} w-40 h-40 rounded-full flex items-center justify-center text-white text-lg cursor-pointer relative z-10`}
        >
          {label}
        </label>
        {/* Circular Menu Items */}
        {menuItems.map((item, index) => (
          <a
            key={item.label}
            href={item.href}
            style={menuStyles(index)}
            className={`absolute ${menuColor} w-16 h-16 text-white rounded-full flex items-center justify-center text-sm no-underline transition-all duration-300 ease-in-out`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Popup1;
