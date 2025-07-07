const { motion, useAnimation } = require('framer-motion');
const React = require('react');

const CircularRating = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
  size = 200,
  strokeWidth = 20,
  activeColor = "#3B82F6",
  inactiveColor = "#E5E7EB",
}) => {
  const [rating, setRating] = React.useState(initialRating);
  const [hoveredRating, setHoveredRating] = React.useState(null);
  const [pulse, setPulse] = React.useState(false);
  const controls = useAnimation();
  
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const currentRating = hoveredRating || rating;
  const percentage = (currentRating / max) * 100;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const colorOptions = [
    { color: "#3B82F6", name: "Blue" },
    { color: "#10B981", name: "Emerald" },
    { color: "#8B5CF6", name: "Purple" },
    { color: "#EC4899", name: "Pink" },
    { color: "#F59E0B", name: "Amber" },
  ];

  const handleRating = (value) => {
    if (disabled) return;
    setRating(value);
    setPulse(true);
    if (onRatingChange) onRatingChange(value);
    
    // Trigger pulse animation
    controls.start({
      scale: [1, 1.1, 1],
      transition: { duration: 0.5, type: 'spring', bounce: 0.5 }
    });
    
    setTimeout(() => setPulse(false), 500);
  };

  const handleColorChange = (color) => {
    activeColor = color;
    // Force re-render
    setRating(rating => rating);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Circular Rating
      </h2>
      
      <div className="flex flex-col items-center">
        <div className="relative mb-8">
          {/* Background circle */}
          <svg width={size} height={size} className={`${disabled ? 'opacity-50' : ''}`}>
            {/* Inactive circle */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={inactiveColor}
              strokeWidth={strokeWidth}
              className="opacity-30"
            />
            
            {/* Active progress */}
            <motion.circle
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={activeColor}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ 
                strokeDashoffset,
                opacity: [0.8, 1, 0.8],
              }}
              transition={{ 
                strokeDashoffset: { type: "spring", stiffness: 100, damping: 20 },
                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              transform={`rotate(-90 ${center} ${center})`}
              strokeLinecap="round"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))',
              }}
            />
            
            {/* Glow effect */}
            {pulse && (
              <motion.circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke={activeColor}
                strokeWidth={strokeWidth * 1.5}
                strokeDasharray={circumference}
                initial={{ 
                  strokeDashoffset: circumference,
                  opacity: 0.8
                }}
                animate={{ 
                  strokeDashoffset: circumference * 0.9,
                  opacity: 0,
                  scale: 1.1
                }}
                transition={{ 
                  duration: 1,
                  ease: "easeOut"
                }}
                transform={`rotate(-90 ${center} ${center})`}
                strokeLinecap="round"
              />
            )}
          </svg>

          {/* Rating display */}
          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center"
            animate={controls}
          >
            <motion.span 
              className="text-5xl font-bold"
              style={{ color: activeColor }}
              animate={{
                scale: [1, 1.2, 1],
                textShadow: [`0 0 0 ${activeColor}`, `0 0 20px ${activeColor}`, `0 0 0 ${activeColor}`],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {currentRating || 0}
            </motion.span>
            <span className="text-sm text-gray-500 mt-1">out of {max}</span>
            
            {rating > 0 && (
              <motion.div 
                className="mt-2 text-xs text-gray-400"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {(() => {
                  const ratings = [
                    "Poor", "Fair", "Good", "Very Good", "Excellent"
                  ];
                  return ratings[Math.min(Math.max(0, currentRating - 1), ratings.length - 1)];
                })()}
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Interactive buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Array.from({ length: max }, (_, index) => {
            const value = index + 1;
            const isActive = value <= currentRating;
            
            return (
              <motion.button
                key={index}
                onClick={() => handleRating(value)}
                onMouseEnter={() => !disabled && setHoveredRating(value)}
                onMouseLeave={() => !disabled && setHoveredRating(null)}
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  boxShadow: `0 5px 15px ${activeColor}33`
                }}
                whileTap={{ 
                  scale: 0.9,
                  boxShadow: `0 2px 5px ${activeColor}33`
                }}
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  text-sm font-medium transition-all duration-200
                  ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
                `}
                style={{
                  backgroundColor: isActive ? activeColor : "#F3F4F6",
                  color: isActive ? "white" : "#6B7280",
                  border: `2px solid ${isActive ? activeColor : "#E5E7EB"}`,
                }}
                disabled={disabled}
              >
                {value}
              </motion.button>
            );
          })}
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
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            Clear Rating
          </motion.button>
        )}
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-500 mb-3 text-center">
          Choose a color theme:
        </h3>
        <div className="flex justify-center gap-2">
          {colorOptions.map((item) => (
            <motion.button
              key={item.color}
              onClick={() => handleColorChange(item.color)}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeColor === item.color 
                  ? 'text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              style={{
                backgroundColor: activeColor === item.color ? item.color : 'transparent',
                border: `1px solid ${activeColor === item.color ? 'transparent' : '#E5E7EB'}`
              }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

render(<CircularRating />);
