const { motion } = require('framer-motion');
const React = require('react');

const PulsingHeartRating = ({
  max = 5,
  onRatingChange,
  fillColor = "#FF4B4B",
  borderColor = "#FF4B4B",
  disabled = false,
  initialRating = 0,
}) => {
  const [rating, setRating] = React.useState(initialRating);
  const [hoveredRating, setHoveredRating] = React.useState(null);

  const handleRating = (value) => {
    if (disabled) return;
    setRating(value);
    if (onRatingChange) onRatingChange(value);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Heart Rating</h2>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          {Array.from({ length: max }, (_, index) => {
            const value = index + 1;
            const isActive = (hoveredRating || rating) >= value;

            return (
              <motion.button
                key={index}
                onClick={() => handleRating(value)}
                onMouseEnter={() => !disabled && setHoveredRating(value)}
                onMouseLeave={() => !disabled && setHoveredRating(null)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                animate={isActive ? {
                  scale: [1, 1.2, 1],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                } : {}}
                className={`focus:outline-none ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
                disabled={disabled}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill={isActive ? fillColor : "none"}
                  stroke={borderColor}
                  strokeWidth="2"
                  className="w-10 h-10 md:w-12 md:h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </motion.button>
            );
          })}
        </div>
        <p className="text-gray-600 text-center mb-4">
          {rating > 0 
            ? `You rated this ${rating} heart${rating > 1 ? 's' : ''}`
            : 'Tap to rate'}
        </p>
        {!disabled && (
          <button
            onClick={() => {
              setRating(0);
              setHoveredRating(null);
              if (onRatingChange) onRatingChange(0);
            }}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            Clear rating
          </button>
        )}
      </div>
    </div>
  );
};

render(<PulsingHeartRating />);
