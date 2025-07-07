const { motion } = require('framer-motion');
const React = require('react');

const ConstellationRating = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
  starColor = "#FCD34D",
  lineColor = "#93C5FD",
}) => {
  const [rating, setRating] = React.useState(initialRating);
  const [hoveredRating, setHoveredRating] = React.useState(null);
  const [theme, setTheme] = React.useState({
    star: starColor,
    line: lineColor,
    name: "Default"
  });

  const themes = [
    { name: "Default", star: "#FCD34D", line: "#93C5FD" },
    { name: "Galactic", star: "#A78BFA", line: "#C4B5FD" },
    { name: "Sunset", star: "#F59E0B", line: "#F87171" },
    { name: "Ocean", star: "#22D3EE", line: "#67E8F9" },
    { name: "Emerald", star: "#34D399", line: "#6EE7B7" },
  ];

  const handleRating = (value) => {
    if (disabled) return;
    setRating(value);
    if (onRatingChange) onRatingChange(value);
  };

  const starPositions = Array.from({ length: max }, (_, i) => ({
    x: 40 + (i * 60),
    y: 50 + (Math.sin(i * 1.5) * 20),
    id: i + 1,
  }));

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  // Generate random sparkle positions
  const generateSparkles = (count, centerX, centerY) => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: centerX + (Math.random() * 40 - 20),
      y: centerY + (Math.random() * 40 - 20),
      size: Math.random() * 1.5 + 0.5,
      delay: Math.random() * 2,
      duration: Math.random() * 1 + 0.5,
    }));
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-8 text-center">
        Constellation Rating
      </h2>
      
      <div className="relative w-full h-48 flex items-center justify-center mb-8">
        {/* Night sky background */}
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 2 + 1,
                height: Math.random() * 2 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8 + 0.2,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
        
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 340 120" 
          className={disabled ? "opacity-50" : ""}
        >
          {/* Connection lines */}
          {starPositions.map((pos, index) => {
            if (index === 0) return null;
            const prevPos = starPositions[index - 1];
            const isActive = (hoveredRating || rating) >= pos.id;

            return (
              <motion.line
                key={`line-${index}`}
                x1={prevPos.x}
                y1={prevPos.y}
                x2={pos.x}
                y2={pos.y}
                stroke={theme.line}
                strokeWidth={2}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: isActive ? 1 : 0,
                  opacity: isActive ? 1 : 0,
                  strokeDasharray: isActive ? 'none' : '5,5',
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
              />
            );
          })}

          {/* Stars */}
          {starPositions.map((pos) => {
            const isActive = (hoveredRating || rating) >= pos.id;
            const sparkles = isActive ? generateSparkles(8, pos.x, pos.y) : [];
            
            return (
              <g key={`star-${pos.id}`}>
                {/* Glow effect */}
                {isActive && (
                  <motion.circle
                    cx={pos.x}
                    cy={pos.y}
                    r={15}
                    fill={theme.star}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ 
                      opacity: [0.1, 0.3, 0.1],
                      scale: [0.8, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}

                {/* Sparkles */}
                {sparkles.map((sparkle) => (
                  <motion.circle
                    key={sparkle.id}
                    cx={sparkle.x}
                    cy={sparkle.y}
                    r={sparkle.size}
                    fill={theme.star}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 0.8, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: sparkle.duration,
                      delay: sparkle.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                {/* Star */}
                <motion.g
                  transform={`translate(${pos.x - 12}, ${pos.y - 12})`}
                  whileHover={!disabled ? { scale: 1.3 } : {}}
                  onClick={() => handleRating(pos.id)}
                  onMouseEnter={() => !disabled && setHoveredRating(pos.id)}
                  onMouseLeave={() => !disabled && setHoveredRating(null)}
                  className={disabled ? "cursor-not-allowed" : "cursor-pointer"}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: isActive ? [0.9, 1.1, 1] : 0.8,
                    rotate: isActive ? [0, 15, -5, 0] : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: pos.id * 0.1,
                  }}
                >
                  <path
                    d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"
                    fill={isActive ? theme.star : "#4B5563"}
                    stroke={isActive ? theme.star : "#6B7280"}
                    strokeWidth={1.5}
                    className="transition-colors duration-300"
                  />
                  
                  {/* Star shine */}
                  {isActive && (
                    <path
                      d="M12 4l1.2 3.6H18l-3 2.4 1.2 3.6L12 11.2l-3 2.4 1.2-3.6-3-2.4h4.8z"
                      fill="white"
                      fillOpacity="0.3"
                    />
                  )}
                </motion.g>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Rating display */}
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          color: rating > 0 ? theme.star : '#9CA3AF',
        }}
        transition={{ delay: 0.3 }}
      >
        <div className="text-4xl font-bold mb-1">
          {rating > 0 ? rating : '—'}
          <span className="text-xl text-gray-400"> / {max}</span>
        </div>
        <div className="text-sm font-medium text-gray-400">
          {rating > 0 
            ? `You rated this ${rating} out of ${max}`
            : 'Select a rating'}
        </div>
      </motion.div>
      
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
            className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors flex items-center gap-1.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Clear Rating
          </motion.button>
        </div>
      )}
      
      <div className="mt-8 pt-6 border-t border-gray-700">
        <h3 className="text-sm font-medium text-gray-400 mb-3 text-center">
          Constellation Theme:
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {themes.map((t) => (
            <motion.button
              key={t.name}
              onClick={() => handleThemeChange(t)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                theme.name === t.name
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
              style={{
                backgroundColor: theme.name === t.name ? t.star : 'transparent',
                border: `1px solid ${theme.name === t.name ? 'transparent' : '#374151'}`,
              }}
            >
              {t.name}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

render(<ConstellationRating />);
