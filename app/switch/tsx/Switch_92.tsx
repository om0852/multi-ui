import React from 'react';
import styled from 'styled-components';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

interface StyledWrapperProps {
  $isChecked: boolean;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => {
  return (
    <StyledWrapper $isChecked={checked}>
      <label className="switch">
        <input 
          type="checkbox" 
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="slider">
          <span className="paper">
            <span className="fold f1"></span>
            <span className="fold f2"></span>
            <span className="fold f3"></span>
            <span className="fold f4"></span>
            <span className="crease c1"></span>
            <span className="crease c2"></span>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .switch {
    position: relative;
    display: inline-block;
    width: 70px;
    height: 36px;
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f0f0f0;
    transition: 0.4s;
    border-radius: 18px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  }

  .paper {
    position: absolute;
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    background: #fff;
    border-radius: 4px;
    transition: 0.4s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .fold {
    position: absolute;
    background: #fff;
    transition: 0.4s;
  }

  .f1, .f2 {
    width: 100%;
    height: 50%;
    transform-origin: bottom;
  }

  .f3, .f4 {
    width: 50%;
    height: 100%;
    transform-origin: right;
  }

  .f1 { top: 0; }
  .f2 { bottom: 0; }
  .f3 { left: 0; }
  .f4 { right: 0; }

  .crease {
    position: absolute;
    background: rgba(0, 0, 0, 0.1);
    transition: 0.4s;
  }

  .c1 {
    width: 100%;
    height: 1px;
    top: 50%;
  }

  .c2 {
    width: 1px;
    height: 100%;
    left: 50%;
  }

  input:checked + .slider {
    background-color: #e6e6e6;
  }

  input:checked + .slider .paper {
    transform: translateX(34px);
  }

  input:checked + .slider .f1 {
    transform: rotateX(-180deg);
  }

  input:checked + .slider .f2 {
    transform: rotateX(180deg);
  }

  input:checked + .slider .f3 {
    transform: rotateY(-180deg);
  }

  input:checked + .slider .f4 {
    transform: rotateY(180deg);
  }

  .slider:hover .paper {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'translateX(34px) scale(1.1)' 
        : 'scale(1.1)'
    };
  }

  .slider:hover .f1 {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'rotateX(-180deg) rotateZ(5deg)' 
        : 'rotateZ(5deg)'
    };
  }

  .slider:hover .f2 {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'rotateX(180deg) rotateZ(-5deg)' 
        : 'rotateZ(-5deg)'
    };
  }

  .slider:hover .f3 {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'rotateY(-180deg) rotateZ(5deg)' 
        : 'rotateZ(5deg)'
    };
  }

  .slider:hover .f4 {
    transform: ${({ $isChecked }) => 
      $isChecked 
        ? 'rotateY(180deg) rotateZ(-5deg)' 
        : 'rotateZ(-5deg)'
    };
  }
`;

export default Switch; 