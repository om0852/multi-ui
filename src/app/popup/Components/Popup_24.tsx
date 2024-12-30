import React, { useState } from "react";
import { motion } from "framer-motion";

interface MenuItem {
  label: React.ReactNode;
  onClick?: () => void;
}

interface CircularMenuProps {
  menuItems: MenuItem[];
  distance?: number;
  label?: React.ReactNode;
  centerColor?: string;
  menuItemColor?: string;
}

const CircularMenu: React.FC<CircularMenuProps> = ({
  menuItems,
  distance = 150,
  label = "⚙️",
  centerColor = "bg-green-500",
  menuItemColor = "bg-yellow-500",
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
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-tl from-black to-gray-800">
      <div className="relative flex items-center justify-center z-50">
        {/* Center Button */}
        <motion.button
          onClick={toggleMenu}
          className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold ${centerColor} text-white shadow-lg hover:ring-4 hover:ring-green-300 transform transition-all duration-300 ease-in-out`}
          whileHover={{ rotate: 180, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
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
                visibility:isOpen?"visible":"hidden",
                x: isOpen ? position.x : 0,
                y: isOpen ? position.y : 0,
                opacity: isOpen ? 1 : 0,
                scale: isOpen ? 1 : 0.5,
              }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
              className={`absolute w-14 h-14 rounded-full flex items-center justify-center text-lg font-semibold text-white shadow-lg cursor-pointer ${menuItemColor} hover:scale-110 hover:ring-2 hover:ring-yellow-300`}
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

export default CircularMenu;
