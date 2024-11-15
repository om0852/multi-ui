import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Option {
  label: string;
  value: string;
  disabled?: boolean;  // Optional disabled field
}

interface CustomSelectMenuProps {
  options: Option[];
  onSelect?: (selected: Option) => void;
  onChange?: (selected: Option) => void;
  onClick?: () => void;
}

const CustomSelectMenu: React.FC<CustomSelectMenuProps> = ({
  options,
  onSelect,
  onChange,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (onClick) onClick();
  };

  const handleSelect = (option: Option) => {
    if (option.disabled) return; // Prevent selection if option is disabled
    setSelectedOption(option);
    if (onSelect) onSelect(option);
    if (onChange) onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      {/* Select box */}
      <div
        className="bg-gray-800 text-white p-4 rounded-lg flex items-center justify-between cursor-pointer"
        onClick={toggleMenu}
      >
        <span>{selectedOption ? selectedOption.label : "Select Option"}</span>
        <motion.img
          src="https://img.icons8.com/?size=100&id=2760&format=png&color=ffffff"
          alt="dropdown icon"
          className="w-5 h-5"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Options list */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="absolute mt-2 w-full bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {options.map((option) => (
              <li
                key={option.value}
                className={`p-3 text-gray-800 hover:bg-blue-100 cursor-pointer ${
                  selectedOption?.value === option.value ? "bg-blue-50 font-semibold" : ""
                } ${
                  option.disabled
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : ""
                }`}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomSelectMenu;
