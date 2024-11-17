import { useState } from "react";
import { motion } from "framer-motion";

interface DropdownProps {
  options: { category: string; values: string[] }[];
  label?: string;
  placeholder?: string;
  onSelect?: (selected: string) => void;
  onClick?: () => void;
  onChange?: (searchTerm: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  label = "Select an option",
  placeholder = "Search...",
  onSelect,
  onClick,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (onClick) onClick();
  };

  const handleSelection = (item: string) => {
    setSelected(item);
    setIsOpen(false);
    if (onSelect) onSelect(item);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (onChange) onChange(value);
  };

  // Filtered options based on searchTerm
  const filteredOptions = options.map((group) => ({
    ...group,
    values: group.values.filter((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="relative bg-white rounded-lg shadow-lg p-6 w-full">
      {label && <label className="block text-gray-700 mb-2">{label}</label>}

      <motion.div
        className="flex items-center justify-between cursor-pointer bg-gray-200 rounded-md p-4"
        onClick={toggleDropdown}
        whileTap={{ scale: 0.95 }}
      >
        <p className="text-gray-800">{selected || "All products"}</p>
        <motion.svg
          className={`w-4 h-4 ${isOpen ? "rotate-180" : "rotate-0"}`}
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 8"
          fill="none"
        >
          <path
            d="M12.5 6.75L7 1.25L1.5 6.75"
            stroke="#11103C"
            strokeWidth="1.375"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>

      {isOpen && (
        <motion.div
          className="absolute left-0 mt-2 w-full bg-white rounded-md shadow-md overflow-hidden z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-4">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder={placeholder}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="divide-y divide-gray-200 max-h-60 overflow-y-auto">
            {filteredOptions.map((group) => (
              <div key={group.category} className="p-4">
                <h3 className="font-semibold text-gray-600">{group.category}</h3>
                {group.values.length > 0 ? (
                  group.values.map((value) => (
                    <p
                      key={value}
                      className="p-2 hover:bg-gray-100 cursor-pointer text-gray-800"
                      onClick={() => handleSelection(value)}
                    >
                      {value}
                    </p>
                  ))
                ) : (
                  <p className="p-2 text-gray-500">No matches found</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Dropdown;
