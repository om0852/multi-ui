import React, { useState, ReactNode } from "react";

interface MenuItem {
  label: ReactNode; // Allow ReactNode content (e.g., JSX elements, icons, etc.)
  onClick?: () => void; // Optional onClick handler for menu items
}

interface RadialMenuProps {
  menuItems: MenuItem[]; // Array of menu items
  distance?: number; // Optional: Distance of menu items from the center
  label?: ReactNode; // Optional: Content for the central toggle button
  centerColor?: string; // Optional: Background color for the central button
  menuColor?: string; // Optional: Background color for menu items
  centerRadius?: string; // Optional: Custom radius for the central button
  menuItemRadius?: string; // Optional: Custom radius for menu items
}

const RadialMenu: React.FC<RadialMenuProps> = ({
  menuItems,
  distance = 120, // Default distance for menu items
  label = "☰", // Default central button content
  centerColor = "bg-blue-600",
  menuColor = "bg-yellow-500",
  centerRadius = "w-14 h-14", // Default radius for center button
  menuItemRadius = "w-10 h-10", // Default radius for menu items
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const angles = Array.from({ length: menuItems.length }, (_, index) =>
    (360 / menuItems.length) * index
  );

  const menuStyles = (index: number) => {
    const angle = (angles[index] * Math.PI) / 180; // Convert to radians
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    if (!isChecked) {
      return {
        transform: `translate(0px, 0px) scale(0.5)`,
        opacity: 0,
        transition: `transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.3s ease-out`,
      };
    }

    return {
      transform: `translate(${x}px, ${y}px) scale(1)`,
      opacity: 1,
      transition: `transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) ${0.1 * index}s, opacity 0.3s ease-out ${0.1 * index}s`,
    };
  };

  const handleMenuItemClick = (item: MenuItem) => {
    item.onClick && item.onClick(); // Call the item's onClick handler if it exists
    setIsChecked(false); // Close the menu after clicking an item
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-900">
      <div className="relative flex items-center justify-center">
        {/* Center Toggle Button */}
        <button
          onClick={handleToggle}
          className={`${centerColor} ${centerRadius} rounded-full flex items-center justify-center text-white text-2xl cursor-pointer relative z-10 transform ${
            isChecked ? "rotate-90" : "rotate-0"
          } transition-transform duration-300 ease-in-out`}
        >
          {label}
        </button>
        {/* Radial Menu Items */}
        {menuItems.map((item, index) => (
          <div
            key={item.label as string} // Assumes label is unique, if not, use `item.id` instead
            onClick={() => handleMenuItemClick(item)}
            style={menuStyles(index)}
            className={`absolute ${menuColor} ${menuItemRadius} text-white rounded-full flex items-center justify-center text-sm shadow-lg transition-all duration-300 ease-in-out cursor-pointer`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadialMenu;
