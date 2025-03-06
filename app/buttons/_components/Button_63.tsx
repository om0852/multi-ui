// components/Button.tsx
'use client';

import React, { ElementType } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface ButtonProps {
  as?: ElementType;
  children: React.ReactNode;
  filled?: boolean;
  secondary?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  as: Component = 'button',
  children,
  filled = false,
  secondary = false,
  onClick,
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center overflow-hidden rounded-lg font-bold text-white transition-all duration-300 focus:outline-none';

  // Button background and color options
  const filledStyles = filled
    ? 'bg-blue-500 text-white'
    : 'bg-transparent border-2 border-blue-500 text-blue-500 hover:text-white';

  const secondaryStyles = secondary
    ? 'text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white'
    : '';

  // Floating and glowing effects
  const floatingEffect = {
    initial: { y: 0, boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' },
    hover: { y: -4, boxShadow: '0 10px 30px rgba(0, 0, 255, 0.3)' },
  };

  const glowingOutline = {
    initial: { borderColor: '#blue', boxShadow: '0 0 8px rgba(0, 0, 255, 0.4)' },
    hover: { borderColor: '#00f', boxShadow: '0 0 15px rgba(0, 0, 255, 0.8)' },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="relative"
    >
      <Component
        className={clsx(baseStyles, filledStyles, secondaryStyles)}
        onClick={onClick}
      >
        <motion.div
          variants={floatingEffect}
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-300 opacity-50 rounded-lg"
          style={{
            zIndex: -1,
            transition: 'background 0.3s ease-out',
          }}
        />
        <motion.span
          variants={glowingOutline}
          className="relative z-10"
        >
          {children}
        </motion.span>
      </Component>
    </motion.div>
  );
};

export default Button;
