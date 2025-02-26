import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

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
  onSelect?: (selectedValue: string) => void;
  onChange?: (selectedValue: string) => void;
  onClick?: (option: DropdownOption) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = "Select an option",
  value,
  onSelect,
  onChange,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(value);
  const containerRef = useRef<HTMLDivElement>(null);
  const [totalHeight, setTotalHeight] = useState(0);

  // Calculate the total height of dropdown items for animation
  useEffect(() => {
    if (containerRef.current) {
      const links = containerRef.current.querySelectorAll("a");
      const heights = Array.from(links).map((link) => {
        const computedStyles = window.getComputedStyle(link);
        const margin =
          parseFloat(computedStyles.marginTop) + parseFloat(computedStyles.marginBottom);
        return link.getBoundingClientRect().height + margin;
      });
      setTotalHeight(heights.reduce((acc, height) => acc + height, 0));
    }
  }, [options]);

  const handleOptionClick = (option: DropdownOption) => {
    if (option.disabled) return; // Ignore clicks on disabled options
    setSelectedOption(option.value);
    setIsOpen(false);

    // Trigger callbacks
    if (onSelect) onSelect(option.value);
    if (onChange) onChange(option.value);
    if (onClick) onClick(option);
  };

  return (
    <motion.div
      className="relative w-full bg-gray-800 rounded-lg p-2"
      ref={containerRef}
    >
      {/* Dropdown Button */}
      <button
        className="w-full text-left px-4 py-2 bg-gray-700 text-white rounded-md shadow-inner focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption
          ? options.find((opt) => opt.value === selectedOption)?.label || placeholder
          : placeholder}
      </button>

      {/* Dropdown Menu */}
      <motion.div
        className="overflow-hidden flex flex-col"
        initial={{ height: 0 }}
        animate={{ height: isOpen ? totalHeight : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {options.map((option) => (
          <a
            key={option.id}
            href="#"
            role="button"
            tabIndex={0}
            className={`block px-4 py-2 text-gray-400 focus:outline-none ${
              option.disabled
                ? "cursor-not-allowed text-gray-500"
                : "hover:text-blue-500 cursor-pointer"
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleOptionClick(option);
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: options.indexOf(option) * 0.05,
                duration: 0.2,
              }}
            >
              {option.label}
            </motion.span>
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Dropdown;
