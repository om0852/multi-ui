import React, { useState, ReactNode } from "react";

interface MenuItem {
  id: string; // Unique identifier for the menu item
  content: ReactNode; // Flexible content for menu items (e.g., text, icons)
  href: string;
  onClick?: () => void; // Optional onClick for menu items
}

interface Popup4Props {
  menuItems: MenuItem[];
  distance?: number; // Optional: Distance of menu items from the center
  centralContent?: ReactNode; // Optional: Content for the central toggle button
  centerColor?: string; // Optional: Background color for the central button
  menuColor?: string; // Optional: Background color for menu items
  centerRadius?: string; // Optional: Custom radius for the central button
  menuItemRadius?: string; // Optional: Custom radius for menu items
  onCenterClick?: () => void; // Optional: onClick handler for the center button
}

const Popup_4: React.FC<Popup4Props> = ({
  menuItems,
  distance = 150, // Default: 150px distance for menu items
  centralContent = "Menu", // Default content for the central button
  centerColor = "bg-teal-500",
  menuColor = "bg-indigo-400",
  centerRadius = "w-36 h-36", // Default center button radius
  menuItemRadius = "w-16 h-16", // Default menu item radius
  onCenterClick, // onClick handler for the center button
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
        transform: `translate(0px, 0px)`,
        opacity: 0,
        Visibility:"hidden",

        transitionDelay: `${0.1 * index}s`,
      };
    }

    const angle = (angles[index] * Math.PI) / 180; // Convert to radians
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    return {
      transform: `translate(${x}px, ${y}px)`,
      opacity: 1,
      Visibility:"visible",

      transitionDelay: `${0.1 * index}s`,
    };
  };

  const handleMenuItemClick = (item: MenuItem) => {
    item.onClick && item.onClick(); // Call the item's onClick handler if it exists
    setIsChecked(false); // Close the menu after clicking an item
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-900">
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
            transform: isChecked ? "scale(1.1) rotate(360deg)" : "scale(1) rotate(0deg)",
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

export default Popup_4;
