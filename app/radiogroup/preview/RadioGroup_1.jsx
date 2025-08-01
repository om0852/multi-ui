const { motion } = require('framer-motion');
const React = require('react');

const RadioGroup = ({
  options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
  name = "example",
  selectedValue = "option1",
  onChange = (value) => console.log("Selected:", value)
}) => {
  return (
    <div className="space-y-2">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center space-x-3 cursor-pointer"
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
            className={`w-5 h-5 rounded-full border-2 ${
              selectedValue === option.value
                ? "border-blue-500"
                : "border-gray-400"
            } flex items-center justify-center`}
            initial={{ scale: 0.9 }}
            animate={{
              scale: selectedValue === option.value ? 1.2 : 1,
              borderColor:
                selectedValue === option.value ? "#3b82f6" : "#d1d5db",
            }}
            transition={{ duration: 0.2 }}
          >
            {selectedValue === option.value && (
              <motion.div
                className="w-2.5 h-2.5 bg-blue-500 rounded-full"
                layoutId="radioSelected"
              />
            )}
          </motion.div>
          <span className="text-gray-800">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

const App = () => {
  const [selected, setSelected] = React.useState("option1");

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto mt-8">
      <h1 className="text-xl font-semibold mb-4 text-gray-800">Select an Option:</h1>
      <RadioGroup
        selectedValue={selected}
        onChange={setSelected}
      />
      <div className="mt-4 p-3 bg-gray-100 rounded-md">
        <p className="text-sm text-gray-700">
          Selected: <span className="font-medium">
            {options.find(opt => opt.value === selected)?.label}
          </span>
        </p>
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
