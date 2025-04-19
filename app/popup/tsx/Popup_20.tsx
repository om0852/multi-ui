import React, { useState, ReactNode } from "react";

interface MenuItem {
  label: ReactNode;
  onClick?: () => void;
}

interface Popup20Props {
  menuItems: MenuItem[];
  distance?: number;
  label?: ReactNode;
  centerColor?: string;
  menuColor?: string;
  centerRadius?: string;
  menuItemRadius?: string;
}

const Popup_20: React.FC<Popup20Props> = ({
  menuItems,
  distance = 150,
  label = "Menu",
  centerColor = "bg-red-500",
  menuColor = "bg-orange-400",
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
        transform: `translate(0px, 0px) scale(0.5)`,
        opacity: 0,
        visibility: "hidden" as const,
        transition: "transform 0.5s ease-out, opacity 0.3s ease-out",
      };
    }

    return {
      transform: `translate(${x}px, ${y}px) scale(1)`,
      opacity: 1,
      visibility: "visible" as const,
      transition: `transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.1 * index}s, opacity 0.4s ease-out ${0.1 * index}s`,
    };
  };

  const handleMenuItemClick = (item: MenuItem) => {
    item.onClick?.();
    setIsChecked(false);
  };

  const particles = Array.from({ length: 12 }, (_, i) => ({
    angle: (i * 30 * Math.PI) / 180,
    delay: i * 0.1,
  }));

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-800">
      <div className="relative flex items-center justify-center">
        <button
          onClick={handleToggle}
          className={`${centerColor} ${centerRadius} rounded-full flex items-center justify-center text-white text-lg cursor-pointer relative z-10 transition-all duration-300`}
          style={{
            transform: isChecked ? "scale(1.1)" : "scale(1)",
          }}
        >
          {label}
        </button>
        {isChecked && particles.map((particle, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-red-400 rounded-full"
            style={{
              animation: `particle-burst 1s ease-out ${particle.delay}s forwards`,
              transform: `rotate(${particle.angle}rad)`,
            }}
          />
        ))}
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleMenuItemClick(item)}
            style={{
              ...menuStyles(index),
              animation: isChecked ? `burst-out 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s` : "none",
            }}
            className={`absolute ${menuColor} ${menuItemRadius} text-white rounded-full flex items-center justify-center text-sm cursor-pointer hover:brightness-110 shadow-lg backdrop-blur-sm bg-opacity-90`}
          >
            {item.label}
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes particle-burst {
          0% {
            transform: rotate(${0}deg) translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: rotate(${0}deg) translateY(${distance * 0.8}px) scale(0);
            opacity: 0;
          }
        }
        @keyframes burst-out {
          0% {
            transform: translate(0px, 0px) scale(0.5);
            opacity: 0;
          }
          50% {
            transform: translate(var(--x), var(--y)) scale(1.2);
            opacity: 0.8;
          }
          100% {
            transform: translate(var(--x), var(--y)) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Popup_20;