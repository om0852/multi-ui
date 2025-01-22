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

  // Pulse effect on idle
  const pulseEffect = {
    initial: { scale: 1, boxShadow: '0 0 20px rgba(0, 0, 255, 0.4)' },
    hover: { scale: 1.05, boxShadow: '0 0 30px rgba(0, 0, 255, 0.6)' },
  };

  // 3D pressable effect when clicked
  const pressEffect = {
    initial: { y: 0 },
    pressed: { y: 4 },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      whileTap="pressed"
      className={clsx('relative', className)} // Combine custom className with default styles
    >
      <Component
        className={clsx(baseStyles, filledStyles, secondaryStyles, className)} // Apply className for customization
        onClick={onClick}
      >
        <motion.div
          variants={pulseEffect}
          className="absolute inset-0 bg-blue-500 rounded-lg opacity-30"
          style={{
            zIndex: -1,
            transition: 'box-shadow 0.3s ease-out',
          }}
        />
        <motion.span
          variants={pressEffect}
          className="relative z-10"
        >
          {children}
        </motion.span>
      </Component>
    </motion.div>
  );
};

export default Button;
