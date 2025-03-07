"use client";
import React, { useState } from 'react';
import Checkbox68 from '../_components/Checkbox_68';

const Example_68 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-4">Checkbox 68 Example</h1>
      <Checkbox68 value={isChecked} onChange={handleCheckboxChange} />
      <p className="mt-4">Checkbox is {isChecked ? 'checked' : 'unchecked'}</p>
    </div>
  );
};

export default Example_68; 