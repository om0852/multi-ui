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

  // Liquid top-to-bottom fill effect
  const liquidFillStyles = filled
    ? 'bg-blue-500 text-white'
    : 'bg-transparent border-2 border-blue-500 text-blue-500';

  // Secondary button style
  const secondaryStyles = secondary
    ? 'text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white'
    : '';

  // Top-to-bottom fill animation effect
  const fillAnimation = 'hover:fill-effect';

  // Custom top-to-bottom fill animation keyframes
  const customFillKeyframes = `
    @keyframes fillTopToBottom {
      0% {
        transform: scaleY(0);
        transform-origin: top;
        opacity: 0;
      }
      100% {
        transform: scaleY(1);
        transform-origin: top;
        opacity: 1;
      }
    }
  `;

  const spanVariants = {
    hidden: { height: '0%' },
    visible: { height: '100%' },
  };

  return (
    <>
      <style>{customFillKeyframes}</style>
      <motion.div
        initial="hidden"
        whileHover="visible"
        className="relative"
      >
        <Component
          className={clsx(baseStyles, liquidFillStyles, secondaryStyles, fillAnimation)}
          onClick={onClick}
        >
          <motion.span
            variants={spanVariants}
            className="absolute inset-0 bg-blue-500"
            style={{
              zIndex: -1,
              transformOrigin: 'top',
              animation: 'fillTopToBottom 0.4s ease-out forwards',
            }}
          />
          <span className="relative z-10">{children}</span>
        </Component>
      </motion.div>
    </>
  );
};

export default Button;
