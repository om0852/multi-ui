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
      <div className="cntr">
        <input defaultChecked type="checkbox" id="cbx" className="hidden-xs-up" />
        <label htmlFor="cbx" className="cbx" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cbx {
   position: relative;
   top: 1px;
   width: 27px;
   height: 27px;
   border: 1px solid #c8ccd4;
   border-radius: 3px;
   vertical-align: middle;
   transition: background 0.1s ease;
   cursor: pointer;
   display: block;
  }

  .cbx:after {
   content: '';
   position: absolute;
   top: 2px;
   left: 8px;
   width: 7px;
   height: 14px;
   opacity: 0;
   transform: rotate(45deg) scale(0);
   border-right: 2px solid #fff;
   border-bottom: 2px solid #fff;
   transition: all 0.3s ease;
   transition-delay: 0.15s;
  }

  .lbl {
   margin-left: 5px;
   vertical-align: middle;
   cursor: pointer;
  }

  #cbx:checked ~ .cbx {
   border-color: transparent;
   background: #6871f1;
   animation: jelly 0.6s ease;
  }

  #cbx:checked ~ .cbx:after {
   opacity: 1;
   transform: rotate(45deg) scale(1);
  }

  .cntr {
   position: relative;
  }

  @keyframes jelly {
   from {
    transform: scale(1, 1);
   }

   30% {
    transform: scale(1.25, 0.75);
   }

   40% {
    transform: scale(0.75, 1.25);
   }

   50% {
    transform: scale(1.15, 0.85);
   }

   65% {
    transform: scale(0.95, 1.05);
   }

   75% {
    transform: scale(1.05, 0.95);
   }

   to {
    transform: scale(1, 1);
   }
  }

  .hidden-xs-up {
   display: none!important;
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
      <div className="cntr">
        <input defaultChecked type="checkbox" id="cbx" className="hidden-xs-up" />
        <label htmlFor="cbx" className="cbx" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cbx {
   position: relative;
   top: 1px;
   width: 27px;
   height: 27px;
   border: 1px solid #c8ccd4;
   border-radius: 3px;
   vertical-align: middle;
   transition: background 0.1s ease;
   cursor: pointer;
   display: block;
  }

  .cbx:after {
   content: '';
   position: absolute;
   top: 2px;
   left: 8px;
   width: 7px;
   height: 14px;
   opacity: 0;
   transform: rotate(45deg) scale(0);
   border-right: 2px solid #fff;
   border-bottom: 2px solid #fff;
   transition: all 0.3s ease;
   transition-delay: 0.15s;
  }

  .lbl {
   margin-left: 5px;
   vertical-align: middle;
   cursor: pointer;
  }

  #cbx:checked ~ .cbx {
   border-color: transparent;
   background: #6871f1;
   animation: jelly 0.6s ease;
  }

  #cbx:checked ~ .cbx:after {
   opacity: 1;
   transform: rotate(45deg) scale(1);
  }

  .cntr {
   position: relative;
  }

  @keyframes jelly {
   from {
    transform: scale(1, 1);
   }

   30% {
    transform: scale(1.25, 0.75);
   }

   40% {
    transform: scale(0.75, 1.25);
   }

   50% {
    transform: scale(1.15, 0.85);
   }

   65% {
    transform: scale(0.95, 1.05);
   }

   75% {
    transform: scale(1.05, 0.95);
   }

   to {
    transform: scale(1, 1);
   }
  }

  .hidden-xs-up {
   display: none!important;
  }`;

export default Checkbox;
>>>>>>> 7927750ba26b50dd1a0ece376cf45ab44c37e8dc
