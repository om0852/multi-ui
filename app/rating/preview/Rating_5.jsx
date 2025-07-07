const { motion } = require('framer-motion');
const React = require('react');

const CustomIconRating = ({
  max = 5,
  onRatingChange,
  fillColor = "#FFD700",
  borderColor = "#FFD700",
  disabled = false,
  initialRating = 0,
  customIcon = "star",
}) => {
  const [rating, setRating] = React.useState(initialRating);
  const [hoveredRating, setHoveredRating] = React.useState(null);
  const [selectedIcon, setSelectedIcon] = React.useState(customIcon);

  const icons = {
    lightning: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    ),
    fire: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
      />
    ),
    diamond: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
      />
    ),
    star: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.563 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    ),
    crown: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
      />
    ),
  };

  const handleRating = (value) => {
    if (disabled) return;
    setRating(value);
    if (onRatingChange) onRatingChange(value);
  };

  const iconNames = Object.keys(icons);
  const currentIcon = icons[selectedIcon] || icons.star;

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Rate This Item</h2>
      <p className="text-gray-600 text-center mb-6">Select an icon and rate from 1 to {max}</p>
      
      <div className="flex justify-center space-x-2 mb-8">
        {iconNames.map((iconName) => (
          <motion.button
            key={iconName}
            onClick={() => setSelectedIcon(iconName)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`p-2 rounded-lg ${
              selectedIcon === iconName 
                ? 'bg-blue-100 border-2 border-blue-400' 
                : 'bg-gray-100 border-2 border-transparent'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke={selectedIcon === iconName ? "#3B82F6" : "#6B7280"}
              strokeWidth="2"
              className="w-6 h-6"
            >
              {icons[iconName]}
            </svg>
            <span className="sr-only">{iconName}</span>
          </motion.button>
        ))}
      </div>
      
      <div className="flex items-center justify-center space-x-1 mb-6">
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
                  duration: 0.3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
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
                {currentIcon}
              </svg>
            </motion.button>
          );
        })}
      </div>
      
      <div className="text-center">
        <p className="text-gray-700 font-medium mb-2">
          {rating > 0 
            ? `You rated this ${rating} ${selectedIcon}${rating > 1 ? 's' : ''}`
            : 'Select a rating'}
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
            className="mt-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            Clear rating
          </motion.button>
        )}
      </div>
    </div>
  );
};

render(<CustomIconRating />);
