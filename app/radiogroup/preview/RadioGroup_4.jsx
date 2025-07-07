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
    <div className="relative flex items-center w-full p-1 bg-gray-200 rounded-full">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex-1 cursor-pointer relative z-10 text-center py-4"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="hidden"
          />
          <span className={`text-lg font-medium ${
            selectedValue === option.value ? 'text-white' : 'text-gray-800'
          }`}>
            {option.label}
          </span>
        </label>
      ))}
      <motion.div
        className="absolute top-0 left-0 h-full bg-blue-500 rounded-full z-0"
        initial={false}
        animate={{
          width: `${100 / options.length}%`,
          x: `${options.findIndex((opt) => opt.value === selectedValue) * 100}%`,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      />
    </div>
  );
};

const App = () => {
  const [selected, setSelected] = React.useState("option1");

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg max-w-md mx-auto mt-8">
      <h1 className="text-xl font-semibold mb-6 text-gray-800">Choose an Option:</h1>
      <RadioGroup
        selectedValue={selected}
        onChange={setSelected}
      />
      <div className="mt-6 p-3 bg-gray-50 rounded-md">
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
