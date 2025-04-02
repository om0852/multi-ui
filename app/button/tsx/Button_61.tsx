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
    'relative inline-flex items-center justify-center overflow-hidden rounded-md font-bold text-white transition-all duration-300 focus:outline-none';

  // Button background and color options
  const filledStyles = filled
    ? 'bg-blue-500 hover:bg-blue-600'
    : 'bg-transparent border-2 border-blue-500 text-blue-500 hover:text-white';

  const secondaryStyles = secondary
    ? 'text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white'
    : '';

  // Shape transformation effect on hover
  const shapeTransform = {
    initial: { borderRadius: '8px', scale: 1, padding: '0.5rem 1rem' },
    hover: { borderRadius: '50px', scale: 1.05, padding: '0.75rem 1.25rem' },
  };

  // Zoom effect for the text on hover
  const textZoom = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
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
          variants={shapeTransform}
          className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600"
          style={{
            zIndex: -1,
          }}
        />
        <motion.span
          variants={textZoom}
          className="relative z-10"
        >
          {children}
        </motion.span>
      </Component>
    </motion.div>
  );
};

export default Button;
