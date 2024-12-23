<<<<<<< HEAD
"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Define the Card component as a functional React component with TypeScript
type Loaderprops = {}; // You can add props here if needed in the future

const Loader: React.FC<Loaderprops> = () => {
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component is rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on the server during hydration
  if (!mounted) return null;

  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    display: block;
    --height-of-loader: 4px;
    --loader-color: #0071e2;
    width: 130px;
    height: var(--height-of-loader);
    border-radius: 30px;
    background-color: rgba(0,0,0,0.2);
    position: relative;
  }

  .loader::before {
    content: "";
    position: absolute;
    background: var(--loader-color);
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    border-radius: 30px;
    animation: moving 1s ease-in-out infinite;
    ;
  }

  @keyframes moving {
    50% {
      width: 100%;
    }

    100% {
      width: 0;
      right: 0;
      left: unset;
    }
  }`;

export default Loader;
=======
"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Define the Card component as a functional React component with TypeScript
type Loaderprops = {}; // You can add props here if needed in the future

const Loader: React.FC<Loaderprops> = () => {
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component is rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on the server during hydration
  if (!mounted) return null;

  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    display: block;
    --height-of-loader: 4px;
    --loader-color: #0071e2;
    width: 130px;
    height: var(--height-of-loader);
    border-radius: 30px;
    background-color: rgba(0,0,0,0.2);
    position: relative;
  }

  .loader::before {
    content: "";
    position: absolute;
    background: var(--loader-color);
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    border-radius: 30px;
    animation: moving 1s ease-in-out infinite;
    ;
  }

  @keyframes moving {
    50% {
      width: 100%;
    }

    100% {
      width: 0;
      right: 0;
      left: unset;
    }
  }`;

export default Loader;
>>>>>>> 7927750ba26b50dd1a0ece376cf45ab44c37e8dc
