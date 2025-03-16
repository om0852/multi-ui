'use client';
import React, { useState } from 'react';
import { PlayfulPasswordInput } from '../_components/PasswordInput_8';

const PasswordInputExample8 = () => {
  const [password, setPassword] = useState('');

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Gradient Border Password</h3>
      <PlayfulPasswordInput
        value={password}
        onChange={setPassword}
        className="w-full"
      />
      <div className="mt-4 text-sm text-gray-600">
        Border gradient changes based on password length
      </div>
    </div>
  );
};

export default PasswordInputExample8;