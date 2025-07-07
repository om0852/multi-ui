const { motion } = require('framer-motion');
const React = require('react');

const EmojiRating = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
}) => {
  const [rating, setRating] = React.useState(initialRating);
  const [hoveredRating, setHoveredRating] = React.useState(null);
  const emojis = ["😢", "😕", "😐", "🙂", "😄"];

  const handleRating = (value) => {
    if (disabled) return;
    setRating(value);
    if (onRatingChange) onRatingChange(value);
  };

  const emojiLabels = ["Very Bad", "Not Good", "Neutral", "Good", "Excellent"];

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">How was your experience?</h2>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center space-x-2 mb-6">
          {Array.from({ length: Math.min(max, emojis.length) }, (_, index) => {
            const value = index + 1;
            const isActive = (hoveredRating || rating) >= value;

            return (
              <div key={index} className="flex flex-col items-center">
                <motion.button
                  onClick={() => handleRating(value)}
                  onMouseEnter={() => !disabled && setHoveredRating(value)}
                  onMouseLeave={() => !disabled && setHoveredRating(null)}
                  whileHover={{ scale: 1.4, y: -5 }}
                  whileTap={{ scale: 0.8 }}
                  animate={isActive ? {
                    rotate: [0, 360],
                    scale: [1, 1.4, 1.2],
                    y: [0, -10, 0],
                    transition: {
                      duration: 0.5,
                      ease: "easeOut"
                    }
                  } : {}}
                  className={`text-5xl focus:outline-none transition-all duration-200 ${
                    disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                  } ${isActive ? "grayscale-0" : "grayscale opacity-70"}`}
                  disabled={disabled}
                >
                  {emojis[index] || "⭐"}
                </motion.button>
                <span className={`text-xs mt-2 font-medium transition-colors ${
                  isActive ? 'text-gray-800' : 'text-gray-400'
                }`}>
                  {emojiLabels[index] || value}
                </span>
              </div>
            );
          })}
        </div>
        
        <div className="w-full max-w-xs h-2 bg-gray-100 rounded-full overflow-hidden mt-2">
          <motion.div 
            className="h-full bg-gradient-to-r from-red-400 via-yellow-400 to-green-400"
            initial={{ width: '0%' }}
            animate={{ width: rating ? `${(rating / max) * 100}%` : '0%' }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        
        <p className="mt-6 text-gray-600 text-center">
          {rating > 0 
            ? `You rated this: ${emojiLabels[rating - 1]}`
            : 'Select an emoji to rate'}
        </p>
        
        {!disabled && rating > 0 && (
          <button
            onClick={() => {
              setRating(0);
              setHoveredRating(null);
              if (onRatingChange) onRatingChange(0);
            }}
            className="mt-4 px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            Clear rating
          </button>
        )}
      </div>
    </div>
  );
};

render(<EmojiRating />);
