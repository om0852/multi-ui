const { motion } = require('framer-motion');
const React = require('react');

const DotRating = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
  activeColor = "#8B5CF6",
  inactiveColor = "#E5E7EB",
}) => {
  const [rating, setRating] = React.useState(initialRating);
  const [hoveredRating, setHoveredRating] = React.useState(null);
  const [activeDot, setActiveDot] = React.useState(null);
  const [pulse, setPulse] = React.useState(false);

  const colorOptions = [
    { active: "#8B5CF6", inactive: "#EDE9FE", name: "Purple" },
    { active: "#3B82F6", inactive: "#DBEAFE", name: "Blue" },
    { active: "#10B981", inactive: "#D1FAE5", name: "Green" },
    { active: "#F59E0B", inactive: "#FEF3C7", name: "Amber" },
    { active: "#EC4899", inactive: "#FCE7F3", name: "Pink" },
  ];

  const [colors, setColors] = React.useState({
    active: activeColor,
    inactive: inactiveColor
  });

  const handleRating = (value) => {
    if (disabled) return;
    setRating(value);
    setActiveDot(value);
    setPulse(true);
    setTimeout(() => setPulse(false), 500);
    if (onRatingChange) onRatingChange(value);
  };

  const handleColorChange = (color) => {
    setColors({
      active: color.active,
      inactive: color.inactive
    });
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Dot Rating
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Hover and click on the dots to rate
      </p>
      
      <div className="flex items-center justify-center space-x-6 mb-10">
        {Array.from({ length: max }, (_, index) => {
          const value = index + 1;
          const isActive = (hoveredRating || rating) >= value;
          const delay = index * 0.1;
          const scale = pulse && activeDot === value ? [1, 1.5, 1] : 1;

          return (
            <motion.button
              key={index}
              onClick={() => handleRating(value)}
              onMouseEnter={() => !disabled && setHoveredRating(value)}
              onMouseLeave={() => !disabled && setHoveredRating(null)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              className={`
                w-6 h-6 rounded-full focus:outline-none relative flex items-center justify-center
                ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
              `}
              disabled={disabled}
            >
              {/* Background dot */}
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={false}
                animate={{
                  backgroundColor: isActive ? colors.active : colors.inactive,
                  scale: scale,
                }}
                transition={{ 
                  duration: 0.3,
                  backgroundColor: { duration: 0.2 },
                  scale: { duration: 0.5, type: 'spring', bounce: 0.5 }
                }}
              />
              
              {/* Ripple effect */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  initial={{ scale: 0.8, opacity: 0.6 }}
                  animate={{
                    scale: 2,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: delay * 0.2
                  }}
                  style={{ backgroundColor: colors.active }}
                />
              )}
              
              {/* Inner dot */}
              <motion.div
                className="absolute inset-1 rounded-full bg-white"
                initial={false}
                animate={{
                  scale: isActive ? 0 : 1,
                  opacity: isActive ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
              
              {/* Label */}
              <motion.span 
                className="absolute -bottom-6 text-xs font-medium text-gray-500"
                initial={{ opacity: 0, y: 5 }}
                animate={{ 
                  opacity: isActive ? 1 : 0.3,
                  y: isActive ? 0 : 5,
                  color: isActive ? colors.active : '#6B7280'
                }}
                transition={{ duration: 0.2 }}
              >
                {value}
              </motion.span>
            </motion.button>
          );
        })}
      </div>
      
      <div className="text-center">
        <div className="inline-block px-4 py-2 bg-gray-50 rounded-lg mb-6">
          <p className="text-gray-700 font-medium">
            {rating > 0 
              ? `You rated this ${rating} out of ${max}`
              : 'No rating selected'}
          </p>
        </div>
        
        {!disabled && rating > 0 && (
          <motion.button
            onClick={() => {
              setRating(0);
              setHoveredRating(null);
              setActiveDot(null);
              if (onRatingChange) onRatingChange(0);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            Clear Rating
          </motion.button>
        )}
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-500 mb-3 text-center">
          Choose a color scheme:
        </h3>
        <div className="flex justify-center space-x-2">
          {colorOptions.map((color) => (
            <motion.button
              key={color.name}
              onClick={() => handleColorChange(color)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                colors.active === color.active 
                  ? 'text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              style={{
                backgroundColor: colors.active === color.active ? color.active : 'transparent',
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

render(<DotRating />);
