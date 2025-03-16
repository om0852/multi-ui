'use client';
import React, { useState } from 'react';
import { PasswordInput } from '../_components/PasswordInput_1';
const PasswordInputExample1 = () => {
  const [password, setPassword] = useState('');

  const handleChange = (value: string) => {
    setPassword(value);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Password Input</h3>
      <PasswordInput
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
        className="w-full"
      />
      <div className="mt-4 text-sm text-gray-600">
        Password must be at least 8 characters long
      </div>
    </div>
  );
};

export default PasswordInputExample1;