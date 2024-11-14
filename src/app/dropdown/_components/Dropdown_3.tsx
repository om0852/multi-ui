"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Define types for Dropdown options
interface Option {
  label: string;
  value: string;
  onClick?: (value: string) => void; // Optional click handler
  disabled?: boolean; // Optional flag to disable option
}

interface DropdownProps {
  label: string;
  options: Option[]; // Array of options with custom properties
  onChange?: (value: string) => void; // Function to handle option selection
}

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  display: inline-flex;
  align-items: center;
  column-gap: 0.5rem;
  border-radius: 0.375rem;
  background: #4f46e5;
  padding: 0.625rem 0.875rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  border: none;
  outline: 1px solid #4f46e5;
  cursor: pointer;

  &:hover {
    background: #6366f1;
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 3rem;
  left: 0;
  margin-top: 0.5rem;
  width: 14rem;
  opacity: 0;
  visibility: hidden;
  transform: scaleY(0);
  transform-origin: top right;
  border-radius: 0.375rem;
  background: #ffffff;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 99;

  &.active {
    opacity: 1;
    transform: scaleY(1);
    visibility: visible;
  }
`;

const DropdownLink = styled.button<{ disabled?: boolean }>`
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  text-align: start;
  line-height: 1.25rem;
  color: ${(props) => (props.disabled ? "#d1d5db" : "#4a5568")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  text-decoration: ${(props) => (props.disabled ? "none" : "none")};

  &:hover {
    color: ${(props) => (props.disabled ? "#d1d5db" : "#111827")};
    background: ${(props) => (props.disabled ? "none" : "#f1f1f1")};
  }
`;

// ChevronIcon component with forwardRef
const ChevronIcon = styled(
  React.forwardRef<SVGSVGElement, { isopen: boolean }>((props, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  ))
)`
  width: 1rem;
  height: 1rem;
  transform: ${(props) => (props.isopen ? "rotate(-180deg)" : "rotate(0)")};
  transition: transform 0.3s ease;
`;

const Dropdown: React.FC<DropdownProps> = ({ label, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOptionClick = (option: Option) => {
    if (option.onClick) {
      option.onClick(option.value); // Call the custom onClick function if provided
    }
    if (onChange) {
      onChange(option.value); // Handle onChange
    }
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target && !target.closest('.dropdown-wrapper')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <DropdownWrapper className="dropdown-wrapper">
      <DropdownButton onClick={handleButtonClick}>
        {label}
        <ChevronIcon isopen={isOpen} />
      </DropdownButton>
      <DropdownContent className={isOpen ? "active" : ""}>
        {options.map((option, index) => (
          <DropdownLink
            key={index}
            onClick={() => !option.disabled && handleOptionClick(option)}
            disabled={option.disabled}
          >
            {option.label}
          </DropdownLink>
        ))}
      </DropdownContent>
    </DropdownWrapper>
  );
};

export default Dropdown;
