import React, { useState, ReactNode } from "react";

interface MenuItem {
  label: ReactNode; // Allow ReactNode content (e.g., JSX, icons, etc.)
  onClick?: () => void; // Optional onClick handler for menu items
}

interface BounceMenuProps {
  menuItems: MenuItem[]; // Array of menu items
  distance?: number; // Distance between menu items
  direction?:
    | "top"
    | "left"
    | "right"
    | "bottom"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"; // Direction of menu expansion
  label?: ReactNode; // Content for central button
  centerColor?: string; // Optional: Custom color for the central button
  menuColor?: string; // Optional: Custom color for the menu items
}

const BounceMenu: React.FC<BounceMenuProps> = ({
  menuItems,
  distance = 100,
  direction = "top",
  label = "💡", // Default label for central button
  centerColor = "bg-indigo-500", // Default center button color
  menuColor = "bg-yellow-500", // Default menu item color
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const getPosition = (index: number) => {
    const multiplier = index + 1;
    switch (direction) {
      case "top":
        return { x: 0, y: -distance * multiplier };
      case "bottom":
        return { x: 0, y: distance * multiplier };
      case "left":
        return { x: -distance * multiplier, y: 0 };
      case "right":
        return { x: distance * multiplier, y: 0 };
      case "top-left":
        return { x: -distance * multiplier, y: -distance * multiplier };
      case "top-right":
        return { x: distance * multiplier, y: -distance * multiplier };
      case "bottom-left":
        return { x: -distance * multiplier, y: distance * multiplier };
      case "bottom-right":
        return { x: distance * multiplier, y: distance * multiplier };
      default:
        return { x: 0, y: 0 };
    }
  };

  const menuStyles = (index: number) => {
    const position = getPosition(index);

    if (!isOpen) {
      return {
        transform: `translate(0, 0) scale(0.5)`,
        opacity: 0,
        Visibility:"hidden",

        transition: `transform 0.5s ease-in, opacity 0.3s`,
      };
    }

return {
      transform: `translate(${position.x}px, ${position.y}px) scale(1)`,
      opacity: 1,
      Visibility:"visible",      transition: `transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) ${index * 0.1}s, opacity 0.5s ease-out`,
    };
  };

  const handleMenuItemClick = (item: MenuItem) => {
    item.onClick?.();
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-gray-800 to-black">
      <div className="relative flex items-center justify-center">
        {/* Center Toggle Button */}
        <button
          onClick={toggleMenu}
          className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${centerColor} text-white animate-pulse shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out relative z-10`}
        >
          {label}
        </button>

        {/* Directional Menu Items */}
        {menuItems.map((item, index) => (
          <div
            key={item.label as string} // Use item.label as key or another unique identifier
            onClick={() => handleMenuItemClick(item)}
            style={menuStyles(index)}
            className={`absolute w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold ${menuColor} text-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BounceMenu;
