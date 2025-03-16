'use client';
import React, { useState } from 'react';
import { AnimatedPasswordInput } from '../_components/PasswordInput_4';

const PasswordInputExample4 = () => {
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChange = (value: string) => {
    setPassword(value);
    setIsValid(value.length >= 8);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Password with Animation</h3>
      <AnimatedPasswordInput
        value={password}
        onChange={handleChange}
        className="w-full"
      />
      <div className="mt-4 text-sm text-gray-600">
        Enter at least 8 characters
      </div>
    </div>
  );
};

export default PasswordInputExample4;