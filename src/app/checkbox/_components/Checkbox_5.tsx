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
        <input type="checkbox" defaultChecked={true} />
        <div className="checkmark" />
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* Hide the default checkbox */
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
    font-size: 20px;
    user-select: none;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: relative;
    top: 0;
    left: 0;
    height: 2.3em;
    width: 2.3em;
    background-color: #ccc;
    border-radius: 50%;
    transition: .4s;
  }

  .checkmark:hover {
    box-shadow: inset 17px 17px 16px #b3b3b3,
              inset -17px -17px 16px #ffffff;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    box-shadow: none;
    background-color: limegreen;
    transform: rotateX(360deg);
  }

  .container input:checked ~ .checkmark:hover {
    box-shadow: 3px 3px 3px rgba(0,0,0,0.2);
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 0.96em;
    top: 0.7em;
    width: 0.25em;
    height: 0.5em;
    border: solid white;
    border-width: 0 0.15em 0.15em 0;
    box-shadow: 0.1em 0.1em 0em 0 rgba(0,0,0,0.3);
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
        <input type="checkbox" defaultChecked={true} />
        <div className="checkmark" />
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* Hide the default checkbox */
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
    font-size: 20px;
    user-select: none;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: relative;
    top: 0;
    left: 0;
    height: 2.3em;
    width: 2.3em;
    background-color: #ccc;
    border-radius: 50%;
    transition: .4s;
  }

  .checkmark:hover {
    box-shadow: inset 17px 17px 16px #b3b3b3,
              inset -17px -17px 16px #ffffff;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    box-shadow: none;
    background-color: limegreen;
    transform: rotateX(360deg);
  }

  .container input:checked ~ .checkmark:hover {
    box-shadow: 3px 3px 3px rgba(0,0,0,0.2);
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 0.96em;
    top: 0.7em;
    width: 0.25em;
    height: 0.5em;
    border: solid white;
    border-width: 0 0.15em 0.15em 0;
    box-shadow: 0.1em 0.1em 0em 0 rgba(0,0,0,0.3);
    transform: rotate(45deg);
  }`;

export default Checkbox;
>>>>>>> 7927750ba26b50dd1a0ece376cf45ab44c37e8dc
