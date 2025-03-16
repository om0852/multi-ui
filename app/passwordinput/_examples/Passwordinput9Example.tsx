'use client';
import React, { useState } from 'react';
import { FuturisticPasswordInput } from '../_components/PasswordInput_9';

const PasswordInputExample9 = () => {
  const [password, setPassword] = useState('');

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Floating Label Password</h3>
      <FuturisticPasswordInput
        value={password}
        onChange={setPassword}
        label="Password"
        className="w-full"
      />
      <div className="mt-4 text-sm text-gray-600">
        Label smoothly transitions on focus
      </div>
    </div>
  );
};

export default PasswordInputExample9;