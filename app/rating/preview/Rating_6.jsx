const { motion } = require('framer-motion');
const React = require('react');

const RainbowRating = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
}) => {
  const [rating, setRating] = React.useState(initialRating);
  const [hoveredRating, setHoveredRating] = React.useState(null);
  const [showConfetti, setShowConfetti] = React.useState(false);

  const colors = [
    "#FF0000", // Red
    "#FF7F00", // Orange
    "#FFD700", // Yellow
    "#00FF00", // Green
    "#0000FF", // Blue
    "#4B0082", // Indigo
    "#8B00FF", // Violet
  ].slice(0, max);

  const handleRating = (value) => {
    if (disabled) return;
    setRating(value);
    if (onRatingChange) onRatingChange(value);
    
    // Show confetti effect when rating is given
    if (value > 0) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    }
  };

  const renderConfetti = () => {
    if (!showConfetti) return null;
    
    return (
      <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
        {Array.from({ length: 50 }).map((_, i) => {
          const color = colors[Math.floor(Math.random() * colors.length)];
          const size = Math.random() * 20 + 10;
          const left = Math.random() * 100;
          const animationDelay = Math.random() * 2;
          const duration = 1 + Math.random() * 2;
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
                left: `${left}%`,
                top: '50%',
              }}
              initial={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
              animate={{
                opacity: [1, 0.8, 0],
                y: [-100, 100],
                x: [0, (Math.random() - 0.5) * 200],
                rotate: 360,
              }}
              transition={{
                duration: duration,
                delay: animationDelay,
                ease: "easeOut",
              }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gray-900 rounded-xl shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900 opacity-30"></div>
      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-white mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400">
          Rainbow Rating
        </h2>
        <p className="text-gray-300 text-center mb-8">Rate your experience with colorful stars</p>
        
        <div className="flex items-center justify-center space-x-1 mb-8">
          {Array.from({ length: max }, (_, index) => {
            const value = index + 1;
            const isActive = (hoveredRating || rating) >= value;
            const color = colors[index % colors.length];
            const delay = index * 0.1;

            return (
              <motion.button
                key={index}
                onClick={() => handleRating(value)}
                onMouseEnter={() => !disabled && setHoveredRating(value)}
                onMouseLeave={() => !disabled && setHoveredRating(null)}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
                whileTap={{ scale: 0.8 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { 
                    delay: delay,
                    duration: 0.3,
                    type: 'spring',
                    stiffness: 100
                  }
                }}
                className={`focus:outline-none ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
                disabled={disabled}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill={isActive ? color : "none"}
                  stroke={color}
                  strokeWidth="2"
                  className="w-12 h-12 md:w-14 md:h-14 transition-all duration-300"
                  animate={isActive ? {
                    scale: [1, 1.1, 1],
                    transition: {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  } : {}}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </motion.svg>
              </motion.button>
            );
          })}
        </div>
        
        <div className="text-center">
          <p className="text-xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-400">
            {rating > 0 
              ? `You rated this ${rating} ${rating === 1 ? 'star' : 'stars'}`
              : 'Please rate your experience'}
          </p>
          
          {!disabled && rating > 0 && (
            <motion.button
              onClick={() => {
                setRating(0);
                setHoveredRating(null);
                if (onRatingChange) onRatingChange(0);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Change Rating
            </motion.button>
          )}
        </div>
      </div>
      {showConfetti && renderConfetti()}
    </div>
  );
};

render(<RainbowRating />);
