"use client"
import React, { useState } from 'react';
import Checkbox13 from '../_components/Checkbox_13';

const Example_13 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <div className="h-[400px] flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="w-full max-w-md mx-auto px-4">
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Checkbox 13 Example</h1>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="flex flex-col items-center space-y-4">
            <Checkbox13 value={isChecked} onChange={handleCheckboxChange} />
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200">
              Checkbox is {isChecked ? 'checked' : 'unchecked'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_13; 