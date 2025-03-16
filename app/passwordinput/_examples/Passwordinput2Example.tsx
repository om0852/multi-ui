'use client';
import React, { useState } from 'react';
import { PasswordInput } from '../_components/PasswordInput_2';

const PasswordInputExample2 = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);

  const handleChange = (value: string) => {
    setPassword(value);
    calculateStrength(value);
  };

  const calculateStrength = (value: string) => {
    let score = 0;
    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[a-z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[^A-Za-z0-9]/.test(value)) score++;
    setStrength(score);
  };

  const getStrengthLabel = () => {
    const labels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
    return labels[strength - 1] || 'None';
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Password with Strength Indicator</h3>
      <PasswordInput
        value={password}
        onChange={handleChange}
        placeholder="Enter a strong password"
        className="w-full"
      />
      <div className="mt-4">
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-300 ${
              strength === 0 ? 'bg-red-500' :
              strength === 1 ? 'bg-orange-500' :
              strength === 2 ? 'bg-yellow-500' :
              strength === 3 ? 'bg-lime-500' :
              'bg-green-500'
            }`}
            style={{ width: `${(strength / 5) * 100}%` }}
          />
        </div>
        <div className="mt-2 text-sm text-gray-600">
          Password strength: {getStrengthLabel()}
        </div>
      </div>
    </div>
  );
};

export default PasswordInputExample2;