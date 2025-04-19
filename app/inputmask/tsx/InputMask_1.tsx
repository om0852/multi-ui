import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface MaskedInputProps {
  label?: string;
  placeholder?: string;
  mask: string;
  onChange?: (value: string) => void;
  className?: string;
}

const MaskedInput: React.FC<MaskedInputProps> = ({
  label = "Enter your input",
  placeholder = "Enter value",
  mask,
  onChange,
  className = "",
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = applyMask(e.target.value);
    setInputValue(value);
    if (onChange) onChange(value);
  };

  const applyMask = (value: string): string => {
    let maskedValue = "";
    let maskIndex = 0;
    let valueIndex = 0;

    while (maskIndex < mask.length && valueIndex < value.length) {
      if (mask[maskIndex] === '9') {
        if (/[0-9]/.test(value[valueIndex])) {
          maskedValue += value[valueIndex];
          valueIndex++;
        }
        maskIndex++;
      } else {
        maskedValue += mask[maskIndex];
        maskIndex++;
        if (value[valueIndex] === mask[maskIndex - 1]) {
          valueIndex++;
        }
      }
    }

    return maskedValue;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`flex flex-col items-start w-full max-w-md mx-auto p-4 ${className}`}
    >
      {label && <label className="mb-2 text-gray-700 font-medium">{label}</label>}
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inputValue ? 1 : 0 }}
        className="mt-2 text-sm text-gray-500"
      >
        {inputValue && `You entered: ${inputValue}`}
      </motion.div>
    </motion.div>
  );
};

export default MaskedInput;

// Usage Example
// const App: React.FC = () => {
//   const handleInputChange = (value: string) => {
//     console.log("Masked Input Value:", value);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <MaskedInput
//         label="Phone Number"
//         mask="(999) 999-9999"
//         placeholder="(123) 456-7890"
//         onChange={handleInputChange}
//       />
//     </div>
//   );
// };

// export default App;
