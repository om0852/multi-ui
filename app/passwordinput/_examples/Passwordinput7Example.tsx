'use client';
import React, { useState } from 'react';
import { PlayfulPasswordInput } from '../_components/PasswordInput_7';

const PasswordInputExample7 = () => {
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (value: string) => {
    setPassword(value);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Fancy Toggle Password</h3>
      <PlayfulPasswordInput
        value={password}
        onChange={handleChange}
        className="w-full"
      />
      <div className="mt-4 text-sm text-gray-600">
        Click the eye icon for a fancy reveal animation
      </div>
    </div>
  );
};

export default PasswordInputExample7;