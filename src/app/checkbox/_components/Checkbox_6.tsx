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
      <label className="container">
        <input defaultChecked={true} type="checkbox" />
        <div className="checkmark" />
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .container {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 30px;
    user-select: none;
  }

  .checkmark {
    position: relative;
    top: 0;
    left: 0;
    height: 1.6em;
    width: 1.6em;
    border-radius: 50%;
    background: #ffeded38;
    transition: all 0.2s ease;
  }

  .checkmark {
    opacity: 0.4;
  }

  .container input:checked ~ .checkmark {
    background: linear-gradient(144deg,#af40ff,#5b42f3 50%,#00ddeb);
    opacity: 0.9;
    transition: all 0.2s ease;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    left: 0.61em;
    top: 0.43em;
    width: 0.25em;
    height: 0.5em;
    border: solid rgb(255, 255, 255);
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(45deg);
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
      <label className="container">
        <input defaultChecked={true} type="checkbox" />
        <div className="checkmark" />
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .container {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 30px;
    user-select: none;
  }

  .checkmark {
    position: relative;
    top: 0;
    left: 0;
    height: 1.6em;
    width: 1.6em;
    border-radius: 50%;
    background: #ffeded38;
    transition: all 0.2s ease;
  }

  .checkmark {
    opacity: 0.4;
  }

  .container input:checked ~ .checkmark {
    background: linear-gradient(144deg,#af40ff,#5b42f3 50%,#00ddeb);
    opacity: 0.9;
    transition: all 0.2s ease;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    left: 0.61em;
    top: 0.43em;
    width: 0.25em;
    height: 0.5em;
    border: solid rgb(255, 255, 255);
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(45deg);
  }`;

export default Checkbox;
>>>>>>> 7927750ba26b50dd1a0ece376cf45ab44c37e8dc
