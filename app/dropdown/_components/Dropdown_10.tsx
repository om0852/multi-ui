import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type DropdownOption = 
  | { value: string; label: string; onSelect?: () => void; separator?: never }
  | { separator: true; label?: never; value?: never; onSelect?: never };

interface DropdownProps {
  options: DropdownOption[];
  placeholder?: string;
  onChange?: (value: string) => void;
}

const DROPDOWN_ANIMATION = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0, opacity: 0 },
};

const Dropdown_10: React.FC<DropdownProps> = ({
  options,
  placeholder = "Select an option",
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleOptionClick = (option: DropdownOption) => {
    if ("onSelect" in option && option.onSelect) {
      option.onSelect();
    }
    if ("value" in option && onChange && typeof option.value === 'string') {
      onChange(option.value);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        id="dropdown-btn"
        onClick={toggleDropdown}
        className="bg-white flex items-center justify-between hover:bg-white/90 transition-colors px-4 py-2 text-black rounded-md shadow font-medium w-60"
      >
        {placeholder}
        <svg
          viewBox="0 0 320 512"
          width="13"
          className="ml-2"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="dropdown"
            {...DROPDOWN_ANIMATION}
            transition={{ duration: 0.2 }}
            className="absolute origin-top-left mt-2 left-0 bg-gray-50 w-60 text-sm font-medium border border-gray-200 rounded-md shadow-md"
          >
            {options.map((option, index) =>
              option.separator ? (
                <div key={index} className="h-[1px] bg-slate-300 w-full" />
              ) : (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="w-full py-1.5 px-3 transition-colors hover:bg-gray-100 rounded-md text-left"
                >
                  {option.label}
                </button>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown_10;
