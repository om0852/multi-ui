const { motion } = require('framer-motion');
const React = require('react');

const WaveRating = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
  waveColor = "#6366F1",
}) => {
  const [rating, setRating] = React.useState(initialRating);
  const [hoveredRating, setHoveredRating] = React.useState(null);
  const [selectedColor, setSelectedColor] = React.useState(waveColor);

  const colorOptions = [
    { color: "#6366F1", name: "Indigo" },
    { color: "#10B981", name: "Emerald" },
    { color: "#3B82F6", name: "Blue" },
    { color: "#EC4899", name: "Pink" },
    { color: "#F59E0B", name: "Amber" },
  ];

  const handleRating = (value) => {
    if (disabled) return;
    setRating(value);
    if (onRatingChange) onRatingChange(value);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Wave Rating
      </h2>
      
      <div className="relative flex items-end justify-center h-48 mb-10">
        {Array.from({ length: max }, (_, index) => {
          const value = index + 1;
          const isActive = (hoveredRating || rating) >= value;
          const delay = index * 0.1;
          
          // Create multiple bubbles with random properties
          const bubbles = Array.from({ length: 3 }).map((_, i) => ({
            id: i,
            size: Math.random() * 3 + 1,
            left: Math.random() * 20 + 5,
            delay: Math.random() * 0.5,
            duration: Math.random() * 1 + 0.5,
          }));

          return (
            <motion.button
              key={index}
              onClick={() => handleRating(value)}
              onMouseEnter={() => !disabled && setHoveredRating(value)}
              onMouseLeave={() => !disabled && setHoveredRating(null)}
              className={`
                w-12 mx-1 relative focus:outline-none
                ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
              `}
              disabled={disabled}
            >
              {/* Wave container */}
              <motion.div
                className="absolute bottom-0 w-full rounded-t-lg overflow-hidden"
                initial={{ height: "10%" }}
                animate={{
                  height: isActive ? "100%" : "10%",
                  backgroundColor: isActive 
                    ? selectedColor 
                    : `${selectedColor}20`, // 20% opacity when inactive
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: disabled ? 0 : delay * 0.3,
                  },
                }}
              >
                {/* Animated bubbles */}
                {isActive && bubbles.map((bubble) => (
                  <motion.div
                    key={bubble.id}
                    className="absolute rounded-full bg-white"
                    initial={{ 
                      y: 40, 
                      x: bubble.left,
                      opacity: 0.6,
                      width: `${bubble.size}px`,
                      height: `${bubble.size}px`,
                    }}
                    animate={{
                      y: -60,
                      opacity: 0,
                    }}
                    transition={{
                      duration: bubble.duration,
                      repeat: Infinity,
                      delay: bubble.delay,
                      ease: "linear",
                    }}
                  />
                ))}
                
                {/* Subtle wave effect */}
                {isActive && (
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-full bg-white opacity-10"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </motion.div>

              {/* Rating number */}
              <motion.div 
                className="absolute -top-8 left-0 right-0 text-center font-bold"
                animate={{
                  color: isActive ? selectedColor : '#9CA3AF',
                  scale: isActive ? 1.2 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                {value}
              </motion.div>
            </motion.button>
          );
        })}
      </div>
      
      <div className="text-center mb-6">
        <p className="text-gray-600 font-medium">
          {rating > 0 
            ? `You rated this ${rating} out of ${max}`
            : 'Select a rating'}
        </p>
      </div>
      
      {!disabled && rating > 0 && (
        <div className="flex justify-center">
          <motion.button
            onClick={() => {
              setRating(0);
              setHoveredRating(null);
              if (onRatingChange) onRatingChange(0);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Clear Rating
          </motion.button>
        </div>
      )}
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-500 mb-3 text-center">
          Wave Color:
        </h3>
        <div className="flex justify-center gap-2">
          {colorOptions.map((item) => (
            <motion.button
              key={item.color}
              onClick={() => handleColorChange(item.color)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`w-8 h-8 rounded-full focus:outline-none ${
                selectedColor === item.color ? 'ring-2 ring-offset-2 ring-gray-400' : ''
              }`}
              style={{ backgroundColor: item.color }}
              aria-label={`${item.name} color`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

render(<WaveRating />);
