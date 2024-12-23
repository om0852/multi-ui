<<<<<<< HEAD
"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Define the Card component as a functional React component with TypeScript
type Switchprops = {}; // You can add props here if needed in the future

const Switch: React.FC<Switchprops> = () => {
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component is rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on the server during hydration
  if (!mounted) return null;
  return (
    <StyledWrapper>
      <div className="container">
        <input hidden id="check" name="check" type="checkbox" />
        <label className="toggle" htmlFor="check">
          <div className="toggle__circle" />
        </label>
        <div className="toggle-text">
          <span>N</span>
          <span>F</span>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    margin: auto;
    color: hsl(0, 0%, 30%);
    font-weight: 900;
    font-size: 6rem;
    display: flex;
  }

  .toggle {
    width: 60px;
    height: 155px;
    background-color: hsl(0, 0%, 80%);
    border-radius: 1.7rem;
    padding: .25rem 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    transition: background-color 300ms 300ms;
  }

  .toggle__circle {
    width: 50px;
    height: 50px;
    background-color: hsl(0, 0%, 95%);
    border-radius: 50%;
    margin-top: calc(155px - (.25rem * 2) - 50px);
    transition: margin 500ms ease-in-out;
  }

  .toggle-text {
    display: flex;
    flex-direction: column;
    line-height: .8;
  }

  #check:checked + .toggle > .toggle__circle {
    margin-top: 0;
  }

  #check:checked + .toggle {
    background-color: #41a63c;
  }`;

export default Switch;
=======
"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Define the Card component as a functional React component with TypeScript
type Switchprops = {}; // You can add props here if needed in the future

const Switch: React.FC<Switchprops> = () => {
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component is rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on the server during hydration
  if (!mounted) return null;
  return (
    <StyledWrapper>
      <div className="container">
        <input hidden id="check" name="check" type="checkbox" />
        <label className="toggle" htmlFor="check">
          <div className="toggle__circle" />
        </label>
        <div className="toggle-text">
          <span>N</span>
          <span>F</span>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    margin: auto;
    color: hsl(0, 0%, 30%);
    font-weight: 900;
    font-size: 6rem;
    display: flex;
  }

  .toggle {
    width: 60px;
    height: 155px;
    background-color: hsl(0, 0%, 80%);
    border-radius: 1.7rem;
    padding: .25rem 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    transition: background-color 300ms 300ms;
  }

  .toggle__circle {
    width: 50px;
    height: 50px;
    background-color: hsl(0, 0%, 95%);
    border-radius: 50%;
    margin-top: calc(155px - (.25rem * 2) - 50px);
    transition: margin 500ms ease-in-out;
  }

  .toggle-text {
    display: flex;
    flex-direction: column;
    line-height: .8;
  }

  #check:checked + .toggle > .toggle__circle {
    margin-top: 0;
  }

  #check:checked + .toggle {
    background-color: #41a63c;
  }`;

export default Switch;
>>>>>>> 7927750ba26b50dd1a0ece376cf45ab44c37e8dc
