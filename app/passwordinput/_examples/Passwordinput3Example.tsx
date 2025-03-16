'use client';
import React, { useState } from 'react';
import { PasswordInput } from '../_components/PasswordInput_3';

const PasswordInputExample3 = () => {
  const [password, setPassword] = useState('');
  const requirements = [
    { label: 'At least 8 characters', test: (val: string) => val.length >= 8 },
    { label: 'Contains uppercase', test: (val: string) => /[A-Z]/.test(val) },
    { label: 'Contains lowercase', test: (val: string) => /[a-z]/.test(val) },
    { label: 'Contains number', test: (val: string) => /[0-9]/.test(val) },
    { label: 'Contains special character', test: (val: string) => /[^A-Za-z0-9]/.test(val) }
  ];

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Password with Requirements</h3>
      <PasswordInput
        value={password}
        onChange={setPassword}
        placeholder="Enter your password"
        className="w-full"
      />
      <div className="mt-4 space-y-2">
        {requirements.map((req, index) => (
          <div key={index} className="flex items-center text-sm">
            <span className={`mr-2 ${req.test(password) ? 'text-green-500' : 'text-gray-400'}`}>
              {req.test(password) ? '✓' : '○'}
            </span>
            <span className={req.test(password) ? 'text-green-600' : 'text-gray-600'}>
              {req.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PasswordInputExample3;