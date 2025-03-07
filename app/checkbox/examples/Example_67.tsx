"use client";
import React, { useState } from 'react';
import Checkbox67 from '../_components/Checkbox_67';

const Example_67 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-4">Checkbox 67 Example</h1>
      <Checkbox67 value={isChecked} onChange={handleCheckboxChange} />
      <p className="mt-4">Checkbox is {isChecked ? 'checked' : 'unchecked'}</p>
    </div>
  );
};

export default Example_67;
