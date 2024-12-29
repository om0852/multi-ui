import React, { useState } from "react";

interface MenuItem {
  label: string;
  onClick?: () => void;
}

interface SpiralMenuProps {
  menuItems: MenuItem[];
  distance?: number;
  label?: string;
  centerColor?: string;
  menuColor?: string;
  centerRadius?: string;
  menuItemRadius?: string;
}

const SpiralMenu: React.FC<SpiralMenuProps> = ({
  menuItems,
  distance = 100,
  label = "+",
  centerColor = "bg-purple-500",
  menuColor = "bg-red-400",
  centerRadius = "w-16 h-16",
  menuItemRadius = "w-12 h-12",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuStyles = (index: number) => {
    const angle = (index * 40 * Math.PI) / 180; // Spiral effect with 40-degree increments
    const radius = distance + index * 20; // Each item moves further out
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    if (!isOpen) {
      return {
        transform: `translate(0, 0) scale(0)`,
        opacity: 0,
        transition: `transform 0.4s ease-in-out, opacity 0.3s ease-in-out`,
      };
    }

    return {
      transform: `translate(${x}px, ${y}px) scale(1)`,
      opacity: 1,
      transition: `transform 0.6s ease-in-out ${index * 0.1}s, opacity 0.5s ease-in-out ${index * 0.1}s`,
    };
  };

  const handleMenuItemClick = (item: MenuItem) => {
    item.onClick?.();
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-black">
      <div className="relative flex items-center justify-center">
        {/* Central Toggle Button */}
        <button
          onClick={toggleMenu}
          className={`${centerColor} ${centerRadius} rounded-full flex items-center justify-center text-white text-2xl relative z-10 cursor-pointer animate-pulse`}
        >
          {label}
        </button>

        {/* Spiral Menu Items */}
        {menuItems.map((item, index) => (
          <div
            key={item.label}
            onClick={() => handleMenuItemClick(item)}
            style={menuStyles(index)}
            className={`absolute ${menuColor} ${menuItemRadius} rounded-full flex items-center justify-center text-xs text-white shadow-md cursor-pointer transition-all`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpiralMenu;
