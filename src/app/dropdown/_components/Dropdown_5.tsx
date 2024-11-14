import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  const dropdownButtonRef = useRef<HTMLButtonElement | null>(null);
  const dropdownMenuRef = useRef<HTMLDivElement | null>(null);

  const options = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
  ];

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setSelectAllChecked(isChecked);
    setSelectedOptions(isChecked ? options : []);
  };

  const handleOptionChange = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const updateDropdownText = () => {
    if (selectedOptions.length > 3) {
      return `${selectedOptions.length} selected`;
    } else if (selectedOptions.length > 0) {
      return selectedOptions.join(", ");
    } else {
      return "Select options";
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownButtonRef.current &&
        !dropdownButtonRef.current.contains(event.target as Node) &&
        dropdownMenuRef.current &&
        !dropdownMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        ref={dropdownButtonRef}
        onClick={toggleDropdown}
        className="btn btn-primary text-left px-4 py-2 w-48 flex justify-between items-center bg-gray-200 rounded-md"
      >
        {updateDropdownText()}
        <motion.div
          className="ml-2"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </button>

      {/* Dropdown Menu */}
      <motion.div
        ref={dropdownMenuRef}
        className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-48 max-h-64 overflow-auto z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="p-2">
          {/* Select All Checkbox */}
          <label className="block p-2">
            <input
              type="checkbox"
              checked={selectAllChecked}
              onChange={handleSelectAllChange}
              className="mr-2"
            />
            Select All
          </label>

          {/* Options List */}
          <div>
            {options.map((option) => (
              <label key={option} className="block p-2">
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleOptionChange(option)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dropdown;
