"use client"

import MaskedInput from "./_components/InputMask_29";

// Usage Example for Time Mask
const App: React.FC = () => {
  const handleInputChange = (value: string) => {
    console.log("Masked Input Value:", value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <MaskedInput
        label="Enter Time (HH:MM AM/PM)"
        placeholder="HH:MM AM/PM"
        onChange={handleInputChange}
        className="transition-transform duration-500 hover:rotate-1 hover:scale-105"
      />
    </div>
  );
};

export default App;
