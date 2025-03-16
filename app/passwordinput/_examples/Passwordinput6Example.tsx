'use client';
import React, { useState } from 'react';
import { AnimatedPasswordInput } from '../_components/PasswordInput_6';

const PasswordInputExample6 = () => {
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  const validatePassword = (value: string) => {
    const newErrors: string[] = [];
    if (!/[A-Z]{2,}/.test(value)) newErrors.push('At least 2 uppercase letters');
    if (!/\d{3,}/.test(value)) newErrors.push('At least 3 numbers');
    if (!/[!@#$%^&*]/.test(value)) newErrors.push('At least 1 special character');
    if (value.length < 10) newErrors.push('Minimum 10 characters');
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleChange = (value: string) => {
    setPassword(value);
    validatePassword(value);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Custom Validation Rules</h3>
      <AnimatedPasswordInput
        value={password}
        onChange={handleChange}
        className="w-full"
      />
      <div className="mt-4 space-y-1">
        {errors.map((error, index) => (
          <div key={index} className="text-sm text-red-500 flex items-center">
            <span className="mr-2">•</span>
            {error}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PasswordInputExample6;