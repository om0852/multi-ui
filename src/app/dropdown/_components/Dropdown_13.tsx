import { useState } from "react";

interface DropdownOption {
  category: string;
  options: string[];
}

interface DropdownProps {
  options: DropdownOption[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [openCategoryIndex, setOpenCategoryIndex] = useState<number | null>(null);

  const handleToggleDropdown = (index: number) => {
    if (openCategoryIndex === index) {
      setOpenCategoryIndex(null); // Close if clicked again
    } else {
      setOpenCategoryIndex(index); // Open the clicked category
    }
  };

  return (
    <div className="space-y-4">
      {options.map((option, index) => (
        <div key={index}>
          {/* Category Label */}
          <div
            className="flex justify-between items-center text-white cursor-pointer bg-gradient-to-b from-rose-700 to-rose-800  hover:bg-black/60 p-3 rounded-xl border border-rose-300/50 transition-all"
            onClick={() => handleToggleDropdown(index)}
          >
            <span>{option.category}</span>
            <img
              src="https://img.icons8.com/?size=100&id=5434&format=png&color=000000"
              alt="expand"
              className={`transition-transform duration-300 w-6 h-6 ${openCategoryIndex === index ? "rotate-180" : ""}`}
            />
          </div>

          {/* Dropdown Menu */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              openCategoryIndex === index ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-b from-rose-700/50 to-rose-600 p-4 rounded-xl mt-2 border border-rose-400/50 space-y-2">
              {option.options.map((opt, idx) => (
                <button
                  key={idx}
                  className="w-full text-left text-white hover:bg-teal-600 py-2 rounded-md transition-all"
                  onClick={() => alert(`You selected: ${opt}`)} // Handle option click
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
