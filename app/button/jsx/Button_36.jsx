"use client"
import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const Button = ({
  as: Component = 'button',
  children,
  filled = false,
  secondary = false,
  onClick,
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center overflow-hidden rounded-full font-bold text-white transition-all duration-300 focus:outline-none';

  const neonGlowStyles = 'border-2 border-blue-500 text-blue-500 hover:border-blue-600 hover:text-blue-600';
  const filledStyles = filled ? 'bg-blue-500 hover:bg-blue-600' : 'bg-transparent';
  const secondaryStyles = secondary ? 'text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white' : '';
  const pulseAnimation = 'hover:scale-110 hover:animate-pulse';

  const spanVariants = {
    hidden: { width: '0%' },
    visible: { width: '100%' },
  };

  return (
    <motion.div initial="hidden" whileHover="visible" className="relative">
      <Component
        className={clsx(baseStyles, filledStyles, secondaryStyles, neonGlowStyles, pulseAnimation)}
        onClick={onClick}
      >
        <motion.span
          variants={spanVariants}
          className="absolute inset-0 bg-blue-500 opacity-30"
          style={{ zIndex: -1 }}
        />
        <span className="relative z-10">{children}</span>
      </Component>
    </motion.div>
  );
};

export default Button;
