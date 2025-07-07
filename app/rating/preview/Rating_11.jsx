const { motion } = require('framer-motion');
const React = require('react');

const MoodRating = ({
  onRatingChange,
  disabled = false,
  initialRating = 3,
}) => {
  const [rating, setRating] = React.useState(initialRating);
  const [selectedMood, setSelectedMood] = React.useState(null);

  const moods = [
    { emoji: "😡", color: "#EF4444", label: "Terrible" },
    { emoji: "😕", color: "#F59E0B", label: "Bad" },
    { emoji: "😐", color: "#FCD34D", label: "Okay" },
    { emoji: "🙂", color: "#34D399", label: "Good" },
    { emoji: "😄", color: "#10B981", label: "Excellent" },
  ];

  const handleRating = (value) => {
    if (disabled) return;
    setRating(value);
    setSelectedMood(moods[value - 1]);
    if (onRatingChange) onRatingChange(value);
  };

  // Initialize selected mood on first render
  React.useEffect(() => {
    setSelectedMood(moods[rating - 1]);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        How was your experience?
      </h2>
      
      {/* Large emoji display */}
      <div className="flex flex-col items-center justify-center mb-8">
        <motion.div
          className="text-8xl mb-4"
          key={rating}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1.2, 1],
            opacity: 1,
            rotate: [0, 10, -5, 0],
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          {selectedMood?.emoji || moods[2].emoji}
        </motion.div>

        {/* Mood label with animated underline */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span 
            className="text-2xl font-bold"
            style={{ color: selectedMood?.color || '#6B7280' }}
          >
            {selectedMood?.label || 'Select a mood'}
          </span>
          <motion.div 
            className="absolute bottom-0 left-0 h-1 w-full"
            style={{ 
              backgroundColor: selectedMood?.color || '#E5E7EB',
              opacity: 0.5
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </motion.div>
      </div>

      {/* Emoji slider */}
      <div className="flex items-center justify-between px-4 py-6 bg-gray-50 rounded-xl">
        {moods.map((mood, index) => {
          const isActive = rating === index + 1;
          return (
            <motion.button
              key={index}
              onClick={() => handleRating(index + 1)}
              whileHover={{ 
                scale: 1.3,
                y: -10,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
              animate={{
                scale: isActive ? 1.4 : 1,
                y: isActive ? -10 : 0,
                opacity: isActive ? 1 : 0.6,
              }}
              className={`
                text-4xl p-3 rounded-full focus:outline-none
                transition-all duration-200 flex flex-col items-center
                ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
              `}
              style={{
                backgroundColor: isActive ? mood.color + '20' : 'transparent',
              }}
              disabled={disabled}
            >
              {mood.emoji}
              {isActive && (
                <motion.span 
                  className="text-xs mt-1 font-medium"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ color: mood.color }}
                >
                  {mood.label}
                </motion.span>
              )}
            </motion.button>
          );
        })}
      </div>
      
      <div className="mt-8 text-center">
        {!disabled && rating > 0 && (
          <motion.button
            onClick={() => {
              setRating(3);
              setSelectedMood(moods[2]);
              if (onRatingChange) onRatingChange(0);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Reset Rating
          </motion.button>
        )}
      </div>
    </div>
  );
};

render(<MoodRating />);
