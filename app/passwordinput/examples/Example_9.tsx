"use client";
import React, { useState } from 'react';
import { PasswordInput } from '../tsx/PasswordInput_9';

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

  // Custom validation function
  const validatePassword = (password: string) => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number";
    }
    return null;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Password Input Example
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <PasswordInput
              id="password"
              value={password}
              onChange={handlePasswordChange}
              label="Create a strong password"
              className="w-full"
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow transition duration-200"
          >
            Validate Password
          </button>
        </form>
        
        {formSubmitted && password && !validatePassword(password) && (
          <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-md">
            <p className="text-center font-medium">Password is valid!</p>
          </div>
        )}
        
        <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
          <p className="text-center">
            Password must be at least 8 characters long, include an uppercase letter and a number.
          </p>
        </div>
      </div>
    </div>
  );
}
