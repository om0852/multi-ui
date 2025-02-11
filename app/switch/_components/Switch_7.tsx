import React from 'react';
import { motion } from 'framer-motion';

interface DarkModeSwitchProps {
  value: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
}

const DarkModeSwitch: React.FC<DarkModeSwitchProps> = ({
  value,
  onChange,
  disabled = false,
}) => {
  const handleToggle = () => {
    if (!disabled) {
      onChange(!value);
    }
  };

  const variants = {
    true: {
      x: '100%', // Move the circle to the right when dark mode is active
      backgroundColor: 'rgba(59, 130, 246, 1)', // Tailwind blue-500 for light mode
    },
    false: {
      x: 0,
      backgroundColor: 'rgba(34, 34, 34, 1)', // Dark background for dark mode
    },
  };

  return (
    <div
      className={`relative w-20 h-10 rounded-full transition-all duration-300 ease-in-out ${
        disabled
          ? 'bg-gray-300 opacity-60 cursor-not-allowed'
          : 'bg-gray-700 cursor-pointer'
      }`}
      onClick={handleToggle}
    >
      <motion.div
        className="absolute top-1 left-1 w-8 h-8 rounded-full bg-white shadow-lg flex justify-center items-center"
        variants={variants}
        animate={value ? 'true' : 'false'}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
          ease: 'easeInOut',
        }}
      >
        <img
          src={
            value
              ? 'https://img.icons8.com/?size=100&id=dvBWyhbvWX8g&format=png&color=FFFFFF' // Moon icon for dark mode
              : 'https://img.icons8.com/?size=100&id=648&format=png&color=FFFFFF' // Sun icon for light mode
          }
          alt={value ? 'Moon Icon' : 'Sun Icon'}
          className="w-6 h-6"
        />
      </motion.div>
    </div>
  );
};

export default DarkModeSwitch;
