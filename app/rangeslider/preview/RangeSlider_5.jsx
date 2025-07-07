const { motion } = require('framer-motion');
const React = require('react');

const RangeSlider = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
}) => {
  const [value, setValue] = React.useState(defaultValue);
  const [isDragging, setIsDragging] = React.useState(false);

  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };

  const calculatePosition = () => ((value - min) / (max - min)) * 100;
  const position = calculatePosition();

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Modern Range Slider</h2>
      
      <div className="flex flex-col items-center w-full">
        {/* Slider Wrapper */}
        <div className="relative w-full h-10 flex items-center">
          {/* Slider Track */}
          <div className="absolute top-1/2 w-full h-2.5 bg-gray-100 rounded-full transform -translate-y-1/2"></div>
          
          {/* Slider Progress */}
          <motion.div
            className="absolute top-1/2 h-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transform -translate-y-1/2"
            initial={{ width: `${position}%` }}
            animate={{ width: `${position}%` }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          ></motion.div>
          
          {/* Slider Thumb */}
          <motion.div
            className="absolute top-1/2 w-7 h-7 bg-white rounded-full shadow-xl transform -translate-y-1/2 cursor-pointer flex items-center justify-center z-10"
            style={{
              left: `${position}%`,
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
            }}
            animate={{
              scale: isDragging ? 1.2 : 1,
              boxShadow: isDragging 
                ? '0 0 0 10px rgba(99, 102, 241, 0.2)' 
                : '0 2px 10px rgba(0, 0, 0, 0.2)'
            }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-3.5 h-3.5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full"></div>
          </motion.div>
          
          {/* Hidden Range Input */}
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleChange}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-20"
          />
        </div>

        {/* Value Display */}
        <motion.div 
          className="mt-10 relative"
          animate={{
            y: isDragging ? [0, -5, 0] : 0,
          }}
          transition={{ 
            y: { 
              repeat: isDragging ? Infinity : 0, 
              duration: 1.2, 
              ease: "easeInOut" 
            }
          }}
        >
          <motion.span
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl shadow-lg min-w-[100px] text-center text-xl"
            animate={{
              scale: isDragging ? [1, 1.05, 1] : 1,
              boxShadow: isDragging 
                ? [
                    '0 10px 20px rgba(99, 102, 241, 0.3)',
                    '0 15px 30px rgba(99, 102, 241, 0.4)',
                    '0 10px 20px rgba(99, 102, 241, 0.3)'
                  ]
                : '0 4px 15px rgba(99, 102, 241, 0.3)'
            }}
            transition={{
              scale: { duration: 1.2, repeat: isDragging ? Infinity : 0 },
              boxShadow: { duration: 1.2, repeat: isDragging ? Infinity : 0 }
            }}
          >
            {value}
          </motion.span>
          <div className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-blue-500"></div>
        </motion.div>
        
        {/* Min/Max Labels */}
        <div className="w-full flex justify-between mt-8 px-2">
          <span className="text-sm font-medium text-gray-500">{min}</span>
          <span className="text-sm font-medium text-gray-500">{max}</span>
        </div>
      </div>
    </div>
  );
};

render(<RangeSlider />);
