import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Option {
  icon: string; // URL for the icon
  label: string; // Display label for the item
  id: string | number; // Unique identifier
  value: string; // Value associated with the item
  disabled?: boolean; // Whether the item is disabled
}

interface DropdownProps {
  options: Option[]; // Array of dropdown options
  placeholder?: string; // Placeholder when no item is selected
  value?: string; // Value for the controlled selected item
  onSelect?: (selected: Option) => void; // Callback on selecting an option
  onClick?: () => void; // Callback on button click
  onChange?: (isOpen: boolean) => void; // Callback when dropdown open/close state changes
}

const Dropdown_25: React.FC<DropdownProps> = ({
  options,
  placeholder = "Select an option", // Default placeholder
  value,
  onSelect,
  onClick,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Option | null>(null);

  // Update selectedItem if the value prop changes
  useEffect(() => {
    if (value) {
      const matchedOption = options.find((option) => option.value === value);
      setSelectedItem(matchedOption || null);
    }
  }, [value, options]);

  const toggleDropdown = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (onChange) onChange(newState); // Notify open/close state change
  };

  const handleSelect = (item: Option) => {
    if (item.disabled) return; // Prevent selection of disabled items
    setSelectedItem(item);
    setIsOpen(false);
    if (onSelect) onSelect(item); // Notify selection
  };

  const handleButtonClick = () => {
    if (onClick) onClick(); // Notify button click
    toggleDropdown();
  };

  return (
    <div className="w-full mx-auto ">
      {/* Dropdown button */}
      <button
        onClick={handleButtonClick}
        className="flex items-center justify-between w-full px-4 py-2 text-white bg-gray-800 border rounded-lg"
      >
        <div className="flex items-center">
          {selectedItem ? (
            <>
              <img
                src={selectedItem.icon}
                alt={selectedItem.label}
                className="w-4 h-4 mr-2"
              />
              <span>{selectedItem.label}</span>
            </>
          ) : (
            <span className="text-gray-400">{placeholder}</span>
          )}
        </div>
        <motion.img
          src="https://img.icons8.com/?size=100&id=2760&format=png&color=ffffff"
          alt="dropdown icon"
          className="w-5 h-5"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </button>

      {/* Dropdown list */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 bg-gray-800 border rounded-lg"
          >
            {options.map((option) => (
              <motion.li
                key={option.id}
                onClick={() => handleSelect(option)}
                className={`flex items-center px-4 py-2 text-white cursor-pointer ${
                  option.disabled
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-700"
                }`}
                whileHover={!option.disabled ? { scale: 1.05 } : {}}
              >
                <span className="mr-2">
                  <img
                    src={option.icon}
                    alt={option.label}
                    className="w-4 h-4"
                  />
                </span>
                {option.label}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown_25;
