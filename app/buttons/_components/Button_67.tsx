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

  // Gradient styles for the filled button
  const gradientStyles = filled
    ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white'
    : 'bg-transparent border-2 border-blue-500 text-blue-500 hover:text-white';

  const secondaryStyles = secondary
    ? 'text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white'
    : '';

  // Pulse animation effect
  const pulseEffect = {
    initial: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className={clsx('relative', className)} // Combine custom className with default styles
    >
      <Component
        className={clsx(baseStyles, gradientStyles, secondaryStyles)}
        onClick={onClick}
      >
        <motion.div
          variants={pulseEffect}
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-50"
          style={{ zIndex: -1 }}
        />
        <span className="relative z-10">{children}</span>
      </Component>
    </motion.div>
  );
};

export default Button;
