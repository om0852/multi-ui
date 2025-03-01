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

  // Base style for the neon glow effect
  const neonBaseStyles = filled
    ? 'bg-blue-500 text-white'
    : 'bg-transparent border-2 border-blue-500 text-blue-500';

  // Secondary button style
  const secondaryStyles = secondary
    ? 'text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white'
    : '';

  // Custom neon glow animation keyframes
  const neonGlowKeyframes = `
    @keyframes neonGlow {
      0% {
        box-shadow: 0 0 5px rgba(0, 204, 255, 0.5), 0 0 15px rgba(0, 204, 255, 0.5), 0 0 30px rgba(0, 204, 255, 0.5);
      }
      50% {
        box-shadow: 0 0 10px rgba(0, 204, 255, 1), 0 0 30px rgba(0, 204, 255, 1), 0 0 60px rgba(0, 204, 255, 1);
      }
      100% {
        box-shadow: 0 0 5px rgba(0, 204, 255, 0.5), 0 0 15px rgba(0, 204, 255, 0.5), 0 0 30px rgba(0, 204, 255, 0.5);
      }
    }
  `;

  const spanVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <style>{neonGlowKeyframes}</style>
      <motion.div
        initial="hidden"
        whileHover="visible"
        className="relative"
      >
        <Component
          className={clsx(baseStyles, neonBaseStyles, secondaryStyles)}
          onClick={onClick}
        >
          <motion.span
            variants={spanVariants}
            className="absolute inset-0"
            style={{
              zIndex: -1,
              animation: 'neonGlow 1.5s ease-in-out infinite',
            }}
          />
          <span className="relative z-10">{children}</span>
        </Component>
      </motion.div>
    </>
  );
};

export default Button;
