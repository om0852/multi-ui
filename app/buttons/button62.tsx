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

  // Button background and color options
  const filledStyles = filled
    ? 'bg-blue-500 hover:bg-blue-600'
    : 'bg-transparent border-2 border-blue-500 text-blue-500 hover:text-white';

  const secondaryStyles = secondary
    ? 'text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white'
    : '';

  // Wave effect animation
  const waveEffect = {
    initial: { scale: 1, backgroundSize: '100% 100%' },
    hover: { scale: 1.1, backgroundSize: '300% 300%' },
  };

  // Wave effect for the background
  const waveBackground = {
    initial: { opacity: 0, scale: 0 },
    hover: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="relative"
    >
      <Component
        className={clsx(baseStyles, filledStyles, secondaryStyles)}
        onClick={onClick}
      >
        <motion.div
          variants={waveBackground}
          className="absolute inset-0 bg-blue-500 rounded-full"
          style={{
            zIndex: -1,
            transition: 'background 0.3s ease-out',
          }}
        />
        <motion.span
          variants={waveEffect}
          className="relative z-10"
        >
          {children}
        </motion.span>
      </Component>
    </motion.div>
  );
};

export default Button;
