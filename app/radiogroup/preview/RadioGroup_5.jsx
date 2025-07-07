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
    <div className="flex space-x-4 justify-center">
      {options.map((option) => (
        <label
          key={option.value}
          className="relative cursor-pointer group"
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
            className={`flex items-center justify-center w-24 h-12 rounded-lg text-white font-semibold transition-all duration-300 ${
              selectedValue === option.value
                ? "bg-gradient-to-r from-purple-500 to-blue-500"
                : "bg-gray-300"
            }`}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px rgba(99, 102, 241, 0.5)",
            }}
            transition={{ duration: 0.3 }}
          >
            {option.label}
          </motion.div>
          {selectedValue === option.value && (
            <motion.div
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 opacity-50 -z-10"
              initial={{ scale: 1 }}
              animate={{
                scale: 1.2,
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 1.5,
              }}
            />
          )}
        </label>
      ))}
    </div>
  );
};

const App = () => {
  const [selected, setSelected] = React.useState("option1");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-8 bg-white rounded-2xl shadow-xl max-w-md w-full">
        <h1 className="text-2xl font-bold mb-8 text-center text-gray-800">
          Choose an Option:
        </h1>
        <div className="mb-8">
          <RadioGroup
            selectedValue={selected}
            onChange={setSelected}
          />
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-700">
            Selected: <span className="font-semibold text-indigo-600">
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
