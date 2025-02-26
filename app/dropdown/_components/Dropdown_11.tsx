import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Option {
  id: string;
  value: string;
  label: string;
  disabled?: boolean;
}

interface DropdownProps {
  options: Option[];
  placeholder?: string;
  onSelect?: (selected: Option[]) => void;
}

const Dropdown_11: React.FC<DropdownProps> = ({
  options,
  placeholder = "Select options...",
  onSelect,
}) => {
  const [selected, setSelected] = useState<Option[]>([]);
  const [search, setSearch] = useState<string>("");
  const [dropdownOptions, setDropdownOptions] = useState<Option[]>(options);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    // Filter options based on search
    setDropdownOptions(
      options.filter((option) =>
        option.label.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, options]);

  useEffect(() => {
    // Trigger onSelect callback whenever the selected options change
    if (onSelect) {
      onSelect(selected);
    }
  }, [selected, onSelect]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleTagRemove = (id: string) => {
    setSelected((prev) => prev.filter((tag) => tag.id !== id));
  };

  const handleOptionSelect = (option: Option) => {
    if (option.disabled) return;

    if (selected.find((tag) => tag.id === option.id)) {
      setSelected((prev) => prev.filter((tag) => tag.id !== option.id));
    } else {
      setSelected((prev) => [...prev, option]);
    }
  };

  const handleSelectAll = () => {
    if (selected.length === options.length) {
      setSelected([]);
    } else {
      setSelected(options.filter((option) => !option.disabled));
    }
  };

  return (
    <div className="relative max-w-full w-full">
      {/* Input Container */}
      <div
        onClick={toggleDropdown}
        className={`flex items-center border-2 ${
          isOpen ? "border-purple-600 shadow-md" : "border-gray-300"
        } rounded-md px-4 py-2 cursor-pointer`}
      >
        <div className="flex flex-wrap gap-2">
          {selected.length > 0 ? (
            selected.map((tag) => (
              <div
                key={tag.id}
                className="flex items-center bg-gray-200 px-3 py-1 rounded text-sm"
              >
                <span className="mr-2">{tag.label}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTagRemove(tag.id);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
            ))
          ) : (
            <span className="text-gray-400">{placeholder}</span>
          )}
        </div>
        <div className="ml-auto text-gray-500">{isOpen ? "▲" : "▼"}</div>
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute bg-white border-2 border-gray-300 mt-2 w-full rounded-md shadow-lg z-10"
          >
            {/* Search Bar */}
            <div className="p-3">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Select All Option */}
            <div
              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={handleSelectAll}
            >
              <span
                className={`w-4 h-4 border-2 rounded mr-2 ${
                  selected.length === options.length
                    ? "bg-purple-500 border-purple-500"
                    : "border-gray-300"
                }`}
              />
              <span>{selected.length === options.length ? "Deselect All" : "Select All"}</span>
            </div>

            {/* Options */}
            <ul className="max-h-40 overflow-y-auto">
              {dropdownOptions.map((option) => (
                <li
                  key={option.id}
                  className={`flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                    option.disabled ? "text-gray-400 cursor-not-allowed" : ""
                  }`}
                  onClick={() => handleOptionSelect(option)}
                >
                  <span
                    className={`w-4 h-4 border-2 rounded mr-2 ${
                      selected.find((tag) => tag.id === option.id)
                        ? "bg-purple-500 border-purple-500"
                        : "border-gray-300"
                    }`}
                  />
                  <span>{option.label}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown_11;
