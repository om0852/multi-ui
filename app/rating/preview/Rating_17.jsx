const { motion } = require('framer-motion');
const React = require('react');

const GaugeRating = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
  size = 200,
  gaugeColor = "#6366F1",
}) => {
  const [rating, setRating] = React.useState(initialRating);
  const [hoveredRating, setHoveredRating] = React.useState(null);
  const [selectedTheme, setSelectedTheme] = React.useState({
    name: "Indigo",
    color: "#6366F1",
    needle: "#EF4444"
  });
  
  const themes = [
    { name: "Indigo", color: "#6366F1", needle: "#EF4444" },
    { name: "Emerald", color: "#10B981", needle: "#F59E0B" },
    { name: "Rose", color: "#F43F5E", needle: "#3B82F6" },
    { name: "Amber", color: "#F59E0B", needle: "#8B5CF6" },
    { name: "Violet", color: "#8B5CF6", needle: "#EC4899" },
  ];

  const center = size / 2;
  const radius = (size - 40) / 2;
  const startAngle = -135;
  const endAngle = 135;
  const angleRange = endAngle - startAngle;
  const currentAngle = startAngle + (angleRange * (hoveredRating ?? rating)) / max;
  const currentValue = hoveredRating ?? rating;
  const percentage = (currentValue / max) * 100;

  const handleRating = (value) => {
    if (disabled) return;
    setRating(value);
    if (onRatingChange) onRatingChange(value);
  };

  // Create gauge ticks
  const ticks = Array.from({ length: max + 1 }, (_, i) => {
    const angle = startAngle + (angleRange * i) / max;
    const radian = (angle * Math.PI) / 180;
    const outerX = center + radius * Math.cos(radian);
    const outerY = center + radius * Math.sin(radian);
    const innerX = center + (radius - 15) * Math.cos(radian);
    const innerY = center + (radius - 15) * Math.sin(radian);

    return { outerX, outerY, innerX, innerY, value: i };
  });

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };

  // Generate gradient ID
  const gradientId = `gauge-gradient-${selectedTheme.color.slice(1)}`;

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Gauge Rating
      </h2>
      
      <div className="relative flex flex-col items-center">
        <svg
          width={size}
          height={size * 0.7} // Make it a bit shorter to fit better
          viewBox={`0 0 ${size} ${size}`}
          className={`mx-auto ${disabled ? "opacity-50" : ""}`}
        >
          {/* Gradient definition */}
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor={selectedTheme.color} />
            </linearGradient>
          </defs>
          
          {/* Background arc */}
          <path
            d={`
              M ${center + radius * Math.cos((startAngle * Math.PI) / 180)}
              ${center + radius * Math.sin((startAngle * Math.PI) / 180)}
              A ${radius} ${radius} 0 1 1
              ${center + radius * Math.cos((endAngle * Math.PI) / 180)}
              ${center + radius * Math.sin((endAngle * Math.PI) / 180)}
            `}
            fill="none"
            stroke="#F3F4F6"
            strokeWidth="24"
            strokeLinecap="round"
            className="drop-shadow-sm"
          />

          {/* Active arc with gradient */}
          <motion.path
            d={`
              M ${center + radius * Math.cos((startAngle * Math.PI) / 180)}
              ${center + radius * Math.sin((startAngle * Math.PI) / 180)}
              A ${radius} ${radius} 0 ${currentAngle > 0 ? 1 : 0} 1
              ${center + radius * Math.cos((currentAngle * Math.PI) / 180)}
              ${center + radius * Math.sin((currentAngle * Math.PI) / 180)}
            `}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="24"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: (hoveredRating ?? rating) / max,
              opacity: 1,
            }}
            transition={{ 
              type: "spring", 
              stiffness: 50, 
              damping: 15,
              mass: 1,
            }}
            className="drop-shadow-md"
          />

          {/* Glow effect */}
          {currentValue > 0 && (
            <motion.circle
              cx={center}
              cy={center}
              r={radius - 12}
              fill={selectedTheme.color}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.1, 0],
                scale: [1, 1.2, 1.4],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{ filter: 'blur(10px)' }}
            />
          )}

          {/* Ticks and labels */}
          {ticks.map(({ outerX, outerY, innerX, innerY, value }) => {
            const isActive = value <= currentValue;
            const angle = startAngle + (angleRange * value) / max;
            const labelRadius = radius - 35;
            const labelX = center + labelRadius * Math.cos((angle * Math.PI) / 180);
            const labelY = center + labelRadius * Math.sin((angle * Math.PI) / 180);
            
            return (
              <g key={value}>
                <line
                  x1={innerX}
                  y1={innerY}
                  x2={outerX}
                  y2={outerY}
                  stroke={isActive ? selectedTheme.color : "#E5E7EB"}
                  strokeWidth={isActive ? 3 : 1.5}
                  className="transition-colors duration-300"
                />
                <text
                  x={labelX}
                  y={labelY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className={`text-sm font-semibold transition-all duration-300 ${
                    isActive ? 'scale-110' : ''
                  }`}
                  fill={isActive ? selectedTheme.color : "#9CA3AF"}
                >
                  {value}
                </text>
              </g>
            );
          })}

          {/* Needle */}
          <motion.g
            animate={{ 
              rotate: currentAngle,
              transformOrigin: `${center}px ${center}px`,
            }}
            transition={{ 
              type: "spring", 
              stiffness: 50, 
              damping: 15,
              mass: 1,
            }}
          >
            <line
              x1={center}
              y1={center}
              x2={center}
              y2={center - radius + 20}
              stroke={selectedTheme.needle}
              strokeWidth="4"
              strokeLinecap="round"
              className="drop-shadow-md"
            />
            <circle
              cx={center}
              cy={center}
              r="10"
              fill="white"
              stroke={selectedTheme.needle}
              strokeWidth="2"
              className="drop-shadow-md"
            />
            <circle
              cx={center}
              cy={center}
              r="6"
              fill={selectedTheme.needle}
              className="animate-pulse"
              style={{ animationDuration: '2s' }}
            />
          </motion.g>

          {/* Center value display */}
          <g>
            <circle
              cx={center}
              cy={center}
              r={radius * 0.4}
              fill="white"
              className="drop-shadow-md"
            />
            <text
              x={center}
              y={center - 15}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-4xl font-bold"
              fill={selectedTheme.color}
            >
              {currentValue}
            </text>
            <text
              x={center}
              y={center + 15}
              textAnchor="middle"
              className="text-sm font-medium text-gray-500"
            >
              out of {max}
            </text>
          </g>
        </svg>

        {/* Interactive buttons */}
        <div className="flex justify-center gap-1 mt-6 mb-4">
          {Array.from({ length: max + 1 }, (_, i) => {
            const isActive = (hoveredRating ?? rating) >= i;
            const bgColor = isActive 
              ? `hsl(${210 + (i * (120 / max))}, 76%, 60%)` 
              : "#F3F4F6";
              
            return (
              <motion.button
                key={i}
                onClick={() => handleRating(i)}
                whileHover={!disabled ? { 
                  scale: 1.15,
                  y: -5,
                  backgroundColor: bgColor,
                  color: "white"
                } : {}}
                whileTap={!disabled ? { scale: 0.95 } : {}}
                onMouseEnter={() => !disabled && setHoveredRating(i)}
                onMouseLeave={() => !disabled && setHoveredRating(null)}
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  text-sm font-medium border-2 transition-all duration-200
                  ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
                  ${isActive ? "text-white border-transparent" : "text-gray-600 border-gray-200"}
                `}
                style={{
                  backgroundColor: isActive ? bgColor : "#FFFFFF",
                  zIndex: isActive ? 10 : 1,
                  boxShadow: isActive 
                    ? `0 4px 6px -1px ${bgColor}80, 0 2px 4px -1px ${bgColor}40`
                    : '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                }}
                disabled={disabled}
              >
                {i}
              </motion.button>
            );
          })}
        </div>
        
        {/* Percentage indicator */}
        <div className="w-full max-w-xs bg-gray-100 rounded-full h-2.5 mb-8 overflow-hidden">
          <motion.div 
            className="h-full rounded-full"
            initial={{ width: '0%' }}
            animate={{ 
              width: `${percentage}%`,
              backgroundColor: selectedTheme.color,
            }}
            transition={{ 
              type: "spring", 
              stiffness: 50, 
              damping: 15,
            }}
          />
        </div>
        
        {!disabled && rating > 0 && (
          <motion.button
            onClick={() => {
              setRating(0);
              setHoveredRating(null);
              if (onRatingChange) onRatingChange(0);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-1.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Reset Rating
          </motion.button>
        )}
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-500 mb-3 text-center">
          Gauge Theme:
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {themes.map((theme) => (
            <motion.button
              key={theme.name}
              onClick={() => handleThemeChange(theme)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                selectedTheme.name === theme.name
                  ? 'text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              style={{
                backgroundColor: selectedTheme.name === theme.name ? theme.color : 'transparent',
                border: `1px solid ${
                  selectedTheme.name === theme.name ? 'transparent' : '#E5E7EB'
                }`,
              }}
            >
              {theme.name}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

render(<GaugeRating />);
