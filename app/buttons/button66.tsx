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
  className?: string; // Allow custom className
}

const Button: React.FC<ButtonProps> = ({
  as: Component = 'button',
  children,
  filled = false,
  secondary = false,
  onClick,
  className, // Receive custom className
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

  // Glowing border animation
  const glowEffect = {
    initial: { scale: 1, boxShadow: '0 0 0px rgba(0, 0, 255, 0.4)' },
    hover: { scale: 1.05, boxShadow: '0 0 15px rgba(0, 0, 255, 0.8)' },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className={clsx('relative', className)} // Combine custom className with default styles
    >
      <Component
        className={clsx(baseStyles, filledStyles, secondaryStyles)}
        onClick={onClick}
      >
        <motion.div
          variants={glowEffect}
          className="absolute inset-0 rounded-lg"
          style={{
            zIndex: -1,
            transition: 'box-shadow 0.3s ease-out',
          }}
        />
        <span className="relative z-10">{children}</span>
      </Component>
    </motion.div>
  );
};

export default Button;
