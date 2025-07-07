const { motion } = require('framer-motion');
const React = require('react');

const KeyboardRating = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
  keyColor = "#1F2937",
  textColor = "#FFFFFF",
}) => {
  const [rating, setRating] = React.useState(initialRating);
  const [hoveredRating, setHoveredRating] = React.useState(null);
  const [pressedKey, setPressedKey] = React.useState(null);
  const [showHint, setShowHint] = React.useState(true);
  
  const colorPresets = [
    { bg: "#1F2937", text: "#FFFFFF", name: "Dark" },
    { bg: "#3B82F6", text: "#FFFFFF", name: "Blue" },
    { bg: "#10B981", text: "#FFFFFF", name: "Green" },
    { bg: "#8B5CF6", text: "#FFFFFF", name: "Purple" },
    { bg: "#EC4899", text: "#FFFFFF", name: "Pink" },
  ];
  
  const [colors, setColors] = React.useState({
    bg: keyColor,
    text: textColor
  });

  const handleRating = (value) => {
    if (disabled) return;
    setRating(value);
    setPressedKey(value);
    setShowHint(false);
    setTimeout(() => setPressedKey(null), 200);
    if (onRatingChange) onRatingChange(value);
  };

  // Handle keyboard input
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (disabled) return;
      const num = parseInt(e.key);
      if (num >= 1 && num <= max) {
        handleRating(num);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [max, disabled]);

  const handleColorChange = (color) => {
    setColors(color);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Keyboard Rating
      </h2>
      
      <div className="flex flex-col items-center space-y-8">
        {/* Keyboard keys */}
        <div className="flex items-center justify-center gap-3 mb-6">
          {Array.from({ length: max }, (_, index) => {
            const value = index + 1;
            const isActive = (hoveredRating || rating) >= value;
            const isPressed = pressedKey === value;
            const isHovered = hoveredRating === value;

            return (
              <motion.button
                key={index}
                onClick={() => handleRating(value)}
                onMouseEnter={() => !disabled && setHoveredRating(value)}
                onMouseLeave={() => !disabled && setHoveredRating(null)}
                whileHover={!disabled ? { 
                  scale: 1.1, 
                  y: -5,
                  rotate: isHovered ? [0, -5, 5, 0] : 0,
                } : {}}
                whileTap={!disabled ? { scale: 0.9, y: 5 } : {}}
                animate={{
                  y: isPressed ? 8 : isHovered ? -5 : 0,
                  rotate: isPressed ? [0, 5, -5, 0] : 0,
                  scale: isPressed ? 0.9 : isHovered ? 1.1 : 1,
                  backgroundColor: isActive ? colors.bg : "#F3F4F6",
                  color: isActive ? colors.text : "#6B7280",
                  borderColor: isActive ? colors.bg : "#E5E7EB",
                  boxShadow: isPressed 
                    ? `0 2px 0 ${colors.bg}80` 
                    : isHovered 
                      ? `0 8px 0 ${colors.bg}80` 
                      : `0 4px 0 ${isActive ? colors.bg + 'CC' : '#D1D5DB'}`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 20,
                  backgroundColor: { duration: 0.2 },
                }}
                className={`
                  w-14 h-14 rounded-lg flex items-center justify-center
                  font-mono text-xl font-bold border-2
                  ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
                `}
                disabled={disabled}
              >
                {value}
                {isHovered && !disabled && (
                  <motion.span 
                    className="absolute -top-8 text-xs font-normal px-2 py-1 bg-gray-800 text-white rounded"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Press {value}
                  </motion.span>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Keyboard hint */}
        <motion.div
          className="text-sm text-gray-500 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: showHint ? 1 : 0.5,
            y: showHint ? 0 : -5,
          }}
          transition={{ duration: 0.3 }}
        >
          {showHint ? (
            <span>Press <span className="font-mono bg-gray-100 px-2 py-1 rounded">1-{max}</span> on your keyboard</span>
          ) : (
            <span>Or click the keys above</span>
          )}
        </motion.div>

        {/* Rating display */}
        <motion.div 
          className="text-2xl font-bold text-center mt-4"
          animate={{
            scale: pressedKey ? [1, 1.2, 1] : 1,
            color: colors.bg,
          }}
          transition={{ 
            duration: 0.3,
            scale: { type: 'spring', stiffness: 500, damping: 15 }
          }}
        >
          <div className="text-sm font-medium text-gray-500 mb-1">Your Rating:</div>
          <div className="text-4xl">
            {rating > 0 ? `${rating} / ${max}` : '—'}
          </div>
          
          {rating > 0 && (
            <motion.button
              onClick={() => {
                setRating(0);
                setHoveredRating(null);
                setShowHint(true);
                if (onRatingChange) onRatingChange(0);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-4 py-1.5 text-sm bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
            >
              Clear Rating
            </motion.button>
          )}
        </motion.div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-500 mb-3 text-center">
          Color Theme:
        </h3>
        <div className="flex justify-center gap-2">
          {colorPresets.map((preset, index) => (
            <motion.button
              key={index}
              onClick={() => handleColorChange(preset)}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                colors.bg === preset.bg 
                  ? 'ring-2 ring-offset-2 ring-gray-400' 
                  : 'ring-1 ring-gray-200'
              }`}
              style={{ 
                backgroundColor: preset.bg,
                color: preset.text,
              }}
              aria-label={preset.name}
            >
              {colors.bg === preset.bg && '✓'}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

render(<KeyboardRating />);
