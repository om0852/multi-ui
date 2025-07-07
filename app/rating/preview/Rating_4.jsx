const { motion } = require('framer-motion');
const React = require('react');

const ThumbsRating = ({
  onRatingChange,
  fillColor = "#4CAF50",
  borderColor = "#333333",
  disabled = false,
  initialRating = 0,
}) => {
  const [rating, setRating] = React.useState(initialRating);
  const [hoveredThumb, setHoveredThumb] = React.useState(null);

  const handleRating = (value) => {
    if (disabled) return;
    const newRating = rating === value ? 0 : value;
    setRating(newRating);
    if (onRatingChange) onRatingChange(newRating);
  };

  const isThumbUpActive = rating === 1 || hoveredThumb === "up";
  const isThumbDownActive = rating === -1 || hoveredThumb === "down";

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Was this helpful?</h2>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center space-x-12 mb-6">
          <motion.button
            onClick={() => handleRating(1)}
            onMouseEnter={() => !disabled && setHoveredThumb("up")}
            onMouseLeave={() => !disabled && setHoveredThumb(null)}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              y: rating === 1 ? [0, -10, 5, -5, 0] : 0,
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            }}
            className={`p-3 rounded-full focus:outline-none ${
              disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
            } ${isThumbUpActive ? 'bg-green-50' : 'bg-gray-50'}`}
            disabled={disabled}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={isThumbUpActive ? fillColor : "none"}
              stroke={isThumbUpActive ? fillColor : borderColor}
              strokeWidth="2"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
              />
            </svg>
          </motion.button>

          <motion.button
            onClick={() => handleRating(-1)}
            onMouseEnter={() => !disabled && setHoveredThumb("down")}
            onMouseLeave={() => !disabled && setHoveredThumb(null)}
            whileHover={{ scale: 1.2, y: 5 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              y: rating === -1 ? [0, 10, -5, 5, 0] : 0,
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            }}
            className={`p-3 rounded-full focus:outline-none ${
              disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
            } ${isThumbDownActive ? 'bg-red-50' : 'bg-gray-50'}`}
            disabled={disabled}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={isThumbDownActive ? "#DC3545" : "none"}
              stroke={isThumbDownActive ? "#DC3545" : borderColor}
              strokeWidth="2"
              className="w-12 h-12 rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
              />
            </svg>
          </motion.button>
        </div>
        
        <div className="text-center">
          {rating === 1 && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-600 font-medium"
            >
              Thank you for your positive feedback! 😊
            </motion.p>
          )}
          {rating === -1 && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 font-medium"
            >
              We're sorry to hear that. We'll try to improve! 😔
            </motion.p>
          )}
          {rating === 0 && (
            <p className="text-gray-500">
              Click a thumb to rate
            </p>
          )}
        </div>
        
        {!disabled && rating !== 0 && (
          <button
            onClick={() => {
              setRating(0);
              setHoveredThumb(null);
              if (onRatingChange) onRatingChange(0);
            }}
            className="mt-6 px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            Clear rating
          </button>
        )}
      </div>
    </div>
  );
};

render(<ThumbsRating />);
