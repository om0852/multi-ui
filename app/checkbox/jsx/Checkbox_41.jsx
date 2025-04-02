'use client';

import React from 'react';
import { motion } from 'framer-motion';

const sizes = {
  small: { size: '18px', iconSize: '12px' },
  medium: { size: '22px', iconSize: '14px' },
  large: { size: '28px', iconSize: '18px' }
};

const checkVariants = {
  checked: { 
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  },
  unchecked: { 
    scale: 0,
    opacity: 0
  }
};

const containerVariants = {
  checked: { 
    scale: [1, 1.1, 1],
    transition: { duration: 0.3 }
  },
  unchecked: { 
    scale: 1
  }
};

export default function Checkbox_41({ 
  value, 
  onChange, 
  disabled = false, 
  size = 'medium' 
}) {
  const handleChange = () => {
    if (!disabled) {
      onChange(!value);
    }
  };

  const { size: checkboxSize, iconSize } = sizes[size] || sizes.medium;

  return (
    <div 
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1
      }}
      onClick={handleChange}
    >
      <input 
        type="checkbox"
        checked={value}
        onChange={handleChange}
        disabled={disabled}
        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
      />
      <motion.div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: checkboxSize,
          height: checkboxSize,
          background: value ? 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)' : 'white',
          border: `2px solid ${value ? '#4F46E5' : '#CBD5E0'}`,
          borderRadius: '6px',
          transition: 'all 0.2s ease',
          boxShadow: value ? '0 2px 4px rgba(79, 70, 229, 0.2)' : 'none',
          ...(disabled ? {} : {
            ':hover': {
              transform: 'translateY(-1px)',
              boxShadow: '0 2px 8px rgba(79, 70, 229, 0.2)'
            }
          })
        }}
        variants={containerVariants}
        animate={value ? 'checked' : 'unchecked'}
        initial={false}
      >
        <motion.svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={checkVariants}
          initial="unchecked"
          animate={value ? 'checked' : 'unchecked'}
        >
          <motion.path
            d="M20 6L9 17L4 12"
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset={value ? 0 : 1}
            transition={{ duration: 0.2 }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
