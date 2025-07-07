const { motion } = require('framer-motion');
const React = require('react');

const ColorChangeRadioGroup = ({
  options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
  name = "colorChangeExample",
  selectedValue = "option1",
  onChange = (value) => console.log("Selected:", value)
}) => {
  return (
    <div className="space-y-4 w-full max-w-xs mx-auto">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center space-x-4 cursor-pointer p-3 hover:bg-pink-50 rounded-lg transition-colors group"
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
                ? "border-pink-500"
                : "border-gray-300 group-hover:border-pink-300"
            }`}
            initial={{ scale: 0.9 }}
            animate={{
              scale: selectedValue === option.value ? 1.1 : 1,
              borderColor: selectedValue === option.value ? "#ec4899" : "#d1d5db",
              backgroundColor: selectedValue === option.value ? "#ec4899" : "transparent",
            }}
            transition={{ 
              duration: 0.3,
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
          >
            {selectedValue === option.value && (
              <motion.div
                className="w-3 h-3 bg-white rounded-full"
                layoutId="radioSelected"
                initial={{ scale: 0 }}
                animate={{ 
                  scale: 1,
                  transition: { delay: 0.1 }
                }}
              />
            )}
          </motion.div>
          <span className={`text-lg ${
            selectedValue === option.value 
              ? 'font-semibold text-pink-700' 
              : 'text-gray-700'
          }`}>
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
};

const App = () => {
  const [selected, setSelected] = React.useState("option1");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-rose-50 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-8 text-center text-gray-800">
          Select an Option
        </h1>
        <div className="mb-8">
          <ColorChangeRadioGroup
            selectedValue={selected}
            onChange={setSelected}
          />
        </div>
        <div className="p-4 bg-pink-50 rounded-lg">
          <p className="text-center text-pink-800">
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
