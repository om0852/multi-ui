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

  // Base style for the bounce effect with purple-to-pink gradient
  const bounceBaseStyles = filled
    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
    : 'bg-transparent border-2 border-gradient-to-r from-purple-500 to-pink-500 text-purple-500';

  // Secondary button style
  const secondaryStyles = secondary
    ? 'text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white'
    : '';

  // Bounce animation keyframes
  const bounceKeyframes = `
    @keyframes bounceEffect {
      0% {
        transform: translateY(0);
      }
      25% {
        transform: translateY(-8px);
      }
      50% {
        transform: translateY(0);
      }
      75% {
        transform: translateY(-4px);
      }
      100% {
        transform: translateY(0);
      }
    }
  `;

  const spanVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <style>{bounceKeyframes}</style>
      <motion.div
        initial="hidden"
        whileHover="visible"
        className="relative"
      >
        <Component
          className={clsx(baseStyles, bounceBaseStyles, secondaryStyles)}
          onClick={onClick}
        >
          <motion.span
            variants={spanVariants}
            className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
            style={{
              zIndex: -1,
              animation: 'bounceEffect 1s ease-in-out infinite',
            }}
          />
          <span className="relative z-10">{children}</span>
        </Component>
      </motion.div>
    </>
  );
};

export default Button;
