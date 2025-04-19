"use client"
import React from 'react';
import InputField from '../tsx/InputField_3';

const Example_3: React.FC = () => {
  return (
    <div>
      <InputField
        name="email"
        id="neon-email"
        label="Email Address"
        placeholder="Enter your email"
        inputType="email"
        value=""
      />
    </div>
  );
};

export default Example_3;
