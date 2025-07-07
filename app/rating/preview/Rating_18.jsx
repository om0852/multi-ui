const { motion } = require('framer-motion');
const React = require('react');

const LiquidRating = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
  size = 40,
  color = "#3B82F6",
}) => {
  const [rating, setRating] = React.useState(initialRating);
  const [hoveredRating, setHoveredRating] = React.useState(null);
  const [selectedColor, setSelectedColor] = React.useState(color);
  
  const colorOptions = [
    { name: "Blue", value: "#3B82F6" },
    { name: "Emerald", value: "#10B981" },
    { name: "Violet", value: "#8B5CF6" },
    { name: "Rose", value: "#F43F5E" },
    { name: "Amber", value: "#F59E0B" },
  ];

  const handleRating = (value) => {
    if (disabled) return;
    setRating(value);
    if (onRatingChange) onRatingChange(value);
  };

  const handleColorChange = (colorValue) => {
    setSelectedColor(colorValue);
  };

  // Generate bubbles with random properties
  const generateBubbles = (count) => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 2,
      left: Math.random() * 70 + 15,
      delay: Math.random() * 2,
      duration: Math.random() * 1 + 1,
      bottom: Math.random() * 20,
    }));
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Liquid Rating
      </h2>
      
      <div className="flex flex-col items-center">
        {/* Rating display */}
        <div className="relative w-full flex justify-center mb-10">
          <div className="relative">
            {/* Beaker outline */}
            <svg 
              width={size * 2.5} 
              height={size * 3} 
              viewBox={`0 0 ${size * 2.5} ${size * 3}`}
              className="drop-shadow-md"
            >
              {/* Beaker body */}
              <motion.path
                d={`
                  M ${size * 0.3} ${size * 0.2}
                  L ${size * 0.3} ${size * 2.7}
                  Q ${size * 1.25} ${size * 2.4}, ${size * 2.2} ${size * 2.7}
                  L ${size * 2.2} ${size * 0.2}
                  Z
                `}
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              
              {/* Liquid fill */}
              <motion.path
                d={`
                  M ${size * 0.3 + 2} ${size * 2.7 - 2}
                  Q ${size * 1.25} ${size * 2.4 - 2}, ${size * 2.2 - 2} ${size * 2.7 - 2}
                  L ${size * 2.2 - 2} ${size * 2.7 - 2 - (rating / max) * (size * 2.5 - 4)}
                  Q ${size * 1.25} ${size * 2.7 - (rating / max) * (size * 2.5 - 4) - 20}, ${size * 0.3 + 2} ${size * 2.7 - 2 - (rating / max) * (size * 2.5 - 4)}
                  Z
                `}
                fill={selectedColor}
                initial={{ opacity: 0.7 }}
                animate={{
                  opacity: [0.7, 0.9, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Bubbles */}
              {rating > 0 && generateBubbles(15).map((bubble) => (
                <motion.circle
                  key={bubble.id}
                  cx={`${bubble.left}%`}
                  cy={size * 2.7 - 2 - (rating / max) * (size * 2.5 - 4) - bubble.bottom}
                  r={bubble.size / 2}
                  fill="white"
                  fillOpacity="0.6"
                  initial={{ opacity: 0 }}
                  animate={{
                    cy: `${size * 0.5}`,
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: bubble.duration,
                    delay: bubble.delay,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
              
              {/* Beaker lip */}
              <path
                d={`
                  M ${size * 0.3} ${size * 0.2}
                  L ${size * 0.3 - 5} ${size * 0.1}
                  L ${size * 2.2 + 5} ${size * 0.1}
                  L ${size * 2.2} ${size * 0.2}
                `}
                fill="#E5E7EB"
                stroke="#D1D5DB"
                strokeWidth="1"
              />
              
              {/* Measurement lines */}
              {Array.from({ length: max + 1 }).map((_, i) => {
                const y = size * 2.7 - 2 - (i / max) * (size * 2.5 - 4);
                return (
                  <g key={i}>
                    <line
                      x1={size * 0.3 - 10}
                      y1={y}
                      x2={size * 0.3}
                      y2={y}
                      stroke="#9CA3AF"
                      strokeWidth="1.5"
                    />
                    <text
                      x={size * 0.3 - 15}
                      y={y + 5}
                      textAnchor="end"
                      dominantBaseline="middle"
                      className="text-xs font-medium"
                      fill="#6B7280"
                    >
                      {i}
                    </text>
                  </g>
                );
              })}
            </svg>
            
            {/* Current value display */}
            <motion.div 
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                color: selectedColor,
              }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold">{rating}</div>
              <div className="text-sm text-gray-500">out of {max}</div>
            </motion.div>
          </div>
        </div>
        
        {/* Rating buttons */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {Array.from({ length: max }, (_, index) => {
            const value = index + 1;
            const isActive = (hoveredRating || rating) >= value;
            const isFilling = hoveredRating === value && hoveredRating !== rating;
            
            return (
              <motion.button
                key={index}
                onClick={() => handleRating(value)}
                onMouseEnter={() => !disabled && setHoveredRating(value)}
                onMouseLeave={() => !disabled && setHoveredRating(null)}
                className={`
                  relative overflow-hidden rounded-lg
                  ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
                  ${isActive ? 'ring-2 ring-offset-2' : ''}
                `}
                style={{
                  width: size * 0.8,
                  height: size * 1.2,
                  backgroundColor: "#F3F4F6",
                  border: `2px solid ${isActive ? selectedColor : '#E5E7EB'}`,
                  ringColor: selectedColor,
                }}
                disabled={disabled}
              >
                {/* Liquid fill */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0"
                  style={{
                    backgroundColor: selectedColor,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                  }}
                  initial={{ height: 0 }}
                  animate={{
                    height: isActive ? "100%" : isFilling ? "50%" : "0%",
                    opacity: isActive ? 0.8 : isFilling ? 0.5 : 0.3,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                >
                  {/* Bubbles */}
                  {isActive && generateBubbles(3).map((bubble) => (
                    <motion.div
                      key={bubble.id}
                      className="absolute bg-white rounded-full"
                      style={{
                        width: bubble.size,
                        height: bubble.size,
                        left: `${bubble.left}%`,
                        bottom: `${bubble.bottom}%`,
                      }}
                      animate={{
                        y: -size * 1.5,
                        opacity: [0.8, 0],
                      }}
                      transition={{
                        duration: bubble.duration,
                        repeat: Infinity,
                        delay: bubble.delay,
                      }}
                    />
                  ))}
                </motion.div>

                {/* Glass effect */}
                <div
                  className="absolute inset-0 border-2 border-white rounded opacity-30 pointer-events-none"
                  style={{
                    borderColor: "white",
                  }}
                />

                {/* Label */}
                <span
                  className={`
                    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    font-bold z-10
                    ${isActive ? "text-white" : "text-gray-400"}
                  `}
                  style={{
                    fontSize: size * 0.3,
                    textShadow: isActive ? "0 1px 2px rgba(0,0,0,0.2)" : "none",
                  }}
                >
                  {value}
                </span>
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
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-1.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Reset Rating
          </motion.button>
        )}
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-500 mb-3 text-center">
          Liquid Color:
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {colorOptions.map((color) => (
            <motion.button
              key={color.value}
              onClick={() => handleColorChange(color.value)}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-8 h-8 rounded-full ${
                selectedColor === color.value ? 'ring-2 ring-offset-2 ring-gray-400' : ''
              }`}
              style={{ backgroundColor: color.value }}
              aria-label={color.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

render(<LiquidRating />);
