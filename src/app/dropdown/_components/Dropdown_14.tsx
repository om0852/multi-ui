import React, { useState, useEffect } from 'react';

type Option = {
  id: string;
  value: string;
  label: string;
  disabled?: boolean;
  separator?: boolean;
};

type DropdownMenuProps = {
  options: Option[];
  onSelect?: (value: string) => void;
  onClick?: (value: string) => void;
  onChange?: (value: string) => void;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options, onSelect, onClick, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(options[0]?.value || '');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById('dropdown-menu');
      const button = document.getElementById('dropdown-btn');
      if (menu && button && !menu.contains(event.target as Node) && !button.contains(event.target as Node)) {
        closeMenu();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect?.(option); // Trigger onSelect if provided
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleSelect = (value: string) => {
    // Handle option selection, if needed
    console.log('Selected option:', value);
  };

  const handleClick = (value: string) => {
    // Handle the click event for an option
    console.log('Option clicked:', value);
    onClick?.(value); // Trigger onClick if provided
  };

  const handleChange = (value: string) => {
    // Handle the change event for an option
    console.log('Option changed:', value);
    onChange?.(value); // Trigger onChange if provided
  };

  return (
    <div id="dropdown-menu" className="relative inline-block text-left w-full">
      <button
        id="dropdown-btn"
        className="inline-flex justify-between items-center px-4 py-2 w-full bg-gray-800 text-white rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onClick={toggleMenu}
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-haspopup="true"
      >
        {options.find(option => option.value === selectedOption)?.label}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-full bg-white shadow-lg rounded-md z-10 opacity-100 transition-all ease-in-out duration-300"
          style={{
            transform: isOpen ? 'scaleY(1)' : 'scaleY(0)',
            transformOrigin: 'top',
            left: '0',
            maxWidth: '100%',
          }}
        >
          <div className="py-1 w-full" role="none">
            {options.map((option, index) => {
              // Skip rendering a separator at the end
              if (option.separator && index < options.length - 1) {
                return <div key="separator" className="border-t my-1" />;
              }

              return (
                <button
                  key={option.id}
                  className={`my-2 px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-indigo-500 hover:text-white rounded-md ${
                    option.value === selectedOption ? 'bg-indigo-500 text-white' : ''
                  } ${option.disabled ? 'bg-gray-400 cursor-not-allowed' : ''}`}
                  onClick={() => {
                    if (!option.disabled) {
                      selectOption(option.value);
                      handleClick(option.value);
                    }
                  }}
                  onChange={() => handleChange(option.value)} // onChange
                  disabled={option.disabled}
                >
                  {option.value === selectedOption && (
                    <img
                      src="https://img.icons8.com/?size=100&id=98955&format=png&color=000000"
                      alt="icon"
                      className="w-5 h-5 mr-2 inline-block"
                    />
                  )}
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
