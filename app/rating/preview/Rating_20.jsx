const { motion } = require('framer-motion');
const React = require('react');

const SoundWaveRating = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
}) => {
  const [rating, setRating] = React.useState(initialRating);
  const [hoveredRating, setHoveredRating] = React.useState(null);
  const [waveColor, setWaveColor] = React.useState('#8B5CF6');
  const [isPlaying, setIsPlaying] = React.useState(false);
  
  const colorOptions = [
    { name: 'Purple', value: '#8B5CF6' },
    { name: 'Blue', value: '#3B82F6' },
    { name: 'Pink', value: '#EC4899' },
    { name: 'Teal', value: '#14B8A6' },
    { name: 'Orange', value: '#F97316' },
  ];

  const handleRating = (value) => {
    if (disabled) return;
    setRating(value);
    if (onRatingChange) onRatingChange(value);
    
    // Play sound effect
    if (value > 0) {
      playSound(value);
    }
  };
  
  const playSound = (volume) => {
    // Create audio context
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();
    
    // Create oscillator
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    // Configure oscillator
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(220 + (volume * 80), audioCtx.currentTime); // Higher volume = higher pitch
    
    // Configure gain (volume)
    gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
    
    // Connect nodes
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    // Start and stop
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.5);
    
    // Visual feedback
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 500);
  };

  const currentRating = hoveredRating || rating;
  
  // Generate sound wave bars
  const generateBars = (count) => {
    return Array.from({ length: count }).map((_, i) => {
      const isActive = i < currentRating * 3; // 3 bars per rating
      const height = isActive ? 20 + Math.sin(i * 0.5) * 15 : 5;
      const opacity = isActive ? 1 : 0.2;
      
      return (
        <motion.div
          key={i}
          className="w-1.5 rounded-full mx-0.5"
          style={{ 
            backgroundColor: waveColor,
            opacity,
          }}
          initial={{ height: 5, opacity: 0.2 }}
          animate={{
            height: isActive ? [height, height + 10, height] : 5,
            opacity: isActive ? [0.8, 1, 0.8] : 0.2,
          }}
          transition={{
            duration: 0.6,
            repeat: isActive ? Infinity : 0,
            repeatType: "reverse",
            delay: i * 0.05,
            ease: "easeInOut",
          }}
        />
      );
    });
  };
  
  // Generate frequency visualization
  const generateFrequencyBars = (count) => {
    return Array.from({ length: count }).map((_, i) => {
      const isActive = i < currentRating * 2;
      const height = isActive ? 10 + Math.random() * 40 : 5;
      
      return (
        <motion.div
          key={i}
          className="w-2.5 rounded-full mx-0.5"
          style={{ 
            backgroundColor: waveColor,
            opacity: isActive ? 0.8 : 0.2,
          }}
          initial={{ height: 5 }}
          animate={{
            height: isActive ? [height, height * 0.7, height] : 5,
          }}
          transition={{
            duration: 0.4,
            repeat: isActive ? Infinity : 0,
            repeatType: "reverse",
            delay: i * 0.05,
          }}
        />
      );
    });
  };
  
  // Generate circular wave effect
  const generateCircularWaves = (count) => {
    return Array.from({ length: count }).map((_, i) => {
      const isActive = i < currentRating;
      const size = isActive ? 100 + i * 40 : 0;
      
      return (
        <motion.div
          key={i}
          className="absolute rounded-full border-2"
          style={{
            borderColor: waveColor,
            width: size,
            height: size,
            opacity: 0,
          }}
          animate={{
            scale: isActive ? [0.5, 1] : 0,
            opacity: isActive ? [0.8, 0] : 0,
          }}
          transition={{
            duration: 1.5,
            repeat: isActive ? Infinity : 0,
            ease: "easeOut",
            delay: i * 0.3,
          }}
        />
      );
    });
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
        Sound Wave Rating
      </h2>
      <p className="text-gray-500 text-center mb-6">
        Rate by sound intensity
      </p>
      
      {/* Main visualization */}
      <div className="relative flex flex-col items-center mb-8">
        {/* Circular wave effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {generateCircularWaves(3)}
        </div>
        
        {/* Speaker icon with animation */}
        <motion.div 
          className="relative z-10 mb-6 text-5xl"
          animate={{
            scale: isPlaying ? [1, 1.2, 1] : 1,
            rotate: isPlaying ? [0, -10, 10, 0] : 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          {currentRating === 0 ? "🔇" : currentRating <= 2 ? "🔈" : currentRating <= 4 ? "🔉" : "🔊"}
        </motion.div>
        
        {/* Volume level display */}
        <motion.div 
          className="text-3xl font-bold mb-6 z-10"
          style={{ color: waveColor }}
          animate={{
            scale: isPlaying ? [1, 1.1, 1] : 1,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          {currentRating > 0 ? `${currentRating * 20}%` : 'Muted'}
        </motion.div>
        
        {/* Sound wave visualization */}
        <div className="w-full h-24 flex items-center justify-center mb-8 relative">
          <div className="flex items-center h-full">
            {generateBars(15)}
          </div>
          
          {/* Frequency visualization that appears on hover */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center opacity-0"
            whileHover={{ opacity: 1 }}
          >
            <div className="flex items-end h-20">
              {generateFrequencyBars(15)}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Rating buttons */}
      <div className="flex justify-center gap-2 mb-8">
        {Array.from({ length: max }).map((_, index) => {
          const value = index + 1;
          const isActive = currentRating >= value;
          
          return (
            <motion.button
              key={index}
              onClick={() => handleRating(value)}
              onMouseEnter={() => !disabled && setHoveredRating(value)}
              onMouseLeave={() => !disabled && setHoveredRating(null)}
              className={`
                w-12 h-12 rounded-xl flex flex-col items-center justify-center
                text-lg font-medium transition-all duration-200 relative overflow-hidden
                ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
                ${isActive ? 'text-white' : 'text-gray-500'}
              `}
              style={{
                backgroundColor: isActive ? waveColor : '#F3F4F6',
                transform: isActive ? 'translateY(-5px)' : 'none',
                boxShadow: isActive 
                  ? `0 10px 15px -3px ${waveColor}40, 0 4px 6px -2px ${waveColor}20`
                  : '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
              }}
              disabled={disabled}
              whileHover={!disabled ? { 
                y: -5,
                scale: 1.05,
                backgroundColor: waveColor,
                color: 'white',
              } : {}}
              whileTap={!disabled ? { scale: 0.95 } : {}}
            >
              {value}
              
              {isActive && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-white/80"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
      
      {/* Color selector */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-500 mb-3 text-center">
          Wave Color:
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {colorOptions.map((color) => (
            <motion.button
              key={color.value}
              onClick={() => setWaveColor(color.value)}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-8 h-8 rounded-full ${
                waveColor === color.value ? 'ring-2 ring-offset-2 ring-gray-400' : ''
              }`}
              style={{ backgroundColor: color.value }}
              aria-label={color.name}
            />
          ))}
        </div>
      </div>
      
      {!disabled && currentRating > 0 && (
        <div className="mt-6 text-center">
          <motion.button
            onClick={() => {
              setRating(0);
              setHoveredRating(null);
              if (onRatingChange) onRatingChange(0);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors flex items-center mx-auto gap-1.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Mute
          </motion.button>
        </div>
      )}
    </div>
  );
};

render(<SoundWaveRating />);
