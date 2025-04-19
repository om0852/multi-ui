import React, { useState, ReactNode } from "react";

interface MenuItem {
  id: string; // Unique identifier for the menu item
  content: ReactNode; // Flexible content for menu items (e.g., text, icons)
  onClick?: () => void; // Optional onClick for menu items
}

interface Popup6Props {
  menuItems: MenuItem[];
  distance?: number; // Optional: Distance of menu items from the center
  centralContent?: ReactNode; // Optional: Content for the central toggle button
  centerColor?: string; // Optional: Background color for the central button
  menuColor?: string; // Optional: Background color for menu items
  centerRadius?: string; // Optional: Custom radius for the central button
  menuItemRadius?: string; // Optional: Custom radius for menu items
  onCenterClick?: () => void; // Optional: onClick handler for the center button
}

const Popup_6: React.FC<Popup6Props> = ({
  menuItems,
  distance = 120, // Default distance for menu items
  centralContent = "Click Me", // Default central button content
  centerColor = "bg-red-500",
  menuColor = "bg-teal-500",
  centerRadius = "w-20 h-20", // Default radius for center button
  menuItemRadius = "w-12 h-12", // Default radius for menu items
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
        transform: `translate(0px, 0px) scale(0)`,
        opacity: 0,
        visibility: "hidden" as const,
        transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
      };
    }

    return {
      transform: `translate(${x}px, ${y}px) scale(1)`,
      opacity: 1,
      visibility: "visible" as const,
      transition: "transform 0.4s ease-out, opacity 0.4s ease-out, transform 0.3s ease-in-out",
    };
  };

  const handleMenuItemClick = (item: MenuItem) => {
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
          className={`${centerColor} ${centerRadius} rounded-full flex items-center justify-center text-white text-lg cursor-pointer relative z-10 transition-all duration-300 ease-in-out`}
          style={{
            transform: isChecked ? "scale(1.2)" : "scale(1)",
          }}
        >
          {centralContent}
        </label>
        {/* Circular Menu Items */}
        {menuItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => handleMenuItemClick(item)}
            style={menuStyles(index)}
            className={`absolute ${menuColor} ${menuItemRadius} text-white rounded-full flex items-center justify-center text-sm no-underline transition-all duration-300 ease-in-out cursor-pointer`}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popup_6;
