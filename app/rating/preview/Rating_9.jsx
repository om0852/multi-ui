const { motion, useAnimation } = require('framer-motion');
const React = require('react');

const SliderRating = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
  activeColor = "#10B981",
  trackColor = "#E5E7EB",
}) => {
  const [rating, setRating] = React.useState(initialRating);
  const [isDragging, setIsDragging] = React.useState(false);
  const [tempRating, setTempRating] = React.useState(initialRating);
  const sliderRef = React.useRef(null);
  const controls = useAnimation();

  const handleRating = (clientX) => {
    if (disabled || !sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const newRating = Math.ceil((x / rect.width) * max);
    
    setTempRating(newRating);
    
    // Only update the actual rating when we stop dragging
    if (!isDragging) {
      setRating(newRating);
      if (onRatingChange) onRatingChange(newRating);
    }
  };

  const handleMouseDown = (e) => {
    if (disabled) return;
    setIsDragging(true);
    handleRating(e.clientX);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (disabled || !isDragging) return;
    handleRating(e.clientX);
  };

  const handleMouseUp = () => {
    if (disabled) return;
    setIsDragging(false);
    setRating(tempRating);
    if (onRatingChange) onRatingChange(tempRating);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    
    // Bounce animation when rating is set
    controls.start({
      scale: [1, 1.2, 1],
      transition: { duration: 0.4, type: 'spring', bounce: 0.5 }
    });
  };

  const handleClick = (value) => {
    if (disabled) return;
    setRating(value);
    setTempRating(value);
    if (onRatingChange) onRatingChange(value);
    
    // Bounce animation when clicking a number
    controls.start({
      scale: [1, 1.2, 1],
      transition: { duration: 0.4, type: 'spring', bounce: 0.5 }
    });
  };

  const currentRating = isDragging ? tempRating : rating;
  const percentage = ((currentRating - 1) / (max - 1)) * 100;
  const trackWidth = (currentRating / max) * 100;

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Slider Rating
      </h2>
      
      <div className="relative w-full mb-12">
        {/* Rating labels */}
        <div className="absolute -top-8 left-0 w-full flex justify-between px-2">
          {Array.from({ length: max }, (_, i) => {
            const value = i + 1;
            const isActive = value <= currentRating;
            const isHovered = isDragging && value <= tempRating;
            
            return (
              <motion.button
                key={i}
                onClick={() => handleClick(value)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`text-sm font-medium focus:outline-none ${
                  disabled ? 'cursor-not-allowed' : 'cursor-pointer'
                }`}
                style={{
                  color: isActive || isHovered ? activeColor : '#9CA3AF',
                }}
                disabled={disabled}
              >
                {value}
              </motion.button>
            );
          })}
        </div>
        
        {/* Slider track */}
        <div
          ref={sliderRef}
          className={`
            h-3 rounded-full relative cursor-pointer
            ${disabled ? 'cursor-not-allowed opacity-50' : ''}
          `}
          style={{ backgroundColor: trackColor }}
          onMouseDown={handleMouseDown}
        >
          {/* Active track */}
          <motion.div
            className="absolute top-0 left-0 h-full rounded-full"
            style={{ backgroundColor: activeColor }}
            initial={false}
            animate={{
              width: `${trackWidth}%`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          
          {/* Gradient effect */}
          <motion.div 
            className="absolute top-0 left-0 h-full rounded-full opacity-30"
            style={{
              width: `${trackWidth}%`,
              background: `linear-gradient(90deg, transparent 0%, ${activeColor} 100%)`,
            }}
          />

          {/* Slider thumb */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full shadow-lg border-2 border-white"
            style={{ 
              backgroundColor: activeColor,
              left: `calc(${percentage}% - 12px)`,
            }}
            animate={controls}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div 
              className="absolute inset-0 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundColor: 'white',
                boxShadow: `0 0 10px ${activeColor}`,
              }}
            />
          </motion.div>
        </div>
        
        {/* Current rating display */}
        <motion.div 
          className="absolute -bottom-8 left-0 w-full text-center"
          initial={false}
          animate={{
            x: `${percentage}%`,
            color: activeColor,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="relative -left-1/2 w-12 text-sm font-bold">
            {currentRating.toFixed(1)}
          </div>
        </motion.div>
      </div>
      
      <div className="text-center">
        <div className="inline-block px-6 py-3 bg-gray-50 rounded-lg">
          <p className="text-gray-700 font-medium">
            {rating > 0 
              ? `You rated this ${rating.toFixed(1)} out of ${max}`
              : 'Slide to rate'}
          </p>
        </div>
        
        {!disabled && rating > 0 && (
          <motion.button
            onClick={() => {
              setRating(0);
              setTempRating(0);
              if (onRatingChange) onRatingChange(0);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 block mx-auto px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            Reset Rating
          </motion.button>
        )}
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-500 mb-3 text-center">
          Try different colors:
        </h3>
        <div className="flex justify-center space-x-2">
          {[
            { color: "#10B981", name: "Emerald" },
            { color: "#3B82F6", name: "Blue" },
            { color: "#8B5CF6", name: "Purple" },
            { color: "#EC4899", name: "Pink" },
            { color: "#F59E0B", name: "Amber" },
          ].map((item) => (
            <motion.button
              key={item.color}
              onClick={() => {
                activeColor = item.color;
                // Force re-render
                setRating(rating => rating + 0.1);
                setTimeout(() => setRating(rating => Math.floor(rating)), 10);
              }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                activeColor === item.color 
                  ? 'text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              style={{
                backgroundColor: activeColor === item.color ? item.color : 'transparent',
              }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

render(<SliderRating />);
