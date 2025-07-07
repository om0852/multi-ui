"use client";
import React from 'react';
import { PasswordInput } from '../tsx/PasswordInput_13';

export default function PasswordInputExample() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // The form submission is handled by the component internally
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
            <PasswordInput />
          </div>
          
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow transition duration-200"
          >
            Submit Form
          </button>
        </form>
        
        <div className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-md">
          <p className="text-center font-medium">
            Note: This password input component is self-contained and manages its own state.
          </p>
        </div>
        
        <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
          <p className="text-center">
            Password must be at least 8 characters long, include an uppercase letter and a number.
          </p>
        </div>
      </div>
    </div>
  );
}
