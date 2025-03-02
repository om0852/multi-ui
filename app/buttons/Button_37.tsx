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
    'relative inline-flex items-center justify-center overflow-hidden rounded-full font-bold text-white transition-all duration-300 focus:outline-none';

  // Gradient background with smooth transition
  const gradientStyles = filled
    ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-red-500 hover:to-purple-500'
    : 'bg-transparent border-2 border-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:to-purple-500';

  // Secondary button style
  const secondaryStyles = secondary
    ? 'text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white'
    : '';

  // Animation for rotation and gradient color shift
  const rotateAnimation = 'hover:rotate-[5deg] hover:animate-spin-slow';

  const spanVariants = {
    hidden: { width: '0%' },
    visible: { width: '100%' },
  };

  return (
    <motion.div
      initial="hidden"
      whileHover="visible"
      className="relative"
    >
      <Component
        className={clsx(baseStyles, gradientStyles, secondaryStyles, rotateAnimation)}
        onClick={onClick}
      >
        <motion.span
          variants={spanVariants}
          className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-30"
          style={{ zIndex: -1 }}
        />
        <span className="relative z-10">{children}</span>
      </Component>
    </motion.div>
  );
};

export default Button;
