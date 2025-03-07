"use client";
import React, { useState } from 'react';
import Checkbox53 from '../_components/Checkbox_53';

const Example_53 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-4">Checkbox 53 Example</h1>
      <Checkbox53 value={isChecked} onChange={handleCheckboxChange} />
      <p className="mt-4">Checkbox is {isChecked ? 'checked' : 'unchecked'}</p>
    </div>
  );
};

export default Example_53; 