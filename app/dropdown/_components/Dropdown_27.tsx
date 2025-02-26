import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownItem {
  category: string;
  items: string[];
}

interface SearchDropdownProps {
  options: DropdownItem[];
  placeholder?: string;
  value?: string;
  onSelect?: (selectedItem: string) => void;
  onChange?: (searchText: string) => void;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({
  options,
  placeholder = "Search...",
  value = "",
  onSelect,
  onChange,
}) => {
  const [searchText, setSearchText] = useState<string>(value);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".dropdown")) {
        setIsDropdownVisible(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  useEffect(() => {
    // Update internal search text if value changes from props
    setSearchText(value);
  }, [value]);

  const filteredData = options.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.toLowerCase().includes(searchText.toLowerCase())
    ),
  })).filter(
    (category) =>
      category.category.toLowerCase().includes(searchText.toLowerCase()) ||
      category.items.length > 0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setSearchText(newText);
    setIsDropdownVisible(true);
    if (onChange) {
      onChange(newText);
    }
  };

  const handleItemClick = (item: string) => {
    setSearchText(item);
    setIsDropdownVisible(false);
    if (onSelect) {
      onSelect(item);
    }
  };

  return (
    <div className="relative w-full mx-auto dropdown">
      {/* Input Box */}
      <input
        type="text"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
        value={searchText}
        onChange={handleInputChange}
        onFocus={() => setIsDropdownVisible(true)}
      />

      {/* SearchDropdown List */}
      <AnimatePresence>
        {isDropdownVisible && (
          <motion.div
            className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-2 max-h-60 overflow-y-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {filteredData.map((category) => (
              <div key={category.category}>
                {/* Category Header */}
                <div
                  className="px-4 py-2 bg-gray-100 font-semibold cursor-pointer"
                  onClick={() =>
                    setActiveCategory(
                      activeCategory === category.category ? null : category.category
                    )
                  }
                >
                  {category.category}
                </div>

                {/* Category Items */}
                <AnimatePresence>
                  {activeCategory === category.category && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-4"
                    >
                      {category.items.map((item) => (
                        <div
                          key={item}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                          onClick={() => handleItemClick(item)}
                        >
                          {item}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {filteredData.length === 0 && (
              <div className="px-4 py-2 text-gray-500">No results found</div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchDropdown;
