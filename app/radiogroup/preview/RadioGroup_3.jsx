const { motion } = require('framer-motion');
const React = require('react');

const RadioGroup = ({
  options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
  ],
  name = "example",
  selectedValue = "option1",
  onChange = (value) => console.log("Selected:", value)
}) => {
  return (
    <div className="relative w-full border rounded-lg shadow-md bg-gray-100 overflow-hidden">
      <div className="flex">
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
              selectedValue === option.value ? 'text-blue-600' : 'text-gray-700'
            }`}>
              {option.label}
            </span>
          </label>
        ))}
      </div>
      <motion.div
        className="absolute bottom-0 h-1 bg-blue-500"
        layoutId="underline"
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
  { value: "option4", label: "Option 4" },
];

render(<App />);
