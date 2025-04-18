import React, { useState, ReactNode } from "react";

interface MenuItem {
  label: ReactNode; // Allow ReactNode content (e.g., JSX, icons, etc.)
  onClick?: () => void; // Optional onClick handler for menu items
}

interface Popup14Props {
  menuItems: MenuItem[]; // Array of menu items
  distance?: number; // Optional: Distance of menu items from the center
  label?: ReactNode; // Optional: Content for the central toggle button
  centerColor?: string; // Optional: Background color for the central button
  menuColor?: string; // Optional: Background color for menu items
  centerRadius?: string; // Optional: Custom radius for the central button
  menuItemRadius?: string; // Optional: Custom radius for menu items
}

const Popup_14: React.FC<Popup14Props> = ({
  menuItems,
  distance = 150, // Default distance for menu items
  label = "Menu", // Default central button label
  centerColor = "bg-amber-500",
  menuColor = "bg-orange-400",
  centerRadius = "w-16 h-16", // Default radius for center button
  menuItemRadius = "w-12 h-12", // Default radius for menu items
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const angles = Array.from({ length: menuItems.length }, (_, index) =>
    (360 / menuItems.length) * index
  );

  const menuStyles = (index: number) => {
    const angle = (angles[index] * Math.PI) / 180;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    if (!isChecked) {
      return {
        transform: `translate(0px, 0px) scale(0.5)`,
        opacity: 0,
        visibility: "hidden" as const,
        transition: "transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.3s ease-out",
      };
    }

    return {
      transform: `translate(${x}px, ${y}px) scale(1)`,
      opacity: 1,
      visibility: "visible" as const,
      transition: `transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${0.1 * index}s, opacity 0.4s ease-out ${0.1 * index}s`,
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
        <button
          onClick={handleToggle}
          className={`${centerColor} ${centerRadius} rounded-full flex items-center justify-center text-white text-lg cursor-pointer relative z-10 transition-all duration-300`}
          style={{
            transform: isChecked ? "scale(1.1)" : "scale(1)",
            animation: isChecked ? "elastic-bounce 1s infinite" : "none",
          }}
        >
          {label}
        </button>
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleMenuItemClick(item)}
            style={menuStyles(index)}
            className={`absolute ${menuColor} ${menuItemRadius} text-white rounded-full flex items-center justify-center text-sm cursor-pointer hover:scale-110 transition-transform duration-200 shadow-lg`}
          >
            {item.label}
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes elastic-bounce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          75% {
            transform: scale(0.9);
          }
        }
      `}</style>
    </div>
  );
};

export default Popup_14;
