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

  // Glowing outline for the button
  const glowingOutlineStyles = filled
    ? 'bg-blue-500 text-white'
    : 'bg-transparent border-2 border-blue-500 text-blue-500';

  // Secondary button style
  const secondaryStyles = secondary
    ? 'text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white'
    : '';

  // Pulse animation keyframes
  const pulseKeyframes = `
    @keyframes pulseEffect {
      0% {
        transform: scale(1);
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 20px rgba(0, 0, 255, 0.7);
      }
      50% {
        transform: scale(1.1);
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 25px rgba(0, 0, 255, 1);
      }
      100% {
        transform: scale(1);
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 20px rgba(0, 0, 255, 0.7);
      }
    }
  `;

  const spanVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <style>{pulseKeyframes}</style>
      <motion.div
        initial="hidden"
        whileHover="visible"
        className="relative"
      >
        <Component
          className={clsx(baseStyles, glowingOutlineStyles, secondaryStyles)}
          onClick={onClick}
        >
          <motion.span
            variants={spanVariants}
            className="absolute inset-0"
            style={{
              zIndex: -1,
              animation: 'pulseEffect 1.5s ease-out infinite',
            }}
          />
          <span className="relative z-10">{children}</span>
        </Component>
      </motion.div>
    </>
  );
};

export default Button;
