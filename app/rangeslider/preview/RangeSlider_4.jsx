const { motion } = require('framer-motion');
const React = require('react');

const RangeSlider = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
}) => {
  const [value, setValue] = React.useState(defaultValue);

  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };

  const calculatePosition = () => ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Animated Range Slider</h2>
      
      <div className="flex flex-col items-center w-full">
        {/* Slider Wrapper */}
        <div className="relative w-full h-3">
          {/* Slider Track */}
          <div className="absolute top-1/2 w-full h-1.5 bg-gray-200 rounded-full transform -translate-y-1/2"></div>
          
          {/* Slider Progress */}
          <motion.div
            className="absolute top-1/2 h-1.5 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full transform -translate-y-1/2"
            style={{
              width: `${calculatePosition()}%`,
            }}
            transition={{ duration: 0.2 }}
          ></motion.div>
          
          {/* Slider Thumb */}
          <motion.div
            className="absolute top-1/2 w-6 h-6 bg-white rounded-full shadow-xl transform -translate-y-1/2 cursor-pointer border-2 border-teal-500 flex items-center justify-center"
            style={{
              left: `${calculatePosition()}%`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                '0 2px 5px rgba(0,0,0,0.1)',
                '0 5px 15px rgba(13, 148, 136, 0.3)',
                '0 2px 5px rgba(0,0,0,0.1)'
              ]
            }}
            transition={{ 
              scale: { repeat: Infinity, duration: 1.5 },
              boxShadow: { repeat: Infinity, duration: 1.5 }
            }}
          >
            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
          </motion.div>
          
          {/* Hidden Range Input */}
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleChange}
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>

        {/* Value Display with Cone Effect */}
        <div className="relative mt-8">
          <motion.div 
            className="relative"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{ 
              y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
            }}
          >
            <motion.span
              className="inline-block px-5 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-sm font-bold rounded-lg shadow-lg min-w-[60px] text-center"
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  '0 4px 6px rgba(0,0,0,0.1)',
                  '0 10px 20px rgba(13, 148, 136, 0.3)',
                  '0 4px 6px rgba(0,0,0,0.1)'
                ]
              }}
              transition={{ 
                scale: { repeat: Infinity, duration: 1.5 },
                boxShadow: { repeat: Infinity, duration: 1.5 }
              }}
            >
              {value}
            </motion.span>
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-teal-500"></div>
          </motion.div>
        </div>
        
        {/* Min/Max Labels */}
        <div className="w-full flex justify-between mt-2 px-1">
          <span className="text-xs text-gray-500">{min}</span>
          <span className="text-xs text-gray-500">{max}</span>
        </div>
      </div>
    </div>
  );
};

render(<RangeSlider />);
