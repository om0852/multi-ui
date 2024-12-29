import React, { useState, ReactNode } from "react";

interface MenuItem {
  label: ReactNode; // Allow ReactNode content (e.g., JSX, icons, etc.)
  onClick?: () => void; // Optional onClick handler for menu items
}

interface SpiralMenuProps {
  menuItems: MenuItem[]; // Array of menu items
  distance?: number; // Optional: Distance of menu items from the center
  label?: ReactNode; // Optional: Content for the central toggle button
  centerColor?: string; // Optional: Background color for the central button
  menuColor?: string; // Optional: Background color for menu items
  centerRadius?: string; // Optional: Custom radius for the central button
  menuItemRadius?: string; // Optional: Custom radius for menu items
}

const SpiralMenu: React.FC<SpiralMenuProps> = ({
  menuItems,
  distance = 120, // Default distance for menu items
  label = "☰", // Default central button label
  centerColor = "bg-purple-500",
  menuColor = "bg-red-400",
  centerRadius = "w-16 h-16", // Default radius for center button
  menuItemRadius = "w-12 h-12", // Default radius for menu items
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuStyles = (index: number) => {
    const angle = (360 / menuItems.length) * index; // Equal spacing for items
    const radian = (angle * Math.PI) / 180;
    const x = Math.cos(radian) * distance * (1 + index * 0.1); // Add spiral effect
    const y = Math.sin(radian) * distance * (1 + index * 0.1);

    if (!isOpen) {
      return {
        transform: `translate(0, 0) scale(0.5) rotate(0deg)`,
        opacity: 0,
        transition: `transform 0.5s ease-in, opacity 0.3s`,
      };
    }

    return {
      transform: `translate(${x}px, ${y}px) scale(1) rotate(${index * 45}deg)`,
      opacity: 1,
      transition: `transform 0.7s ease-out ${index * 0.1}s, opacity 0.5s ease-out`,
    };
  };

  const handleMenuItemClick = (item: MenuItem) => {
    item.onClick?.();
    setIsOpen(false); // Close the menu after clicking an item
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-700">
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

        {/* Spiral Menu Items */}
        {menuItems.map((item, index) => (
          <div
            key={item.label as string} // Use item.label as key, or another unique identifier
            onClick={() => handleMenuItemClick(item)}
            style={menuStyles(index)}
            className={`absolute ${menuColor} ${menuItemRadius} rounded-full flex items-center justify-center text-xs text-black shadow-lg transition-all ease-in-out transform hover:scale-110`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpiralMenu;
