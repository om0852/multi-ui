const { motion } = require('framer-motion');
const React = require('react');

const ClassicStarRating = ({
  max = 5,
  onRatingChange,
  fillColor = "#FFD700",
  borderColor = "#FFD700",
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
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Rate This Product</h2>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center space-x-1 mb-4">
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
                animate={{
                  y: isActive ? [-2, 2, -2] : 0,
                }}
                transition={{
                  duration: 0.5,
                  repeat: isActive ? Infinity : 0,
                  repeatType: "reverse",
                }}
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
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </motion.button>
            );
          })}
        </div>
        <p className="text-gray-600 text-center">
          {rating > 0 
            ? `You rated this ${rating} star${rating > 1 ? 's' : ''}`
            : 'Tap to rate'}
        </p>
        {!disabled && (
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

render(<ClassicStarRating />);
