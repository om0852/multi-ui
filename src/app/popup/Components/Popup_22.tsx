import React, { useState } from "react";
import { motion } from "framer-motion";

interface MenuItem {
  label: React.ReactNode;
  onClick?: () => void;
}

interface GlowingMenuProps {
  menuItems: MenuItem[];
  distance?: number;
  label?: React.ReactNode;
  centerColor?: string;
  glowColor?: string;
}

const GlowingMenu: React.FC<GlowingMenuProps> = ({
  menuItems,
  distance = 120,
  label = "✨",
  centerColor = "bg-blue-600",
  glowColor = "ring-blue-400",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const getPosition = (index: number) => {
    const angle = (360 / menuItems.length) * index - 90; // Start from top
    const angleRad = (Math.PI / 180) * angle;
    const x = Math.cos(angleRad) * distance;
    const y = Math.sin(angleRad) * distance;
    return { x, y };
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="relative flex items-center justify-center z-50">
        {/* Center Button */}
        <motion.button
          onClick={toggleMenu}
          className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${centerColor} text-white shadow-lg ring-2 hover:scale-110 transform transition-all duration-300 ease-in-out`}
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {label}
        </motion.button>

        {/* Menu Items */}
        {menuItems.map((item, index) => {
          const position = getPosition(index);
          return (
            <motion.div
              key={index}
              initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
              animate={{
                x: isOpen ? position.x : 0,
                y: isOpen ? position.y : 0,
                opacity: isOpen ? 1 : 0,
                scale: isOpen ? 1 : 0.5,
              }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
              className={`absolute w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold text-white shadow-md cursor-pointer bg-gray-800 hover:bg-gray-700 ring-2 ring-offset-2 ${glowColor}`}
              whileHover={{ scale: 1.2, boxShadow: "0 0 15px rgba(0, 0, 255, 0.7)" }}
              onClick={item.onClick}
            >
              {item.label}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default GlowingMenu;
