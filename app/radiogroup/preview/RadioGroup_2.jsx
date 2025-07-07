const { motion } = require('framer-motion');
const React = require('react');

const RadioGroup = ({
  options = [
    { value: "option1", label: "1" },
    { value: "option2", label: "2" },
    { value: "option3", label: "3" },
  ],
  name = "example",
  selectedValue = "option1",
  onChange = (value) => console.log("Selected:", value)
}) => {
  return (
    <div className="relative flex space-x-4">
      {options.map((option, index) => (
        <div key={option.value} className="relative">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="hidden"
          />
          <motion.div
            className={`flex items-center justify-center rounded-full w-12 h-12 cursor-pointer ${
              selectedValue === option.value
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
            }}
            onClick={() => onChange(option.value)}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-full rounded-full bg-blue-200"
              style={{
                scale: selectedValue === option.value ? 1 : 0,
              }}
              animate={{
                opacity: selectedValue === option.value ? 0.2 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            {option.label}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [selected, setSelected] = React.useState("option1");

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto mt-8">
      <h1 className="text-xl font-semibold mb-4 text-gray-800">Select a Number:</h1>
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
  { value: "option1", label: "1" },
  { value: "option2", label: "2" },
  { value: "option3", label: "3" },
];

render(<App />);
