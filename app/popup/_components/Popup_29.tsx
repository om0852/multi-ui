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
  distance = 150,
  label = "✨",
  centerColor = "bg-purple-500",
  glowColor = "ring-purple-300",
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
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black">
      <div className="relative flex items-center justify-center z-50">
        {/* Center Button */}
        <motion.button
          onClick={toggleMenu}
          className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${centerColor} text-white shadow-xl ring-2 hover:scale-110 transform transition-all duration-500 ease-in-out`}
          whileTap={{ scale: 0.9 }}
          whileHover={{
            scale: 1.1,
            rotate: [0, 10, -10, 10, 0],
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
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              className={`absolute w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold text-white shadow-lg cursor-pointer bg-gradient-to-r from-blue-400 to-purple-500 hover:ring-2 hover:ring-offset-2 ${glowColor}`}
              whileHover={{
                scale: 1.2,
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.7)",
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
