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
    'relative inline-flex items-center justify-center overflow-hidden rounded-md px-6 py-3 font-semibold text-white transition-all duration-300 focus:outline-none';

  const filledStyles = filled
    ? 'bg-green-500 hover:bg-green-600'
    : 'bg-transparent border-2 border-green-500 hover:bg-green-500 hover:text-white';

  const secondaryStyles = secondary
    ? 'text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white'
    : '';

  const spanVariants = {
    hidden: { width: '0%' },
    visible: { width: '100%' },
  };

  const containerVariants = {
    hidden: { scale: 1 },
    hover: { scale: 1.05 },
  };

  return (
    <motion.div
      initial="hidden"
      whileHover="hover"
      variants={containerVariants}
      className="relative"
    >
      <Component
        className={clsx(baseStyles, filledStyles, secondaryStyles)}
        onClick={onClick}
      >
        <motion.span
          initial="hidden"
          animate="hidden"
          whileHover="visible"
          variants={spanVariants}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-green-500"
          style={{ zIndex: -1 }}
        />
        <span className="relative z-10">{children}</span>
      </Component>
    </motion.div>
  );
};

export default Button;
