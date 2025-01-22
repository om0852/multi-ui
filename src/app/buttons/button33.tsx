<<<<<<< HEAD
import React from "react";

type SparkleButtonProps = {
  text: string;
  color: string;
  size: string;
};

const Button33: React.FC<SparkleButtonProps> = ({ text, color, size }) => {
  return (
    <button
      className={`relative ${color} ${size} text-white rounded-lg px-6 py-3 font-medium overflow-hidden`}
    >
      <span className="absolute inset-0 flex items-center justify-center sparkle-container pointer-events-none">
        {[...Array(10)].map((_, index) => (
          <span
            key={index}
            className="absolute w-2 h-2 rounded-full bg-white opacity-0 sparkle"
          />
        ))}
      </span>
      {text}
      <style>
        {`
          .sparkle-container .sparkle {
            animation: sparkle-animation 1.5s infinite;
          }
          .sparkle:nth-child(1) { animation-delay: 0.1s; }
          .sparkle:nth-child(2) { animation-delay: 0.2s; }
          .sparkle:nth-child(3) { animation-delay: 0.3s; }
          .sparkle:nth-child(4) { animation-delay: 0.4s; }
          .sparkle:nth-child(5) { animation-delay: 0.5s; }
          .sparkle:nth-child(6) { animation-delay: 0.6s; }
          .sparkle:nth-child(7) { animation-delay: 0.7s; }
          .sparkle:nth-child(8) { animation-delay: 0.8s; }
          .sparkle:nth-child(9) { animation-delay: 0.9s; }
          .sparkle:nth-child(10) { animation-delay: 1s; }

          @keyframes sparkle-animation {
            0% { opacity: 0; transform: translate(0, 0); }
            50% { opacity: 1; transform: translate(10px, -10px); }
            100% { opacity: 0; transform: translate(20px, -20px); }
          }
        `}
      </style>
    </button>
  );
};

export default Button33;
=======
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

  const filledStyles = filled
    ? 'bg-blue-500 hover:bg-blue-600'
    : 'bg-transparent border-2 border-blue-500 hover:bg-blue-500 hover:text-white';

  const secondaryStyles = secondary
    ? 'text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white'
    : '';

  const spanVariants = {
    hidden: { width: '0%' },
    visible: { width: '100%' },
  };

  return (
    <motion.div
      initial="hidden"
      whileHover="visible"
      className="relative"
    >
      <Component
        className={clsx(baseStyles, filledStyles, secondaryStyles)}
        onClick={onClick}
      >
        <motion.span
          variants={spanVariants}
          className="absolute inset-0 bg-blue-500"
          style={{ zIndex: -1 }}
        />
        <span className="relative z-10">{children}</span>
      </Component>
    </motion.div>
  );
};

export default Button;
>>>>>>> e69d976af47e2255bbd3099a0714e51cb460a3ee
