'use client';
import React, { useState } from 'react';
import { StyledPasswordInput } from '../_components/PasswordInput_11';

const PasswordInputExample11 = () => {
  const [password, setPassword] = useState('');

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Neumorphic Password</h3>
      <StyledPasswordInput
        value={password}
        onChange={setPassword}
        className="w-full"
      />
      <div className="mt-4 text-sm text-gray-600">
        Soft UI design with neumorphic effects
      </div>
    </div>
  );
};

export default PasswordInputExample11;