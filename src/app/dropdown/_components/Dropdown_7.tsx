import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

type Option = {
  id: string;
  value: string;
  label: string;
  disabled?: boolean;
  onClick?: (value: string) => void;
};

type CustomDropdownProps = {
  label: string;
  placeholder: string;
  options: Option[];
  onSelect: (value: string) => void;
  onChange?: (value: string) => void;
};

export const CustomDropdown = ({
  label,
  placeholder,
  options,
  onSelect,
  onChange,
}: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleOptionClick = (option: Option) => {
    if (option.disabled) return;
    setSelectedOption(option.label);
    onSelect(option.value);
    option.onClick?.(option.value);
    onChange?.(option.value);
    setIsOpen(false);
  };

  const clearSelection = () => {
    setSelectedOption(null);
    onSelect("");
    onChange?.("");
  };

  // Click outside to close dropdown
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-48">
      <label className="block text-sm mb-1">{label}</label>
      <div
        className="relative flex items-center border rounded px-3 py-2 cursor-pointer bg-gray-800 text-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <input
          type="text"
          placeholder={placeholder}
          readOnly
          value={selectedOption || ""}
          className="bg-transparent focus:outline-none w-full cursor-pointer"
        />
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            clearSelection();
          }}
          className={`text-lg absolute right-3 ${
            selectedOption ? "block" : "hidden"
          }`}
        >
          &times;
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          exit={{ opacity: 0, scaleY: 0 }}
          className="absolute mt-2 left-0 w-full bg-gray-800 border rounded-md shadow-lg z-10"
        >
          {options.map((option) => (
            <label
              key={option.id}
              className={`block px-4 py-2 text-sm cursor-pointer ${
                option.disabled ? "cursor-not-allowed text-gray-500" : "text-gray-200"
              } ${!option.disabled && "hover:bg-gray-700"}`}
              onClick={() => handleOptionClick(option)}
            >
              <input
                type="radio"
                name={label}
                value={option.value}
                checked={selectedOption === option.label}
                onChange={() => handleOptionClick(option)}
                className="hidden"
                disabled={option.disabled}
              />
              {option.label}
            </label>
          ))}
        </motion.div>
      )}
    </div>
  );
};

// Usage Example
<CustomDropdown
  label="Example Dropdown"
  placeholder="Select an option"
  options={[
    { id: "1", label: "Option 1", value: "option1", onClick: (value) => alert(value) },
    { id: "2", label: "Option 2", value: "option2", disabled: true },
    { id: "3", label: "Option 3", value: "option3" },
  ]}
  onSelect={(value) => console.log("Selected:", value)}
  onChange={(value) => console.log("Changed:", value)}
/>;
