const { motion } = require('framer-motion');
const React = require('react');

const NumberRating = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
  backgroundColor = "#4F46E5",
  textColor = "#FFFFFF",
}) => {
  const [rating, setRating] = React.useState(initialRating);
  const [hoveredRating, setHoveredRating] = React.useState(null);
  const [selectedColor, setSelectedColor] = React.useState(backgroundColor);

  const colorOptions = [
    { bg: "#4F46E5", text: "#FFFFFF", name: "Indigo" },
    { bg: "#10B981", text: "#FFFFFF", name: "Emerald" },
    { bg: "#F59E0B", text: "#1F2937", name: "Amber" },
    { bg: "#EC4899", text: "#FFFFFF", name: "Pink" },
    { bg: "#8B5CF6", text: "#FFFFFF", name: "Purple" },
  ];

  const handleRating = (value) => {
    if (disabled) return;
    setRating(value);
    if (onRatingChange) onRatingChange(value);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color.bg);
  };

  const currentColor = colorOptions.find(c => c.bg === selectedColor) || colorOptions[0];

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Number Rating
      </h2>
      
      <div className="flex justify-center space-x-2 mb-8">
        {colorOptions.map((color, index) => (
          <motion.button
            key={color.name}
            onClick={() => handleColorChange(color)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`w-8 h-8 rounded-full focus:outline-none ${
              selectedColor === color.bg ? 'ring-2 ring-offset-2 ring-gray-400' : ''
            }`}
            style={{ backgroundColor: color.bg }}
            aria-label={`Select ${color.name} color`}
          />
        ))}
      </div>
      
      <div className="flex items-center justify-center space-x-2 mb-8">
        {Array.from({ length: max }, (_, index) => {
          const value = index + 1;
          const isActive = (hoveredRating || rating) >= value;
          const delay = index * 0.05;

          return (
            <motion.button
              key={index}
              onClick={() => handleRating(value)}
              onMouseEnter={() => !disabled && setHoveredRating(value)}
              onMouseLeave={() => !disabled && setHoveredRating(null)}
              whileHover={{ 
                scale: 1.1,
                rotateX: 360,
                transition: { duration: 0.5 }
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                backgroundColor: isActive ? selectedColor : "#ffffff",
                color: isActive ? textColor : selectedColor,
                transition: { 
                  delay: delay,
                  duration: 0.3,
                  backgroundColor: { duration: 0.2 },
                  color: { duration: 0.2 }
                }
              }}
              className={`w-12 h-12 rounded-full flex items-center justify-center
                font-bold text-lg border-2 transition-all duration-200
                ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
              `}
              style={{
                borderColor: selectedColor,
              }}
              disabled={disabled}
            >
              {value}
            </motion.button>
          );
        })}
      </div>
      
      <div className="text-center">
        <div className="inline-block px-4 py-2 bg-gray-100 rounded-full">
          <p className="text-gray-700 font-medium">
            {rating > 0 
              ? `You rated this ${rating} out of ${max}`
              : 'Please select a rating'}
          </p>
        </div>
        
        {!disabled && rating > 0 && (
          <motion.button
            onClick={() => {
              setRating(0);
              setHoveredRating(null);
              if (onRatingChange) onRatingChange(0);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Clear Rating
          </motion.button>
        )}
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-500 mb-3 text-center">
          Try different colors:
        </h3>
        <div className="flex justify-center space-x-4">
          {colorOptions.map((color) => (
            <motion.button
              key={color.name}
              onClick={() => handleColorChange(color)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedColor === color.bg 
                  ? 'text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              style={{
                backgroundColor: selectedColor === color.bg ? color.bg : 'transparent',
              }}
            >
              {color.name}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

render(<NumberRating />);
