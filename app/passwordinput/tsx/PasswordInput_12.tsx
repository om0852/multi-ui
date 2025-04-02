"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PasswordInputProps {
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  className?: string;
  onSubmit?: (isValid: boolean) => void;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  id = 'password',
  value = '',
  onChange,
  label = 'Password',
  className = '',
  onSubmit,
}) => {
  const [password, setPassword] = useState(value);
  const [isVisible, setIsVisible] = useState(false);
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    const calculateStrength = (pwd: string) => {
      let score = 0;
      if (pwd.length >= 8) score++;
      if (/[A-Z]/.test(pwd)) score++;
      if (/[0-9]/.test(pwd)) score++;
      if (/[^A-Za-z0-9]/.test(pwd)) score++;
      setStrength(score);
    };

    calculateStrength(password);
  }, [password]);

  const handleInputChange = (value: string) => {
    setPassword(value);
    onChange?.(value);
  };

  const isPasswordValid = strength === 4;

  const handleSubmit = () => {
    onSubmit?.(isPasswordValid);
  };

  const strengthColors = ['bg-red-400', 'bg-yellow-400', 'bg-blue-400', 'bg-green-500'];
  const strengthLabels = ['Too Weak', 'Weak', 'Moderate', 'Strong'];

  return (
    <motion.div 
      className={`p-6 rounded-lg shadow-xl border-2 border-gray-200 bg-white ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <label htmlFor={id} className="block text-lg font-semibold mb-2 text-gray-800">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={isVisible ? 'text' : 'password'}
          value={password}
          onChange={(e) => handleInputChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all"
        />
        <motion.button
          type="button"
          onClick={() => setIsVisible(!isVisible)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {isVisible ? '🙈' : '👁️'}
        </motion.button>
      </div>

      <AnimatePresence>
        {password && (
          <motion.div
            className="mt-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">Strength</span>
              <motion.div
                className={`text-sm font-bold px-2 py-1 rounded-full ${strengthColors[strength - 1] || 'bg-gray-400'} text-white`}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
              >
                {strengthLabels[strength - 1] || 'Very Weak'}
              </motion.div>
            </div>
            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className={`absolute top-0 left-0 h-full ${strengthColors[strength - 1] || 'bg-gray-400'}`}
                initial={{ width: 0 }}
                animate={{ width: `${(strength / 4) * 100}%` }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleSubmit}
        className="mt-4 w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-transform transform hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Submit
      </motion.button>
    </motion.div>
  );
};
