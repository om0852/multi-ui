import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownItem {
  label: string;
  subItems?: DropdownItem[];
}

interface SelectProps {
  options: DropdownItem[];
  placeholder: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_9: React.FC<SelectProps> = ({
  options,
  placeholder,
  onSelect,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(placeholder);
  const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({});
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
    onSelect?.(value); // Trigger onSelect callback
    onChange?.(value); // Trigger onChange callback
  };

  const toggleSubMenu = (key: string) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
      setOpenSubMenus({}); // Close all submenus
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const renderOptions = (items: DropdownItem[], parentKey: string = "") => (
    <ul className="space-y-1">
      {items.map((item, index) => {
        const currentKey = `${parentKey}-${index}`;
        const isSubMenuOpen = openSubMenus[currentKey];

        return (
          <li key={currentKey} className="relative group">
            <div
              onClick={() =>
                item.subItems ? toggleSubMenu(currentKey) : handleSelect(item.label)
              }
              className={`p-3 cursor-pointer flex justify-between items-center ${
                selectedOption === item.label ? "bg-blue-100" : ""
              } hover:bg-gray-100`}
            >
              {item.label}
              {item.subItems && (
                <span
                  className={`ml-2 transition-transform ${
                    isSubMenuOpen ? "rotate-90" : "rotate-0"
                  }`}
                >
                  ▶
                </span>
              )}
            </div>
            {item.subItems && isSubMenuOpen && (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-full top-0 z-10 w-48 bg-white border rounded-lg shadow-lg"
                >
                  {renderOptions(item.subItems, currentKey)}
                </motion.div>
              </AnimatePresence>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div
      ref={selectRef}
      className="relative w-72 mx-auto mt-10 text-base font-medium"
    >
      <div
        className={`p-4 border rounded-lg cursor-pointer ${
          isOpen ? "border-blue-400" : "border-gray-300"
        }`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedOption}
        <span
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg"
          >
            {renderOptions(options)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown_9;
