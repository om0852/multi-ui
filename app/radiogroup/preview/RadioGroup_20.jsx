const { motion } = require('framer-motion');
const React = require('react');

const RotatingRadioGroup = ({
  options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
  name = "rotatingExample",
  selectedValue = "option1",
  onChange = (value) => console.log("Selected:", value)
}) => {
  return (
    <div className="space-y-4 w-full max-w-xs mx-auto">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center space-x-4 cursor-pointer p-3 hover:bg-orange-50 rounded-lg transition-colors group"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="hidden"
          />
          <motion.div
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
              selectedValue === option.value
                ? "border-orange-500"
                : "border-gray-300 group-hover:border-orange-300"
            }`}
            initial={{ rotate: 0, scale: 0.9 }}
            animate={{
              rotate: selectedValue === option.value ? 180 : 0,
              scale: selectedValue === option.value ? 1.1 : 1,
              borderColor: selectedValue === option.value ? "#f97316" : "#d1d5db",
              backgroundColor: selectedValue === option.value ? "rgba(249, 115, 22, 0.1)" : "transparent"
            }}
            transition={{
              rotate: { duration: 0.6, type: "spring", bounce: 0.3 },
              scale: { duration: 0.2 },
              borderColor: { duration: 0.2 },
              backgroundColor: { duration: 0.2 }
            }}
          >
            {selectedValue === option.value && (
              <motion.div
                className="w-3 h-3 bg-orange-500 rounded-full"
                layoutId="radioSelected"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ 
                  scale: 1, 
                  rotate: 0,
                  transition: { delay: 0.2 }
                }}
              />
            )}
          </motion.div>
          <motion.span 
            className={`text-lg ${
              selectedValue === option.value 
                ? 'font-semibold text-orange-700' 
                : 'text-gray-700'
            }`}
            initial={{ x: 0 }}
            animate={{
              x: selectedValue === option.value ? [0, -5, 0] : 0,
              color: selectedValue === option.value ? "#c2410c" : "#374151"
            }}
            transition={{
              x: { duration: 0.3, ease: "easeOut" },
              color: { duration: 0.2 }
            }}
          >
            {option.label}
          </motion.span>
        </label>
      ))}
    </div>
  );
};

const App = () => {
  const [selected, setSelected] = React.useState("option1");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-8 text-center text-gray-800">
          Select an Option
        </h1>
        <div className="mb-8">
          <RotatingRadioGroup
            selectedValue={selected}
            onChange={setSelected}
          />
        </div>
        <div className="p-4 bg-orange-50 rounded-lg">
          <p className="text-center text-orange-800">
            Selected: <span className="font-semibold">
              {options.find(opt => opt.value === selected)?.label}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

render(<App />);
