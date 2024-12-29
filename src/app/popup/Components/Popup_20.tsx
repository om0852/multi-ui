import React, { useState } from "react";

interface MenuItem {
  label: string;
  onClick?: () => void;
}

interface SwirlMenuProps {
  menuItems: MenuItem[];
  distance?: number; // Distance between menu items
  direction?: "top" | "left" | "right" | "bottom"; // Menu direction
  label?: string; // Label for central button
  centerColor?: string; // Custom color for central button
  menuColor?: string; // Custom color for menu items
}

const SwirlMenu: React.FC<SwirlMenuProps> = ({
  menuItems,
  distance = 120,
  direction = "top",
  label = "🌟",
  centerColor = "bg-indigo-600", // Default center button color
  menuColor = "bg-purple-500", // Default menu item color
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const getPosition = (index: number) => {
    const angle = (360 / menuItems.length) * index;
    const angleRad = (Math.PI / 180) * angle;
    const x = Math.cos(angleRad) * distance;
    const y = Math.sin(angleRad) * distance;

    return { x, y };
  };

  const menuStyles = (index: number) => {
    const position = getPosition(index);

    if (!isOpen) {
      return {
        transform: `translate(0, 0) scale(0.5)`,
        opacity: 0,
        transition: `transform 0.5s ease-out, opacity 0.3s`,
      };
    }

    return {
      transform: `translate(${position.x}px, ${position.y}px) scale(1)`,
      opacity: 1,
      transition: `transform 0.5s ease-out ${index * 0.1}s, opacity 0.5s ease-out ${index * 0.1}s`,
      animation: `bounce 0.6s ease-in-out ${index * 0.1}s`,
    };
  };

  const handleMenuItemClick = (item: MenuItem) => {
    item.onClick?.();
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-b from-gray-800 to-black">
      <div className="relative flex items-center justify-center">
        {/* Center Toggle Button */}
        <button
          onClick={toggleMenu}
          className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${centerColor} text-white shadow-lg hover:animate-pulse transition-all duration-300 ease-in-out relative z-10`}
        >
          {label}
        </button>

        {/* Circular Menu Items with Swirling Effect */}
        {menuItems.map((item, index) => (
          <div
            key={item.label}
            onClick={() => handleMenuItemClick(item)}
            style={menuStyles(index)}
            className={`absolute w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold ${menuColor} text-white shadow-md transition-all duration-300 ease-in-out cursor-pointer`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwirlMenu;
