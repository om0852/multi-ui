"use client"
import React, { useState } from 'react';
import InputMask from '../_components/InputMask_10';

const Example_10: React.FC = () => {
  const [values, setValues] = useState({
    upc: '',
    ean: '',
    isbn: '',
    sku: ''
  });

  const handleInputChange = (value: string, field: string) => {
    console.log(`${field} Value:`, value);
setValues(prev => ({ ...prev, [field]: value }));
    console.log(values)  };

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '2rem auto', 
      padding: '2rem',
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>UPC-A Input with Barcode Format</h4>
        <InputMask
          label="UPC-A Code"
          mask="UPC"
          placeholder="Enter 12-digit UPC-A code"
          onChange={(value) => handleInputChange(value, 'upc')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>EAN-13 Input with Barcode Format</h4>
        <InputMask
          label="EAN-13 Code"
          mask="EAN"
          placeholder="Enter 13-digit EAN-13 code"
          onChange={(value) => handleInputChange(value, 'ean')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>ISBN Input with Barcode Format</h4>
        <InputMask
          label="ISBN Code"
          mask="EAN"
          placeholder="Enter 13-digit ISBN code"
          onChange={(value) => handleInputChange(value, 'isbn')}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>SKU Input with Barcode Format</h4>
        <InputMask
          label="SKU Code"
          mask="UPC"
          placeholder="Enter 12-digit SKU code"
          onChange={(value) => handleInputChange(value, 'sku')}
        />
      </div>
    </div>
  );
};

export default Example_10;
