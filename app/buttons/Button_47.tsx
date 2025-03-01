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

  // Base style for the liquid wave effect
  const liquidBaseStyles = filled
    ? 'bg-blue-500 text-white'
    : 'bg-transparent border-2 border-blue-500 text-blue-500';

  // Secondary button style
  const secondaryStyles = secondary
    ? 'text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white'
    : '';

  // Custom liquid wave animation keyframes
  const liquidWaveKeyframes = `
    @keyframes liquidWave {
      0% {
        transform: scaleX(0);
        transform-origin: left;
      }
      100% {
        transform: scaleX(1);
        transform-origin: right;
      }
    }
  `;

  const spanVariants = {
    hidden: { width: '0%' },
    visible: { width: '100%' },
  };

  return (
    <>
      <style>{liquidWaveKeyframes}</style>
      <motion.div
        initial="hidden"
        whileHover="visible"
        className="relative"
      >
        <Component
          className={clsx(baseStyles, liquidBaseStyles, secondaryStyles)}
          onClick={onClick}
        >
          <motion.span
            variants={spanVariants}
            className="absolute inset-0 bg-blue-500"
            style={{
              zIndex: -1,
              animation: 'liquidWave 1s ease-out forwards',
            }}
          />
          <span className="relative z-10">{children}</span>
        </Component>
      </motion.div>
    </>
  );
};

export default Button;
