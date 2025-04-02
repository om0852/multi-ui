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

  // Liquid fill background with shimmer effect
  const liquidFillStyles = filled
    ? 'bg-blue-500 text-white'
    : 'bg-transparent border-2 border-blue-500 text-blue-500';

  // Secondary button style
  const secondaryStyles = secondary
    ? 'text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white'
    : '';

  // Shimmer animation keyframes
  const shimmerKeyframes = `
    @keyframes shimmerEffect {
      0% {
        background-position: -200% 0;
      }
      100% {
        background-position: 200% 0;
      }
    }
  `;

  // Liquid fill effect animation on hover
  const liquidFillAnimation = {
    initial: { width: '0%' },
    hover: { width: '100%' },
  };

  return (
    <>
      <style>{shimmerKeyframes}</style>
      <motion.div
        initial="initial"
        whileHover="hover"
        className="relative"
      >
        <Component
          className={clsx(baseStyles, liquidFillStyles, secondaryStyles)}
          onClick={onClick}
        >
          <motion.span
            variants={liquidFillAnimation}
            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600"
            style={{
              zIndex: -1,
              animation: 'shimmerEffect 1.5s infinite linear',
              backgroundSize: '200% 100%',
            }}
          />
          <span className="relative z-10">{children}</span>
        </Component>
      </motion.div>
    </>
  );
};

export default Button;
