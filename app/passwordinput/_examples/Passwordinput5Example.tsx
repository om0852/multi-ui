'use client';
import React, { useState } from 'react';
import { AnimatedPasswordInput } from '../_components/PasswordInput_5';

const PasswordInputExample5 = () => {
  const [password, setPassword] = useState('');

  const handleChange = (value: string) => {
    setPassword(value);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Secure Password Input</h3>
      <AnimatedPasswordInput
        value={password}
        onChange={handleChange}
        className="w-full"
      />
      <div className="mt-4 text-sm text-gray-600">
        This input field prevents copying and pasting for security
      </div>
    </div>
  );
};

export default PasswordInputExample5;