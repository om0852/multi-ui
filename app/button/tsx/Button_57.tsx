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

  // Base style for the ripple effect with neon purple-to-blue gradient
  const rippleBaseStyles = filled
    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
    : 'bg-transparent border-2 border-gradient-to-r from-purple-500 to-blue-500 text-purple-500';

  // Secondary button style
  const secondaryStyles = secondary
    ? 'text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white'
    : '';

  // Ripple animation keyframes
  const rippleKeyframes = `
    @keyframes rippleEffect {
      0% {
        transform: scale(0);
        opacity: 0.4;
      }
      50% {
        transform: scale(1.5);
        opacity: 0.6;
      }
      100% {
        transform: scale(0);
        opacity: 0;
      }
    }
  `;

  const spanVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <style>{rippleKeyframes}</style>
      <motion.div
        initial="hidden"
        whileHover="visible"
        className="relative"
      >
        <Component
          className={clsx(baseStyles, rippleBaseStyles, secondaryStyles)}
          onClick={onClick}
        >
          <motion.span
            variants={spanVariants}
            className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500"
            style={{
              zIndex: -1,
              animation: 'rippleEffect 1.5s ease-out infinite',
            }}
          />
          <span className="relative z-10">{children}</span>
        </Component>
      </motion.div>
    </>
  );
};

export default Button;
