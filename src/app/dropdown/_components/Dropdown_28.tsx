import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownOption {
  id: number;
  label: string;
  value: string;
  disabled?: boolean;
}

interface DropdownProps {
  options: DropdownOption[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string | undefined) => void;
  onSelect?: (option: DropdownOption) => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = "Select an option",
  value,
  onChange,
  onSelect,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option: DropdownOption) => {
    if (option.disabled) return;

    setSelectedValue(option.value);
    setIsOpen(false);
    if (onChange) onChange(option.value);
    if (onSelect) onSelect(option);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".dropdown-trigger") && !target.closest(".dropdown-menu")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (index: number) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: index * 0.2, duration: 0.5 },
    }),
    exit: { scale: 0, opacity: 0 },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.3 },
    }),
    exit: { opacity: 0, y: 10 },
  };

  return (
    <div className="main" onClick={onClick}>
      {/* Dropdown Trigger */}
      <div
        className="dropdown-trigger flex items-center justify-between gap-2 px-4 py-2 bg-blue-200 rounded-md cursor-pointer"
        onClick={handleToggle}
      >
        <span>{selectedValue ? options.find((opt) => opt.value === selectedValue)?.label : placeholder}</span>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}
          width="16"
          height="16"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </motion.svg>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="dropdown-menu mt-2 w-full bg-white border rounded-md shadow-lg z-10 flex overflow-hidden"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Left Panel with Animated Circles */}
            <div className="dropdown__left-panel w-16 bg-yellow-400 flex flex-col items-center justify-center relative">
              {[...Array(3)].map((_, index) => (
                <motion.div
                  key={index}
                  className={`circle bg-${index === 0 ? "red-400" : index === 1 ? "pink-300" : "white"} ${
                    index === 2 ? "w-4 h-4" : index === 1 ? "w-16 h-16" : "w-6 h-6"
                  } absolute rounded-full`}
                  style={{
                    top: index === 0 ? "10%" : index === 1 ? "40%" : "80%",
                    right: index === 0 ? "10%" : index === 2 ? "20%" : undefined,
                    left: index === 1 ? "-15%" : undefined,
                  }}
                  variants={circleVariants}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                />
              ))}
            </div>

            {/* Dropdown Items */}
            <div className="dropdown__right-panel flex-grow p-4">
              {options.map((option, index) => (
                <motion.div
                  key={option.id}
                  className={`dropdown__item flex items-center px-4 py-2 rounded-md ${
                    option.disabled
                      ? "text-gray-400 cursor-not-allowed"
                      : "cursor-pointer hover:bg-gray-100"
                  }`}
                  onClick={() => handleOptionClick(option)}
                  variants={itemVariants}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <span>{option.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
