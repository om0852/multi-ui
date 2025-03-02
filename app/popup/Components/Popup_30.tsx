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
  distance = 160,
  label = "✨",
  centerColor = "bg-green-500",
  glowColor = "ring-green-300",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const getPosition = (index: number) => {
    const angle = (360 / menuItems.length) * index;
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
          className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${centerColor} text-white shadow-2xl ring-2 hover:scale-110 transform transition-all duration-300 ease-in-out`}
          whileTap={{ scale: 0.95 }}
          whileHover={{
            scale: 1.2,
            transition: { type: "spring", stiffness: 300 },
          }}
        >
          {label}
        </motion.button>

        {/* Menu Items */}
        {menuItems.map((item, index) => {
          const position = getPosition(index);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                scale: isOpen ? 1 : 0.5,
                x: isOpen ? position.x : 0,
                y: isOpen ? position.y : 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 150,
              }}
              className={`absolute w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold text-white shadow-lg cursor-pointer bg-blue-500 hover:bg-blue-400 ring-2 ring-offset-2 ${glowColor}`}
              whileHover={{
                scale: 1.3,
                boxShadow: "0 0 20px rgba(0, 255, 0, 0.7)",
              }}
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
