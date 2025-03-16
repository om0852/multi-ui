"use client";
import React, { useState } from 'react';
import { BounceRadioGroup as RadioGroup } from '../_components/RadioGroup_22';

export default function RadioGroupExample() {
  const [selectedOption, setSelectedOption] = useState<string>("option1");
  
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" }
  ];

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-semibold mb-4">Select an Option:</h1>
      
      <RadioGroup
        options={options}
        name="example22"
        selectedValue={selectedOption}
        onChange={setSelectedOption}
      />
      
      <div className="mt-6 p-4 bg-gray-100 rounded-md">
        <p>Selected option: <span className="font-medium">{selectedOption}</span></p>
      </div>
    </div>
  );
}
