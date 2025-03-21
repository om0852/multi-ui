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

  // Pulse effect base styles
  const pulseBaseStyles = filled
    ? 'bg-blue-500 text-white'
    : 'bg-transparent border-2 border-blue-500 text-blue-500';

  // Secondary button style
  const secondaryStyles = secondary
    ? 'text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white'
    : '';

  // Pulse animation styles
  const pulseAnimation = 'hover:pulse-effect';

  // Custom pulse animation keyframes
  const customPulseKeyframes = `
    @keyframes pulse {
      0% {
        transform: scale(1) translate(0, 0);
        opacity: 1;
      }
      50% {
        transform: scale(1.1) translate(0, -5px);
        opacity: 0.9;
      }
      100% {
        transform: scale(1) translate(0, 0);
        opacity: 1;
      }
    }
  `;

  const spanVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  return (
    <>
      <style>{customPulseKeyframes}</style>
      <motion.div
        initial="hidden"
        whileHover="visible"
        className="relative"
      >
        <Component
          className={clsx(baseStyles, pulseBaseStyles, secondaryStyles, pulseAnimation)}
          onClick={onClick}
        >
          <motion.span
            variants={spanVariants}
            className="absolute inset-0 bg-blue-500 opacity-30"
            style={{
              zIndex: -1,
              animation: 'pulse 1s ease-in-out infinite',
            }}
          />
          <span className="relative z-10">{children}</span>
        </Component>
      </motion.div>
    </>
  );
};

export default Button;
