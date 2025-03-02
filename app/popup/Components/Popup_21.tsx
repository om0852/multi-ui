import React, { useState, ReactNode } from "react";

interface MenuItem {
  label: ReactNode; // Allow ReactNode content (e.g., JSX, icons, etc.)
  onClick?: () => void; // Optional onClick handler for menu items
}

interface RadialMenuProps {
  menuItems: MenuItem[]; // Array of menu items
  distance?: number; // Distance between menu items
  label?: ReactNode; // Content for central button
  centerColor?: string; // Custom color for central button
  menuColor?: string; // Custom color for menu items
}

const RadialMenu: React.FC<RadialMenuProps> = ({
  menuItems,
  distance = 100,
  label = "☀️", // Default label for central button
  centerColor = "bg-blue-600", // Default center button color
  menuColor = "bg-red-500", // Default menu item color
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const getPosition = (index: number) => {
    const angle = (360 / menuItems.length) * index - 90; // Adjust for top start
    const angleRad = (Math.PI / 180) * angle;
    const x = Math.cos(angleRad) * distance;
    const y = Math.sin(angleRad) * distance;

    return { x, y };
  };

  const menuStyles = (index: number) => {
    const position = getPosition(index);

    if (!isOpen) {
      return {
        transform: `translate(0, 0) scale(0)`,
        opacity: 0,
        Visiblity: "hidden",
        transition: `transform 0.4s ease-in, opacity 0.2s`,
      };
    }

    return {
      transform: `translate(${position.x}px, ${position.y}px) scale(1)`,
      opacity: 1,
      Visiblity: "visible",
      transition: `transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) ${
        index * 0.05
      }s, opacity 0.5s ease-out ${index * 0.05}s`,
    };
  };

  const handleMenuItemClick = (item: MenuItem) => {
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
            key={item.label as string} // Use item.label as key or another unique identifier
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

export default RadialMenu;
