import { useState } from "react";
import { motion } from "framer-motion";

interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

interface DropdownMenuProps {
  options: Option[];
  onSelect?: (selected: Option) => void;
  onChange?: (selected: Option) => void;
  onClick?: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  options,
  onSelect,
  onChange,
  onClick,
}) => {
  const [selected, setSelected] = useState<Option | null>(options[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (option: Option) => {
    if (option.disabled) return; // Prevent selection if option is disabled
    setSelected(option);
    if (onSelect) onSelect(option);
    if (onChange) onChange(option);
    setIsOpen(false); // Close the menu when an option is selected
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (onClick) onClick();
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="relative">
        {/* Selected Item */}
        <motion.div
          className="flex items-center justify-between bg-gray-600 text-gray-200 px-6 py-3 rounded-xl cursor-pointer border-4 border-gray-700 hover:bg-gray-700 w-80"
          onMouseEnter={() => setIsOpen(true)} // Open on hover
          onMouseLeave={() => setIsOpen(false)} // Close on hover out
          onClick={handleToggle} // Toggle dropdown when clicked
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-lg">{selected ? selected.label : "Select Option"}</span>
          <motion.img
            src="https://img.icons8.com/?size=100&id=2760&format=png&color=000000"
            alt="dropdown icon"
            className="w-5 h-5"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Options List */}
        <motion.ul
          className={`absolute top-full left-0 mt-1 w-80 bg-gray-800 text-gray-200 rounded-b-xl overflow-hidden transform ${
            isOpen ? "scale-y-100 p-5" : "scale-y-0 p-0"
          } transition-all duration-300`}
          onMouseEnter={() => setIsOpen(true)} // Keep open when hovering over the dropdown
          onMouseLeave={() => setIsOpen(false)} // Close on hover out
        >
          {options.map((option) => (
            <motion.li
              key={option.value}
              className={`cursor-pointer text-center py-3 px-5 rounded-lg transition-colors duration-200 hover:bg-gray-700 ${
                option === selected ? "bg-gray-600 text-green-500" : ""
              } ${option.disabled ? "text-gray-500 cursor-not-allowed" : ""}`}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
