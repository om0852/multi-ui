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

  // Base style for the diagonal wipe effect
  const diagonalWipeStyles = filled
    ? 'bg-blue-500 text-white'
    : 'bg-transparent border-2 border-blue-500 text-blue-500';

  // Secondary button style
  const secondaryStyles = secondary
    ? 'text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white'
    : '';

  // Diagonal wipe animation styles
  const diagonalWipeAnimation = 'hover:diagonal-wipe-effect';

  // Custom diagonal wipe animation keyframes
  const customDiagonalWipeKeyframes = `
    @keyframes diagonalWipe {
      0% {
        transform: scale(1);
        clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
      }
      100% {
        transform: scale(1);
        clip-path: polygon(0% 0%, 100% 0%, 0% 100%, 100% 100%);
      }
    }
  `;

  const spanVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  return (
    <>
      <style>{customDiagonalWipeKeyframes}</style>
      <motion.div
        initial="hidden"
        whileHover="visible"
        className="relative"
      >
        <Component
          className={clsx(baseStyles, diagonalWipeStyles, secondaryStyles, diagonalWipeAnimation)}
          onClick={onClick}
        >
          <motion.span
            variants={spanVariants}
            className="absolute inset-0 bg-blue-500"
            style={{
              zIndex: -1,
              clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
              animation: 'diagonalWipe 0.6s ease-out forwards',
            }}
          />
          <span className="relative z-10">{children}</span>
        </Component>
      </motion.div>
    </>
  );
};

export default Button;
