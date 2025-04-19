"use client"
import React from 'react';
import InputField from '../tsx/InputField_2';

const Example_2: React.FC = () => {
  const countryOptions = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "Brazil"
  ];

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '0 1rem' }}>
      <InputField
        name="country"
        id="country-select"
        label="Select Country"
        placeholder="Choose your country"
        options={countryOptions}
        leadingIcon="/icons/globe.svg"
        trailingIcon="/icons/chevron-down.svg"
      />
    </div>
  );
};

export default Example_2;
