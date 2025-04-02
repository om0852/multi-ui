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

  // Metallic shimmer effect
  const metallicStyles = filled
    ? 'bg-gradient-to-r from-silver-500 via-gray-500 to-silver-300 text-gray-900 hover:from-silver-300 hover:to-silver-500'
    : 'bg-transparent border-2 border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white';

  // Secondary button style
  const secondaryStyles = secondary
    ? 'text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white'
    : '';

  // Shimmer effect animation
  const shimmerEffect = 'hover:scale-110 hover:animate-shimmer';

  // Create a custom shimmer animation keyframe
  const customShimmer = `
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
  `;

  const spanVariants = {
    hidden: { width: '0%' },
    visible: { width: '100%' },
  };

  return (
    <>
      <style>{customShimmer}</style>
      <motion.div
        initial="hidden"
        whileHover="visible"
        className="relative"
      >
        <Component
          className={clsx(baseStyles, metallicStyles, secondaryStyles, shimmerEffect)}
          onClick={onClick}
        >
          <motion.span
            variants={spanVariants}
            className="absolute inset-0 bg-gradient-to-r from-silver-500 via-gray-500 to-silver-300 opacity-30"
            style={{
              zIndex: -1,
              backgroundSize: '200% 100%',
              animation: 'shimmer 1.5s infinite linear',
            }}
          />
          <span className="relative z-10">{children}</span>
        </Component>
      </motion.div>
    </>
  );
};

export default Button;
