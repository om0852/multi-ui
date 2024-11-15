import { motion } from "framer-motion";

interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

interface DropdownMenuProps {
  options: Option[];
  onSelect?: (option: Option) => void;
  onChange?: (option: Option) => void;
  onClick?: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  options,
  onSelect,
  onChange,
  onClick,
}) => {
  const handleOptionClick = (option: Option) => {
    if (option.disabled) return; // Prevent selection if option is disabled
    if (onSelect) onSelect(option);
    if (onChange) onChange(option);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <ul className="relative flex gap-2 items-center justify-start">
        {/* Menu item */}
        <motion.li
          className="group relative flex items-center justify-start"
          whileHover={{ scale: 1.05 }}
        >
          <a
            href="#"
            className="border-2 border-[#c1121f] rounded-xl px-6 py-3 bg-transparent text-[#c1121f] group-hover:border-[#fdf0d5] group-hover:text-[#fdf0d5]"
            onClick={onClick}
          >
            Service
          </a>

          {/* Submenu */}
          <motion.ul
            className="absolute top-full left-[-2rem] bg-[#fdf0d5] rounded-lg p-2 hidden group-hover:block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {options.map((option) => (
              <motion.li whileHover={{ scale: 1.05 }} key={option.value}>
                <a
                  href="#"
                  onClick={() => handleOptionClick(option)}
                  className={`flex justify-between items-center py-4 px-6 rounded-lg min-w-[15rem] hover:bg-[#003049] hover:text-[#fdf0d5] ${
                    option.disabled ? "text-gray-400 cursor-not-allowed" : ""
                  }`}
                >
                  {option.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
