import React, { useState, ReactNode } from "react";

interface MenuItem {
  label: ReactNode; // Allow ReactNode content (e.g., JSX, icons, etc.)
  onClick?: () => void; // Optional onClick handler for menu items
}

interface Popup18Props {
  menuItems: MenuItem[];
  distance?: number;
  label?: ReactNode;
  centerColor?: string;
  menuColor?: string;
  centerRadius?: string;
  menuItemRadius?: string;
}

const Popup_18: React.FC<Popup18Props> = ({
  menuItems,
  distance = 150,
  label = "Menu",
  centerColor = "bg-sky-500",
  menuColor = "bg-blue-400",
  centerRadius = "w-16 h-16",
  menuItemRadius = "w-12 h-12",
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
        transform: `translate(0px, 0px) scale(0.5) rotate(0deg)`,
        opacity: 0,
        visibility: "hidden" as const,
        transition: "transform 0.5s ease-out, opacity 0.3s ease-out",
      };
    }

    return {
      transform: `translate(${x}px, ${y}px) scale(1) rotate(360deg)`,
      opacity: 1,
      visibility: "visible" as const,
      transition: `transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.1 * index}s, opacity 0.4s ease-out ${0.1 * index}s`,
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
            transform: isChecked ? "scale(1.1) rotate(180deg)" : "scale(1) rotate(0deg)",
            transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {label}
        </button>
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleMenuItemClick(item)}
            style={{
              ...menuStyles(index),
              animation: isChecked ? `swirl ${0.8 + index * 0.1}s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s` : "none",
            }}
            className={`absolute ${menuColor} ${menuItemRadius} text-white rounded-full flex items-center justify-center text-sm cursor-pointer hover:brightness-110 shadow-lg backdrop-blur-sm bg-opacity-90`}
          >
            {item.label}
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes swirl {
          0% {
            transform: translate(0px, 0px) scale(0.5) rotate(0deg);
          }
          100% {
            transform: translate(var(--x), var(--y)) scale(1) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Popup_18;
