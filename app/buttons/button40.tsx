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

  // Glitch effect base styles
  const glitchBaseStyles = filled
    ? 'bg-black text-white'
    : 'bg-transparent border-2 border-black text-black';

  // Secondary button style
  const secondaryStyles = secondary
    ? 'text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white'
    : '';

  // Glitch animation style
  const glitchAnimation = 'hover:glitch-effect';

  // Custom glitch effect keyframes
  const customGlitchKeyframes = `
    @keyframes glitch {
      0% {
        transform: translateX(0);
        clip-path: inset(0 0 0 0);
        opacity: 1;
      }
      20% {
        transform: translateX(-2px);
        clip-path: inset(0 0 0 0);
        opacity: 0.6;
      }
      40% {
        transform: translateX(2px);
        clip-path: inset(0 0 0 0);
        opacity: 0.6;
      }
      60% {
        transform: translateX(-1px);
        clip-path: inset(0 0 0 0);
        opacity: 0.8;
      }
      80% {
        transform: translateX(1px);
        clip-path: inset(0 0 0 0);
        opacity: 0.8;
      }
      100% {
        transform: translateX(0);
        clip-path: inset(0 0 0 0);
        opacity: 1;
      }
    }
  `;

  const spanVariants = {
    hidden: { width: '0%' },
    visible: { width: '100%' },
  };

  return (
    <>
      <style>{customGlitchKeyframes}</style>
      <motion.div
        initial="hidden"
        whileHover="visible"
        className="relative"
      >
        <Component
          className={clsx(baseStyles, glitchBaseStyles, secondaryStyles, glitchAnimation)}
          onClick={onClick}
        >
          <motion.span
            variants={spanVariants}
            className="absolute inset-0 bg-black opacity-20"
            style={{
              zIndex: -1,
              animation: 'glitch 0.6s linear infinite',
            }}
          />
          <span className="relative z-10">{children}</span>
        </Component>
      </motion.div>
    </>
  );
};

export default Button;
