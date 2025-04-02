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

  // Filled or transparent styles for the button
  const filledStyles = filled
    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
    : 'bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white';

  const secondaryStyles = secondary
    ? 'text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white'
    : '';

  // Glow effect on hover
  const glowEffect = {
    initial: { boxShadow: '0 0 0 rgba(0, 0, 0, 0)' },
    whileHover: {
      boxShadow: '0 0 10px rgba(75, 75, 255, 0.7), 0 0 20px rgba(75, 75, 255, 0.5)',
      transition: { duration: 0.3 },
    },
  };

  // Expand effect on button click
  const expandEffect = {
    initial: { scale: 1 },
    whileTap: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="whileHover"
      whileTap="whileTap"
      className={clsx('relative', className)} // Combine custom className with default styles
    >
      <Component
        className={clsx(baseStyles, filledStyles, secondaryStyles)}
        onClick={onClick}
      >
        <motion.div
          variants={glowEffect}
          className="absolute inset-0 rounded-lg"
        />
        <motion.span
          variants={expandEffect}
          className="relative z-10"
        >
          {children}
        </motion.span>
      </Component>
    </motion.div>
  );
};

export default Button;
