import React from 'react';
(() => { 
    return (
      <div>
        <h1>Test_1</h1>
        <p>This is a test component</p>
        <button onClick={() => alert('Button clicked')}>Click me</button>
        <input type="text" placeholder="Enter your name" />
        <select>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <textarea placeholder="Enter your message" />
        <label>Test Label</label>
      </div>
    );
  })
  