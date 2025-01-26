import React from 'react';
import styled from 'styled-components';

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ checked = false, onChange }) => {
  return (
    <StyledWrapper>
      <div className="checkbox-wrapper-sunset">
        <input 
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
        />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .checkbox-wrapper-sunset input[type="checkbox"] {
    background-image: -webkit-linear-gradient(hsla(0,0%,0%,.1), hsla(0,0%,100%,.1)),
                      -webkit-linear-gradient(left, #ff7e5f 50%, #feb47b 50%);
    background-size: 100% 100%, 200% 100%;
    background-position: 0 0, 15px 0;
    border-radius: 25px;
    box-shadow: inset 0 1px 4px hsla(0,0%,0%,.5),
                inset 0 0 10px hsla(0,0%,0%,.5),
                0 0 0 1px hsla(0,0%,0%,.1),
                0 -1px 2px 2px hsla(0,0%,0%,.25),
                0 2px 2px 2px hsla(0,0%,100%,.75),
                0 0 15px rgba(255, 126, 95, 0.5);
    cursor: pointer;
    height: 25px;
    padding-right: 25px;
    width: 75px;
    -webkit-appearance: none;
    -webkit-transition: .25s;
    transition: all 0.25s ease;
  }

  .checkbox-wrapper-sunset input[type="checkbox"]:after {
    background: linear-gradient(180deg, #fff8f6 0%, #ffe9e3 100%);
    border-radius: 25px;
    box-shadow: inset 0 1px 1px 1px hsla(0,0%,100%,1),
                inset 0 -1px 1px 1px hsla(0,0%,0%,.25),
                0 1px 3px 1px hsla(0,0%,0%,.4),
                0 0 2px hsla(0,0%,0%,.5),
                0 0 8px rgba(255, 255, 255, 0.8);
    content: '';
    display: block;
    height: 25px;
    width: 50px;
  }

  .checkbox-wrapper-sunset input[type="checkbox"]:checked {
    background-position: 0 0, 35px 0;
    padding-left: 25px;
    padding-right: 0;
    box-shadow: inset 0 1px 4px hsla(0,0%,0%,.5),
                inset 0 0 10px hsla(0,0%,0%,.5),
                0 0 0 1px hsla(0,0%,0%,.1),
                0 -1px 2px 2px hsla(0,0%,0%,.25),
                0 2px 2px 2px hsla(0,0%,100%,.75),
                0 0 20px rgba(254, 180, 123, 0.8);
  }

  .checkbox-wrapper-sunset input[type="checkbox"]:hover {
    box-shadow: inset 0 1px 4px hsla(0,0%,0%,.5),
                inset 0 0 10px hsla(0,0%,0%,.5),
                0 0 0 1px hsla(0,0%,0%,.1),
                0 -1px 2px 2px hsla(0,0%,0%,.25),
                0 2px 2px 2px hsla(0,0%,100%,.75),
                0 0 25px rgba(255, 126, 95, 0.8);
  }
`;

export default Switch; 