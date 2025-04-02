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
    ? 'bg-purple-600 hover:bg-purple-700 text-white'
    : 'bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white';

  const secondaryStyles = secondary
    ? 'text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white'
    : '';

  // Underline animation on hover
  const underlineEffect = {
    initial: { width: '0%' },
    whileHover: { width: '100%', transition: { duration: 0.3 } },
  };

  // Scale animation for button click
  const scaleEffect = {
    initial: { scale: 1 },
    whileTap: { scale: 0.95, transition: { duration: 0.2 } },
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
          variants={underlineEffect}
          className="absolute bottom-0 left-0 h-[2px] bg-purple-500"
        />
        <motion.span
          variants={scaleEffect}
          className="relative z-10"
        >
          {children}
        </motion.span>
      </Component>
    </motion.div>
  );
};

export default Button;
