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
  // Define initial colors and selected colors
  const initialColors = ["bg-purple-300", "bg-teal-300", "bg-yellow-300"];
  const selectedColors = ["bg-purple-500", "bg-teal-500", "bg-yellow-500"];

  return (
    <div className="space-y-4 w-full max-w-xs mx-auto">
      {options.map((option, index) => (
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
            className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${selectedValue === option.value ? selectedColors[index] : initialColors[index]}`}
            whileHover={{ scale: 1.1 }}
            animate={{
              backgroundColor: selectedValue === option.value
                ? selectedColors[index]
                : initialColors[index]
            }}
            transition={{ duration: 0.3 }}
          >
            {selectedValue === option.value && (
              <motion.div
                className="w-5 h-5 bg-white rounded-full"
                layoutId="innerCircle"
              />
            )}
          </motion.div>
          <span className={`text-lg ${selectedValue === option.value ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-8 text-center text-gray-800">
          Select an Option:
        </h1>
        <div className="mb-8">
          <RadioGroup
            selectedValue={selected}
            onChange={setSelected}
          />
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-center text-gray-700">
            Selected: <span className="font-semibold text-purple-600">
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
