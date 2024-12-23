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
        <label className="switch">
          <input className="togglesw" type="checkbox" defaultChecked />
          <div className="indicator left" />
          <div className="indicator right" />
          <div className="button" />
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    --hue: 220deg;
    --width: 15rem;
    --accent-hue: 22deg;
    --duration: 0.6s;
    --easing: cubic-bezier(1, 0, 1, 1);
  }

  .togglesw {
    display: none;
  }

  .switch {
    --shadow-offset: calc(var(--width) / 20);
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    width: var(--width);
    height: calc(var(--width) / 2.5);
    border-radius: var(--width);
    box-shadow: inset 10px 10px 10px hsl(var(--hue) 20% 80%),
      inset -10px -10px 10px hsl(var(--hue) 20% 93%);
  }

  .indicator {
    content: '';
    position: absolute;
    width: 40%;
    height: 60%;
    transition: all var(--duration) var(--easing);
    box-shadow: inset 0 0 2px hsl(var(--hue) 20% 15% / 60%),
      inset 0 0 3px 2px hsl(var(--hue) 20% 15% / 60%),
      inset 0 0 5px 2px hsl(var(--hue) 20% 45% / 60%);
  }

  .indicator.left {
    --hue: var(--accent-hue);
    overflow: hidden;
    left: 10%;
    border-radius: 100px 0 0 100px;
    background: linear-gradient(180deg, hsl(calc(var(--accent-hue) + 20deg) 95% 80%) 10%, hsl(calc(var(--accent-hue) + 20deg) 100% 60%) 30%, hsl(var(--accent-hue) 90% 50%) 60%, hsl(var(--accent-hue) 90% 60%) 75%, hsl(var(--accent-hue) 90% 50%));
  }

  .indicator.left::after {
    content: '';
    position: absolute;
    opacity: 0.6;
    width: 100%;
    height: 100%;
  }

  .indicator.right {
    right: 10%;
    border-radius: 0 100px 100px 0;
    background-image: linear-gradient(180deg, hsl(var(--hue) 20% 95%), hsl(var(--hue) 20% 65%) 60%, hsl(var(--hue) 20% 70%) 70%, hsl(var(--hue) 20% 65%));
  }

  .button {
    position: absolute;
    z-index: 1;
    width: 55%;
    height: 80%;
    left: 5%;
    border-radius: 100px;
    background-image: linear-gradient(160deg, hsl(var(--hue) 20% 95%) 40%, hsl(var(--hue) 20% 65%) 70%);
    transition: all var(--duration) var(--easing);
    box-shadow: 2px 2px 3px hsl(var(--hue) 18% 50% / 80%),
      2px 2px 6px hsl(var(--hue) 18% 50% / 40%),
      10px 20px 10px hsl(var(--hue) 18% 50% / 40%),
      20px 30px 30px hsl(var(--hue) 18% 50% / 60%);
  }

  .button::before, 
  .button::after {
    content: '';
    position: absolute;
    top: 10%;
    width: 41%;
    height: 80%;
    border-radius: 100%;
  }

  .button::before {
    left: 5%;
    box-shadow: inset 1px 1px 2px hsl(var(--hue) 20% 85%);
    background-image: linear-gradient(-50deg, hsl(var(--hue) 20% 95%) 20%, hsl(var(--hue) 20% 85%) 80%);
  }

  .button::after {
    right: 5%;
    box-shadow: inset 1px 1px 3px hsl(var(--hue) 20% 70%);
    background-image: linear-gradient(-50deg, hsl(var(--hue) 20% 95%) 20%, hsl(var(--hue) 20% 75%) 80%);
  }

  .togglesw:checked ~ .button {
    left: 40%;
  }

  .togglesw:not(:checked) ~ .indicator.left,
  .togglesw:checked ~ .indicator.right {
    box-shadow: inset 0 0 5px hsl(var(--hue) 20% 15% / 100%),
      inset 20px 20px 10px hsl(var(--hue) 20% 15% / 100%),
      inset 20px 20px 15px hsl(var(--hue) 20% 45% / 100%);
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
        <label className="switch">
          <input className="togglesw" type="checkbox" defaultChecked />
          <div className="indicator left" />
          <div className="indicator right" />
          <div className="button" />
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    --hue: 220deg;
    --width: 15rem;
    --accent-hue: 22deg;
    --duration: 0.6s;
    --easing: cubic-bezier(1, 0, 1, 1);
  }

  .togglesw {
    display: none;
  }

  .switch {
    --shadow-offset: calc(var(--width) / 20);
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    width: var(--width);
    height: calc(var(--width) / 2.5);
    border-radius: var(--width);
    box-shadow: inset 10px 10px 10px hsl(var(--hue) 20% 80%),
      inset -10px -10px 10px hsl(var(--hue) 20% 93%);
  }

  .indicator {
    content: '';
    position: absolute;
    width: 40%;
    height: 60%;
    transition: all var(--duration) var(--easing);
    box-shadow: inset 0 0 2px hsl(var(--hue) 20% 15% / 60%),
      inset 0 0 3px 2px hsl(var(--hue) 20% 15% / 60%),
      inset 0 0 5px 2px hsl(var(--hue) 20% 45% / 60%);
  }

  .indicator.left {
    --hue: var(--accent-hue);
    overflow: hidden;
    left: 10%;
    border-radius: 100px 0 0 100px;
    background: linear-gradient(180deg, hsl(calc(var(--accent-hue) + 20deg) 95% 80%) 10%, hsl(calc(var(--accent-hue) + 20deg) 100% 60%) 30%, hsl(var(--accent-hue) 90% 50%) 60%, hsl(var(--accent-hue) 90% 60%) 75%, hsl(var(--accent-hue) 90% 50%));
  }

  .indicator.left::after {
    content: '';
    position: absolute;
    opacity: 0.6;
    width: 100%;
    height: 100%;
  }

  .indicator.right {
    right: 10%;
    border-radius: 0 100px 100px 0;
    background-image: linear-gradient(180deg, hsl(var(--hue) 20% 95%), hsl(var(--hue) 20% 65%) 60%, hsl(var(--hue) 20% 70%) 70%, hsl(var(--hue) 20% 65%));
  }

  .button {
    position: absolute;
    z-index: 1;
    width: 55%;
    height: 80%;
    left: 5%;
    border-radius: 100px;
    background-image: linear-gradient(160deg, hsl(var(--hue) 20% 95%) 40%, hsl(var(--hue) 20% 65%) 70%);
    transition: all var(--duration) var(--easing);
    box-shadow: 2px 2px 3px hsl(var(--hue) 18% 50% / 80%),
      2px 2px 6px hsl(var(--hue) 18% 50% / 40%),
      10px 20px 10px hsl(var(--hue) 18% 50% / 40%),
      20px 30px 30px hsl(var(--hue) 18% 50% / 60%);
  }

  .button::before, 
  .button::after {
    content: '';
    position: absolute;
    top: 10%;
    width: 41%;
    height: 80%;
    border-radius: 100%;
  }

  .button::before {
    left: 5%;
    box-shadow: inset 1px 1px 2px hsl(var(--hue) 20% 85%);
    background-image: linear-gradient(-50deg, hsl(var(--hue) 20% 95%) 20%, hsl(var(--hue) 20% 85%) 80%);
  }

  .button::after {
    right: 5%;
    box-shadow: inset 1px 1px 3px hsl(var(--hue) 20% 70%);
    background-image: linear-gradient(-50deg, hsl(var(--hue) 20% 95%) 20%, hsl(var(--hue) 20% 75%) 80%);
  }

  .togglesw:checked ~ .button {
    left: 40%;
  }

  .togglesw:not(:checked) ~ .indicator.left,
  .togglesw:checked ~ .indicator.right {
    box-shadow: inset 0 0 5px hsl(var(--hue) 20% 15% / 100%),
      inset 20px 20px 10px hsl(var(--hue) 20% 15% / 100%),
      inset 20px 20px 15px hsl(var(--hue) 20% 45% / 100%);
  }`;

export default Switch;
>>>>>>> 7927750ba26b50dd1a0ece376cf45ab44c37e8dc
