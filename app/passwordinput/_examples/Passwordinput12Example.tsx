'use client';
import React, { useState } from 'react';
import { StyledPasswordInput } from '../_components/PasswordInput_12';

const PasswordInputExample12 = () => {
  const [password, setPassword] = useState('');

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-white mb-4">Glassmorphism Password</h3>
      <StyledPasswordInput
        value={password}
        onChange={setPassword}
        className="w-full"
      />
      <div className="mt-4 text-sm text-white/80">
        Modern glassmorphism effect with backdrop blur
      </div>
    </div>
  );
};

export default PasswordInputExample12;