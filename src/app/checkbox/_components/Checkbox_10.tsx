<<<<<<< HEAD
"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Define the Card component as a functional React component with TypeScript
type Checkboxprops = {}; // You can add props here if needed in the future

const Checkbox: React.FC<Checkboxprops> = () => {
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component is rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on the server during hydration
  if (!mounted) return null;
  return (
    <StyledWrapper>
      <div className="checkbox-container">
        <label className="ios-checkbox blue">
          <input type="checkbox" />
          <div className="checkbox-wrapper">
            <div className="checkbox-bg" />
            <svg fill="none" viewBox="0 0 24 24" className="checkbox-icon">
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={3} stroke="currentColor" d="M4 12L10 18L20 6" className="check-path" />
            </svg>
          </div>
        </label>
        <label className="ios-checkbox green">
          <input type="checkbox" />
          <div className="checkbox-wrapper">
            <div className="checkbox-bg" />
            <svg fill="none" viewBox="0 0 24 24" className="checkbox-icon">
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={3} stroke="currentColor" d="M4 12L10 18L20 6" className="check-path" />
            </svg>
          </div>
        </label>
        <label className="ios-checkbox purple">
          <input type="checkbox" />
          <div className="checkbox-wrapper">
            <div className="checkbox-bg" />
            <svg fill="none" viewBox="0 0 24 24" className="checkbox-icon">
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={3} stroke="currentColor" d="M4 12L10 18L20 6" className="check-path" />
            </svg>
          </div>
        </label>
        <label className="ios-checkbox red">
          <input type="checkbox" />
          <div className="checkbox-wrapper">
            <div className="checkbox-bg" />
            <svg fill="none" viewBox="0 0 24 24" className="checkbox-icon">
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={3} stroke="currentColor" d="M4 12L10 18L20 6" className="check-path" />
            </svg>
          </div>
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .checkbox-container {
    display: flex;
    gap: 20px;
    padding: 20px;
    background: #f8fafc;
    border-radius: 16px;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -2px rgba(0, 0, 0, 0.05);
  }

  .ios-checkbox {
    --checkbox-size: 28px;
    --checkbox-color: #3b82f6;
    --checkbox-bg: #dbeafe;
    --checkbox-border: #93c5fd;

    position: relative;
    display: inline-block;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .ios-checkbox input {
    display: none;
  }

  .checkbox-wrapper {
    position: relative;
    width: var(--checkbox-size);
    height: var(--checkbox-size);
    border-radius: 8px;
    transition: transform 0.2s ease;
  }

  .checkbox-bg {
    position: absolute;
    inset: 0;
    border-radius: 8px;
    border: 2px solid var(--checkbox-border);
    background: white;
    transition: all 0.2s ease;
  }

  .checkbox-icon {
    position: absolute;
    inset: 0;
    margin: auto;
    width: 80%;
    height: 80%;
    color: white;
    transform: scale(0);
    transition: all 0.2s ease;
  }

  .check-path {
    stroke-dasharray: 40;
    stroke-dashoffset: 40;
    transition: stroke-dashoffset 0.3s ease 0.1s;
  }

  /* Checked State */
  .ios-checkbox input:checked + .checkbox-wrapper .checkbox-bg {
    background: var(--checkbox-color);
    border-color: var(--checkbox-color);
  }

  .ios-checkbox input:checked + .checkbox-wrapper .checkbox-icon {
    transform: scale(1);
  }

  .ios-checkbox input:checked + .checkbox-wrapper .check-path {
    stroke-dashoffset: 0;
  }

  /* Hover Effects */
  .ios-checkbox:hover .checkbox-wrapper {
    transform: scale(1.05);
  }

  /* Active Animation */
  .ios-checkbox:active .checkbox-wrapper {
    transform: scale(0.95);
  }

  /* Focus Styles */
  .ios-checkbox input:focus + .checkbox-wrapper .checkbox-bg {
    box-shadow: 0 0 0 4px var(--checkbox-bg);
  }

  /* Color Themes */
  .ios-checkbox.blue {
    --checkbox-color: #3b82f6;
    --checkbox-bg: #dbeafe;
    --checkbox-border: #93c5fd;
  }

  .ios-checkbox.green {
    --checkbox-color: #10b981;
    --checkbox-bg: #d1fae5;
    --checkbox-border: #6ee7b7;
  }

  .ios-checkbox.purple {
    --checkbox-color: #8b5cf6;
    --checkbox-bg: #ede9fe;
    --checkbox-border: #c4b5fd;
  }

  .ios-checkbox.red {
    --checkbox-color: #ef4444;
    --checkbox-bg: #fee2e2;
    --checkbox-border: #fca5a5;
  }

  /* Animation */
  @keyframes bounce {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }

  .ios-checkbox input:checked + .checkbox-wrapper {
    animation: bounce 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }`;

export default Checkbox;
=======
"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Define the Card component as a functional React component with TypeScript
type Checkboxprops = {}; // You can add props here if needed in the future

const Checkbox: React.FC<Checkboxprops> = () => {
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component is rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on the server during hydration
  if (!mounted) return null;
  return (
    <StyledWrapper>
      <div className="checkbox-container">
        <label className="ios-checkbox blue">
          <input type="checkbox" />
          <div className="checkbox-wrapper">
            <div className="checkbox-bg" />
            <svg fill="none" viewBox="0 0 24 24" className="checkbox-icon">
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={3} stroke="currentColor" d="M4 12L10 18L20 6" className="check-path" />
            </svg>
          </div>
        </label>
        <label className="ios-checkbox green">
          <input type="checkbox" />
          <div className="checkbox-wrapper">
            <div className="checkbox-bg" />
            <svg fill="none" viewBox="0 0 24 24" className="checkbox-icon">
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={3} stroke="currentColor" d="M4 12L10 18L20 6" className="check-path" />
            </svg>
          </div>
        </label>
        <label className="ios-checkbox purple">
          <input type="checkbox" />
          <div className="checkbox-wrapper">
            <div className="checkbox-bg" />
            <svg fill="none" viewBox="0 0 24 24" className="checkbox-icon">
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={3} stroke="currentColor" d="M4 12L10 18L20 6" className="check-path" />
            </svg>
          </div>
        </label>
        <label className="ios-checkbox red">
          <input type="checkbox" />
          <div className="checkbox-wrapper">
            <div className="checkbox-bg" />
            <svg fill="none" viewBox="0 0 24 24" className="checkbox-icon">
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={3} stroke="currentColor" d="M4 12L10 18L20 6" className="check-path" />
            </svg>
          </div>
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .checkbox-container {
    display: flex;
    gap: 20px;
    padding: 20px;
    background: #f8fafc;
    border-radius: 16px;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -2px rgba(0, 0, 0, 0.05);
  }

  .ios-checkbox {
    --checkbox-size: 28px;
    --checkbox-color: #3b82f6;
    --checkbox-bg: #dbeafe;
    --checkbox-border: #93c5fd;

    position: relative;
    display: inline-block;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .ios-checkbox input {
    display: none;
  }

  .checkbox-wrapper {
    position: relative;
    width: var(--checkbox-size);
    height: var(--checkbox-size);
    border-radius: 8px;
    transition: transform 0.2s ease;
  }

  .checkbox-bg {
    position: absolute;
    inset: 0;
    border-radius: 8px;
    border: 2px solid var(--checkbox-border);
    background: white;
    transition: all 0.2s ease;
  }

  .checkbox-icon {
    position: absolute;
    inset: 0;
    margin: auto;
    width: 80%;
    height: 80%;
    color: white;
    transform: scale(0);
    transition: all 0.2s ease;
  }

  .check-path {
    stroke-dasharray: 40;
    stroke-dashoffset: 40;
    transition: stroke-dashoffset 0.3s ease 0.1s;
  }

  /* Checked State */
  .ios-checkbox input:checked + .checkbox-wrapper .checkbox-bg {
    background: var(--checkbox-color);
    border-color: var(--checkbox-color);
  }

  .ios-checkbox input:checked + .checkbox-wrapper .checkbox-icon {
    transform: scale(1);
  }

  .ios-checkbox input:checked + .checkbox-wrapper .check-path {
    stroke-dashoffset: 0;
  }

  /* Hover Effects */
  .ios-checkbox:hover .checkbox-wrapper {
    transform: scale(1.05);
  }

  /* Active Animation */
  .ios-checkbox:active .checkbox-wrapper {
    transform: scale(0.95);
  }

  /* Focus Styles */
  .ios-checkbox input:focus + .checkbox-wrapper .checkbox-bg {
    box-shadow: 0 0 0 4px var(--checkbox-bg);
  }

  /* Color Themes */
  .ios-checkbox.blue {
    --checkbox-color: #3b82f6;
    --checkbox-bg: #dbeafe;
    --checkbox-border: #93c5fd;
  }

  .ios-checkbox.green {
    --checkbox-color: #10b981;
    --checkbox-bg: #d1fae5;
    --checkbox-border: #6ee7b7;
  }

  .ios-checkbox.purple {
    --checkbox-color: #8b5cf6;
    --checkbox-bg: #ede9fe;
    --checkbox-border: #c4b5fd;
  }

  .ios-checkbox.red {
    --checkbox-color: #ef4444;
    --checkbox-bg: #fee2e2;
    --checkbox-border: #fca5a5;
  }

  /* Animation */
  @keyframes bounce {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }

  .ios-checkbox input:checked + .checkbox-wrapper {
    animation: bounce 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }`;

export default Checkbox;
>>>>>>> 7927750ba26b50dd1a0ece376cf45ab44c37e8dc
