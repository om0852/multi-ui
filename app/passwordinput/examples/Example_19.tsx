"use client";
import React, { useState } from 'react';
import { PasswordInput } from '../tsx/PasswordInput_19';

export default function PasswordInputExample() {
  const [password, setPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setFormSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handlePasswordSubmit = (isValid: boolean) => {
    setFormSubmitted(isValid);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Password Input Example
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <PasswordInput
            value={password}
            onChange={handlePasswordChange}
            onSubmit={handlePasswordSubmit}
            label="Create Password"
            className="w-full"
          />
          
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow transition duration-200"
          >
            Validate Password
          </button>
        </form>
        
        {formSubmitted && (
          <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-md">
            <p className="text-center font-medium">Password is valid!</p>
          </div>
        )}
      </div>
    </div>
  );
}
