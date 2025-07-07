const { motion } = require('framer-motion');
const React = require('react');

const WeatherRating = ({
  onRatingChange,
  disabled = false,
  initialRating = 0,
}) => {
  const [rating, setRating] = React.useState(initialRating);
  const [hoveredRating, setHoveredRating] = React.useState(null);
  const [selectedSeason, setSelectedSeason] = React.useState('spring');

  const weatherStates = [
    { 
      icon: "🌧️", 
      label: "Stormy", 
      color: "#1F2937", 
      bgColor: "#E5E7EB",
      description: "Needs improvement"
    },
    { 
      icon: "⛅", 
      label: "Cloudy", 
      color: "#9CA3AF", 
      bgColor: "#F3F4F6",
      description: "Below average"
    },
    { 
      icon: "🌤️", 
      label: "Partly Sunny", 
      color: "#F59E0B", 
      bgColor: "#FEF3C7",
      description: "Average"
    },
    { 
      icon: "☀️", 
      label: "Sunny", 
      color: "#F59E0B", 
      bgColor: "#FEF3C7",
      description: "Good"
    },
    { 
      icon: "🌈", 
      label: "Perfect", 
      color: "#10B981", 
      bgColor: "#D1FAE5",
      description: "Excellent"
    },
  ];

  const seasons = {
    spring: { name: 'Spring', color: '#4ADE80' },
    summer: { name: 'Summer', color: '#F59E0B' },
    autumn: { name: 'Autumn', color: '#F97316' },
    winter: { name: 'Winter', color: '#60A5FA' },
  };

  const handleRating = (value) => {
    if (disabled) return;
    setRating(value);
    if (onRatingChange) onRatingChange(value);
  };

  const currentRating = hoveredRating || rating || 0;
  const currentWeather = weatherStates[currentRating - 1] || { 
    icon: "❓", 
    label: "Rate me!", 
    color: "#9CA3AF", 
    bgColor: "#F3F4F6",
    description: "Select a rating"
  };

  const handleSeasonChange = (season) => {
    setSelectedSeason(season);
    // Reset rating when changing seasons
    setRating(0);
    setHoveredRating(null);
  };

  // Generate weather effects based on rating and season
  const renderWeatherEffects = () => {
    if (currentRating === 0) return null;

    // Stormy weather
    if (currentRating === 1) {
      return (
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-4 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10%`,
                backgroundColor: seasons[selectedSeason].color,
                opacity: 0.7,
              }}
              animate={{
                y: ["0%", "800%"],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 1 + Math.random(),
                repeat: Infinity,
                delay: Math.random(),
              }}
            />
          ))}
          
          {/* Lightning */}
          <motion.div
            className="absolute text-4xl"
            style={{
              left: '30%',
              top: '40%',
              color: '#FCD34D',
              filter: 'drop-shadow(0 0 4px rgba(252, 211, 77, 0.8))',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            ⚡
          </motion.div>
        </div>
      );
    }

    // Cloudy weather
    if (currentRating === 2) {
      return (
        <div className="absolute inset-0">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full opacity-40"
              style={{
                width: 60 + i * 20,
                height: 30 + i * 5,
                left: `${20 + i * 20}%`,
                top: `${20 + i * 10}%`,
              }}
              animate={{
                x: [0, 10, 0],
                y: [0, 5, 0],
              }}
              transition={{
                duration: 5 + i * 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </div>
      );
    }

    // Partly sunny
    if (currentRating === 3) {
      return (
        <div className="absolute inset-0">
          {/* Sun */}
          <motion.div
            className="absolute text-5xl"
            style={{
              left: '60%',
              top: '30%',
              color: '#F59E0B',
              filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.6))',
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            ☀️
          </motion.div>
          
          {/* Few clouds */}
          <motion.div
            className="absolute bg-white rounded-full opacity-40"
            style={{
              width: 80,
              height: 40,
              left: '20%',
              top: '40%',
            }}
            animate={{
              x: [0, 20, 0],
              y: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </div>
      );
    }

    // Sunny
    if (currentRating === 4) {
      return (
        <div className="absolute inset-0">
          {/* Sun with rays */}
          <motion.div
            className="absolute text-6xl"
            style={{
              left: '50%',
              top: '35%',
              transform: 'translate(-50%, -50%)',
              color: '#F59E0B',
              filter: 'drop-shadow(0 0 12px rgba(245, 158, 11, 0.8))',
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: {
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              },
              scale: {
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            }}
          >
            ☀️
          </motion.div>
          
          {/* Sun rays */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-yellow-300 rounded-full"
              style={{
                width: '4px',
                height: '60px',
                left: '50%',
                top: '50%',
                transformOrigin: '0 0',
                transform: `rotate(${i * 45}deg) translateX(40px)`,
                opacity: 0.6,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      );
    }

    // Rainbow (perfect)
    if (currentRating === 5) {
      const rainbowColors = [
        '#FF0000', '#FF7F00', '#FFFF00', 
        '#00FF00', '#0000FF', '#4B0082', '#8B00FF'
      ];
      
      return (
        <div className="absolute inset-0">
          {/* Rainbow arcs */}
          {rainbowColors.map((color, i) => {
            const size = 120 + i * 20;
            const offset = i * 5;
            return (
              <motion.div
                key={i}
                className="absolute rounded-full border-4"
                style={{
                  width: size,
                  height: size,
                  left: '50%',
                  top: '60%',
                  transform: 'translateX(-50%)',
                  borderColor: color,
                  borderTopColor: 'transparent',
                  borderLeftColor: 'transparent',
                  borderRightColor: 'transparent',
                  opacity: 0.8,
                }}
                animate={{
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            );
          })}
          
          {/* Sparkles */}
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute text-xl"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                color: rainbowColors[Math.floor(Math.random() * rainbowColors.length)],
              }}
              animate={{
                scale: [0.8, 1.2, 0.8],
                rotate: [0, 360],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              ✨
            </motion.div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
        Weather Rating
      </h2>
      <p className="text-gray-500 text-center mb-6">
        How would you rate this experience?
      </p>
      
      {/* Season selector */}
      <div className="flex justify-center gap-2 mb-6">
        {Object.entries(seasons).map(([key, season]) => (
          <motion.button
            key={key}
            onClick={() => handleSeasonChange(key)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selectedSeason === key 
                ? 'text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            style={{
              backgroundColor: selectedSeason === key ? season.color : 'transparent',
              border: `1px solid ${selectedSeason === key ? 'transparent' : '#E5E7EB'}`,
            }}
          >
            {season.name}
          </motion.button>
        ))}
      </div>
      
      {/* Weather display */}
      <div className="relative flex flex-col items-center mb-8">
        <motion.div
          className="w-48 h-48 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden mb-4"
          style={{ 
            backgroundColor: currentWeather.bgColor,
            transition: 'background-color 0.3s ease',
          }}
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {/* Weather effects */}
          {renderWeatherEffects()}
          
          {/* Weather icon */}
          <motion.div
            className="text-6xl z-10"
            animate={{
              scale: currentRating > 0 ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            {currentWeather.icon}
          </motion.div>

          {/* Weather label */}
          <motion.div
            className="mt-2 text-xl font-semibold z-10"
            style={{ color: currentWeather.color }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: 1, 
              y: 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {currentWeather.label}
          </motion.div>
          
          {/* Weather description */}
          <motion.div
            className="text-sm text-gray-600 mt-1 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {currentWeather.description}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Rating buttons */}
      <div className="flex justify-center gap-2">
        {weatherStates.map((weather, index) => {
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
                text-xl transition-all duration-200 relative overflow-hidden
                ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
                ${isActive ? 'text-white' : 'text-gray-500 bg-gray-100'}
              `}
              style={{
                backgroundColor: isActive ? weatherStates[index].color : '#F3F4F6',
                transform: isActive ? 'translateY(-5px)' : 'none',
                boxShadow: isActive 
                  ? `0 10px 15px -3px ${weatherStates[index].color}40, 0 4px 6px -2px ${weatherStates[index].color}20`
                  : '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
              }}
              disabled={disabled}
              whileHover={!disabled ? { 
                y: -5,
                scale: 1.05,
                backgroundColor: weatherStates[index].color,
                color: 'white',
              } : {}}
              whileTap={!disabled ? { scale: 0.95 } : {}}
            >
              {weather.icon}
              <span className="text-xs mt-1">{value}</span>
              
              {isActive && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          );
        })}
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
            Clear Rating
          </motion.button>
        </div>
      )}
    </div>
  );
};

render(<WeatherRating />);
