import React, { useState, ReactNode } from "react";

interface MenuItem {
  label: ReactNode; // Flexible content for menu items (text, icons, etc.)
  onClick?: () => void; // Optional onClick for menu items
}

interface Popup7Props {
  menuItems: MenuItem[]; // Array of menu items
  distance?: number; // Optional: Distance of menu items from the center
  label?: ReactNode; // Optional: Content for the central toggle button
  centerColor?: string; // Optional: Background color for the central button
  menuColor?: string; // Optional: Background color for menu items
  centerRadius?: string; // Optional: Custom radius for the central button
  menuItemRadius?: string; // Optional: Custom radius for menu items
  onCenterClick?: () => void; // Optional: onClick handler for the center button
}

const Popup_7: React.FC<Popup7Props> = ({
  menuItems,
  distance = 150, // Default distance for menu items
  label = "Click Me", // Default central button content
  centerColor = "bg-green-500",
  menuColor = "bg-indigo-500",
  centerRadius = "w-16 h-16", // Default radius for center button
  menuItemRadius = "w-10 h-10", // Default radius for menu items
  onCenterClick, // Optional: onClick handler for center button
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
        transform: `translate(0px, 0px) rotate(360deg)`,
        opacity: 0,
        transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
      };
    }

    return {
      transform: `translate(${x}px, ${y}px) rotate(${angles[index]}deg)`,
      opacity: 1,
      transition: "transform 0.4s ease-out, opacity 0.4s ease-out",
    };
  };

  const handleMenuItemClick = (item: MenuItem) => {
    item.onClick && item.onClick(); // Call the item's onClick handler if it exists
    setIsChecked(false); // Close the menu after clicking an item
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
          className={`${centerColor} ${centerRadius} rounded-full flex items-center justify-center text-white text-lg cursor-pointer relative z-10 transition-all duration-300 ease-in-out`}
          style={{
            transform: isChecked ? "scale(1.1)" : "scale(1)",
            animation: isChecked ? "pulse 1s infinite" : "none",
          }}
        >
          {label}
        </label>
        {/* Circular Menu Items */}
        {menuItems.map((item, index) => (
          <div
            key={item.label as string} // Assumes label is unique, if not, use `item.id` instead
            onClick={() => handleMenuItemClick(item)}
            style={menuStyles(index)}
            className={`absolute ${menuColor} ${menuItemRadius} text-white rounded-full flex items-center justify-center text-sm no-underline transition-all duration-300 ease-in-out cursor-pointer`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popup_7;
