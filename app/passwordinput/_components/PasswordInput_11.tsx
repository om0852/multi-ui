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

export const StyledPasswordInput: React.FC<PasswordInputProps> = ({
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

  const strengthColors = ['bg-red-500', 'bg-orange-400', 'bg-yellow-400', 'bg-green-500'];
  const strengthTexts = ['Weak', 'Fair', 'Good', 'Strong'];

  return (
    <motion.div className={`p-6 rounded-lg shadow-md ${className}`}> 
      <label htmlFor={id} className="block text-lg font-semibold mb-2 text-gray-800">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={isVisible ? 'text' : 'password'}
          value={password}
          onChange={(e) => handleInputChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="button"
          onClick={() => setIsVisible(!isVisible)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900"
        >
          {isVisible ? '🙈' : '👁️'}
        </button>
      </div>

      <AnimatePresence>
        {password && (
          <motion.div
            className="mt-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">Password Strength</span>
              <motion.span
                className={`text-sm font-semibold ${strengthColors[strength - 1] || 'bg-gray-400'} px-2 py-1 rounded`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {strengthTexts[strength - 1] || 'Very Weak'}
              </motion.span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className={`${strengthColors[strength - 1] || 'bg-gray-400'} h-full`}
                initial={{ width: 0 }}
                animate={{ width: `${(strength / 4) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={handleSubmit}
        className="w-full mt-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        Submit
      </button>
    </motion.div>
  );
};
