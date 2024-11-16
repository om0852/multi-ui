import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define types for props
interface CountryOption {
  id: number;
  label: string;
  value: string;
  disabled: boolean;
}

interface SelectMenuProps {
  options: CountryOption[];
  onChange?: (selectedOption: string | null) => void;
  onSelect?: (selectedOption: string) => void;
  onClick?: (selectedOption: string) => void;
}

const Dropdown_23: React.FC<SelectMenuProps> = ({ options, onChange, onSelect, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setSearchTerm("");
    setIsOpen(false);
    if (onChange) onChange(option); // Call onChange if provided
    if (onSelect) onSelect(option); // Call onSelect if provided
  };

  const filteredCountries = options.filter((country) =>
    country.label.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full text-white font-sans">
      {/* Select Button */}
      <div
        className="flex justify-between items-center bg-gray-800 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-700"
        onClick={() => {
          toggleDropdown();
          if (onClick) onClick(selectedOption || ""); // Call onClick if provided
        }}
      >
        <span>{selectedOption || "Select a country"}</span>
        <motion.div
          animate={{ rotate: isOpen ? -180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-lg"
        >
          ▼
        </motion.div>
      </div>

      {/* Dropdown Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute w-full mt-2 bg-gray-800 rounded-lg shadow-lg z-10"
          >
            {/* Search Box */}
            <div className="flex items-center px-4 py-3 bg-gray-700 rounded-t-lg">
              <span className="text-gray-400 mr-3">🔍</span>
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent outline-none text-sm placeholder-gray-400"
              />
            </div>

            {/* Options */}
            <ul className="max-h-60 overflow-y-auto">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((country) => (
                  <li
                    key={country.id}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-600 ${
                      selectedOption === country.label ? "bg-gray-700" : ""
                    } ${country.disabled ? "text-gray-400 cursor-not-allowed" : ""}`}
                    onClick={() => !country.disabled && handleOptionClick(country.label)}
                  >
                    {country.label}
                  </li>
                ))
              ) : (
                <p className="px-4 py-3 text-sm text-gray-400">No country found</p>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown_23;
