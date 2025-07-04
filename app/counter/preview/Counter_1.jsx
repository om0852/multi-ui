
const Counter = ({
  initialValue = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prev) => Math.min(prev + step, max));
  };

  const decrement = () => {
    setCount((prev) => Math.max(prev - step, min));
  };

  return (
    <div className={`bg-gradient-to-br from-violet-500 to-fuchsia-500 p-8 rounded-2xl ${className}`}>
      <div className="flex flex-col items-center space-y-6">
        <motion.div
          className="text-6xl font-bold text-white"
          key={count}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {count}
        </motion.div>
        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white/10 rounded-lg text-white font-semibold backdrop-blur-sm
                     hover:bg-white/20 transition-colors duration-200"
            onClick={decrement}
          >
            -
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white/10 rounded-lg text-white font-semibold backdrop-blur-sm
                     hover:bg-white/20 transition-colors duration-200"
            onClick={increment}
          >
            +
          </motion.button>
        </div>
      </div>
    </div>
  );
};

render(<Counter />);
