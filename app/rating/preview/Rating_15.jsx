const { motion } = require('framer-motion');
const React = require('react');

const TagRating = ({
  onRatingChange,
  disabled = false,
  initialRating = 0,
}) => {
  const [rating, setRating] = React.useState(initialRating);
  const [selectedTag, setSelectedTag] = React.useState(null);

  const tags = [
    {
      value: 1,
      label: "Poor",
      color: "#EF4444",
      icon: "✗",
      description: "Needs significant improvement",
      emoji: "😞"
    },
    {
      value: 2,
      label: "Fair",
      color: "#F59E0B",
      icon: "⚠",
      description: "Below expectations",
      emoji: "😕"
    },
    {
      value: 3,
      label: "Good",
      color: "#10B981",
      icon: "✓",
      description: "Meets expectations",
      emoji: "🙂"
    },
    {
      value: 4,
      label: "Great",
      color: "#3B82F6",
      icon: "★",
      description: "Exceeds expectations",
      emoji: "😊"
    },
    {
      value: 5,
      label: "Excellent",
      color: "#6366F1",
      icon: "⭐",
      description: "Outstanding performance",
      emoji: "😍"
    },
  ];

  const handleRating = (value, tag) => {
    if (disabled) return;
    setRating(value);
    setSelectedTag(tag);
    if (onRatingChange) onRatingChange(value);
  };

  // Initialize selected tag on first render
  React.useEffect(() => {
    if (initialRating > 0) {
      const initialTag = tags.find(tag => tag.value === initialRating);
      setSelectedTag(initialTag);
    }
  }, []);

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
        How would you rate this?
      </h2>
      <p className="text-gray-500 text-center mb-6">
        Select an option below
      </p>
      
      {/* Selected tag preview */}
      {selectedTag && (
        <motion.div 
          className="mb-8 p-4 rounded-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            backgroundColor: `${selectedTag.color}10`,
            border: `2px dashed ${selectedTag.color}40`
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="text-4xl mb-2"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -5, 0],
            }}
            transition={{ 
              duration: 0.6,
              ease: "easeInOut"
            }}
          >
            {selectedTag.emoji}
          </motion.div>
          <h3 
            className="text-xl font-bold mb-1"
            style={{ color: selectedTag.color }}
          >
            {selectedTag.label}
          </h3>
          <p className="text-gray-600">{selectedTag.description}</p>
        </motion.div>
      )}

      {/* Tags */}
      <div className="space-y-3">
        {tags.map((tag, index) => {
          const isSelected = rating === tag.value;
          const isAboveSelected = tag.value <= rating;
          const delay = index * 0.05;

          return (
            <motion.button
              key={index}
              onClick={() => handleRating(tag.value, tag)}
              initial={{ x: -50, opacity: 0 }}
              animate={{ 
                x: 0, 
                opacity: 1,
                y: isSelected ? -2 : 0,
                scale: isSelected ? 1.02 : 1,
                backgroundColor: isAboveSelected ? `${tag.color}10` : "#F9FAFB",
                borderColor: isAboveSelected ? `${tag.color}40` : "#E5E7EB",
                boxShadow: isSelected 
                  ? `0 10px 15px -3px ${tag.color}20, 0 4px 6px -2px ${tag.color}10`
                  : 'none',
              }}
              transition={{ 
                delay: disabled ? 0 : delay,
                duration: 0.3,
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
              whileHover={!disabled ? { 
                scale: 1.02,
                backgroundColor: `${tag.color}15`,
                borderColor: `${tag.color}60`,
                boxShadow: `0 4px 6px -1px ${tag.color}10, 0 2px 4px -1px ${tag.color}05`,
              } : {}}
              whileTap={!disabled ? { scale: 0.98 } : {}}
              className={`
                w-full px-5 py-4 rounded-xl flex items-center
                transition-all duration-200 border-2
                ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
              `}
              disabled={disabled}
            >
              {/* Icon */}
              <motion.span
                className="text-2xl mr-4"
                animate={{
                  scale: isSelected ? [1, 1.3, 1] : 1,
                  rotate: isSelected ? [0, 10, -5, 0] : 0,
                }}
                transition={{ duration: 0.4 }}
                style={{
                  color: isAboveSelected ? tag.color : "#9CA3AF",
                }}
              >
                {tag.icon}
              </motion.span>

              {/* Text content */}
              <div className="flex-1 text-left">
                <div 
                  className="font-semibold text-lg"
                  style={{ color: isAboveSelected ? tag.color : "#1F2937" }}
                >
                  {tag.label}
                </div>
                <div className="text-sm text-gray-500">
                  {tag.description}
                </div>
              </div>

              {/* Checkmark */}
              <motion.div
                className="ml-2"
                initial={{ scale: 0 }}
                animate={{ 
                  scale: isSelected ? 1 : 0,
                  rotate: isSelected ? [0, 360] : 0,
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 500, 
                  damping: 20,
                  delay: isSelected ? 0.2 : 0,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={tag.color}
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>
            </motion.button>
          );
        })}
      </div>
      
      {!disabled && rating > 0 && (
        <div className="mt-6 text-center">
          <motion.button
            onClick={() => {
              setRating(0);
              setSelectedTag(null);
              if (onRatingChange) onRatingChange(0);
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
          >
            Clear Selection
          </motion.button>
        </div>
      )}
    </div>
  );
};

render(<TagRating />);
