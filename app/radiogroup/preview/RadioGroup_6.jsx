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
    <div className="space-y-4 w-full max-w-xs mx-auto">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center space-x-4 cursor-pointer p-3 hover:bg-gray-50 rounded-lg transition-colors"
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
            className="w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0"
            initial={false}
            animate={{
              borderColor:
                selectedValue === option.value ? "#3b82f6" : "#d1d5db",
              boxShadow:
                selectedValue === option.value
                  ? "0px 0px 8px rgba(59, 130, 246, 0.6)"
                  : "none",
            }}
            transition={{ duration: 0.3 }}
          >
            {selectedValue === option.value && (
              <motion.div
                className="w-5 h-5 bg-blue-500 rounded-full"
                layoutId="selectedRadio"
              />
            )}
          </motion.div>
          <span className="text-gray-800 text-lg">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

const App = () => {
  const [selected, setSelected] = React.useState("option1");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-8 text-center text-gray-800">
          Select an Option:
        </h1>
        <div className="mb-8">
          <RadioGroup
            selectedValue={selected}
            onChange={setSelected}
          />
        </div>
        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="text-center text-blue-800">
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
