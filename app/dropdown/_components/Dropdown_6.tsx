import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Option {
  label: string;
  value: string;
  disabled?: boolean;
  onClick?: (value: string) => void;
}

interface DropdownProps {
  label: string;
  options: Option[];
  onChange: (value: string) => void;
}

const Dropdown_6: React.FC<DropdownProps> = ({ label, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [searchText, setSearchText] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: Option) => {
    if (!option.disabled) {
      onChange(option.value);
      if (option.onClick) {
        option.onClick(option.value);
      }
      handleOptionChange(option.value);
    }
  };

  const handleOptionChange = (value: string) => {
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((option) => option !== value)
        : [...prev, value]
    );
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const clearSearch = () => setSearchText("");

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedText =
    selectedOptions.length > 3
      ? `${selectedOptions.length} selected`
      : selectedOptions.join(", ") || label;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="btn bg-blue-400 text-white px-4 py-2 text-left flex items-center w-60"
      >
        {selectedText}
        <motion.span className="ml-auto" animate={{ rotate: isOpen ? 180 : 0 }}>
          ▼
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 mt-2 w-60 bg-white border border-gray-300 rounded-md shadow-lg"
          >
            <div className="p-2 border-b">
              <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={handleSearchChange}
                className="w-full px-3 py-2 border rounded-md pr-10"
              />
              <button onClick={clearSearch} className="absolute grid place-items-center right-4 top-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 30 30"
                >
                  <path d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z"></path>
                </svg>
              </button>
            </div>

            <div className="max-h-48 overflow-y-auto p-2">
              {filteredOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleOptionClick(option)}
                  disabled={option.disabled}
                  className={`flex items-center justify-between w-full px-2 py-1 mb-1 text-left ${
                    option.disabled
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-black"
                  } ${
                    selectedOptions.includes(option.value) ? "bg-blue-100" : ""
                  }`}
                >
                  <span>{option.label}</span>
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option.value)}
                    readOnly
                    className="ml-2"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown_6;
