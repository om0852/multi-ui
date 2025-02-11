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

  // Liquid fill effect with wave animation
  const liquidFillStyles = filled
    ? 'bg-blue-500 text-white'
    : 'bg-transparent border-2 border-blue-500 text-blue-500';

  // Secondary button style
  const secondaryStyles = secondary
    ? 'text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white'
    : '';

  // Liquid wave animation
  const waveAnimation = 'hover:animate-wave';

  // Keyframes for liquid wave animation
  const customWaveKeyframes = `
    @keyframes wave {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `;

  const spanVariants = {
    hidden: { width: '0%' },
    visible: { width: '100%' },
  };

  return (
    <>
      <style>{customWaveKeyframes}</style>
      <motion.div
        initial="hidden"
        whileHover="visible"
        className="relative"
      >
        <Component
          className={clsx(baseStyles, liquidFillStyles, secondaryStyles, waveAnimation)}
          onClick={onClick}
        >
          <motion.span
            variants={spanVariants}
            className="absolute inset-0 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 opacity-50"
            style={{
              zIndex: -1,
              backgroundSize: '200% 100%',
              animation: 'wave 2s infinite linear',
            }}
          />
          <span className="relative z-10">{children}</span>
        </Component>
      </motion.div>
    </>
  );
};

export default Button;
