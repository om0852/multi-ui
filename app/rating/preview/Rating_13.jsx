const { motion } = require('framer-motion');
const React = require('react');

const PieRating = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
  size = 200,
  colors = ["#EF4444", "#F59E0B", "#FCD34D", "#34D399", "#3B82F6"],
}) => {
  const [rating, setRating] = React.useState(initialRating);
  const [hoveredRating, setHoveredRating] = React.useState(null);
  const [selectedColor, setSelectedColor] = React.useState(colors);
  
  const colorPresets = [
    { name: "Rainbow", colors: ["#EF4444", "#F59E0B", "#FCD34D", "#34D399", "#3B82F6"] },
    { name: "Warm", colors: ["#FECACA", "#FCA5A5", "#F87171", "#EF4444", "#DC2626"] },
    { name: "Cool", colors: ["#BFDBFE", "#93C5FD", "#60A5FA", "#3B82F6", "#2563EB"] },
    { name: "Nature", colors: ["#86EFAC", "#4ADE80", "#22C55E", "#16A34A", "#15803D"] },
    { name: "Pastel", colors: ["#FBCFE8", "#F9A8D4", "#F472B6", "#EC4899", "#DB2777"] },
  ];

  const handleRating = (value) => {
    if (disabled) return;
    setRating(value);
    if (onRatingChange) onRatingChange(value);
  };

  const handleColorChange = (colorSet) => {
    setSelectedColor(colorSet);
  };

  const center = size / 2;
  const radius = (size - 40) / 2;
  const sliceAngle = (2 * Math.PI) / max;

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Pie Rating
      </h2>
      
      <div className="relative flex flex-col items-center justify-center mb-8">
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className={`mx-auto ${disabled ? "opacity-50" : ""}`}
        >
          {/* Pie slices */}
          {Array.from({ length: max }, (_, index) => {
            const value = index + 1;
            const isActive = (hoveredRating || rating) >= value;
            const startAngle = index * sliceAngle - Math.PI / 2;
            const endAngle = startAngle + sliceAngle;

            const x1 = center + radius * Math.cos(startAngle);
            const y1 = center + radius * Math.sin(startAngle);
            const x2 = center + radius * Math.cos(endAngle);
            const y2 = center + radius * Math.sin(endAngle);

            const largeArcFlag = sliceAngle > Math.PI ? 1 : 0;

            const pathData = `
              M ${center} ${center}
              L ${x1} ${y1}
              A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
              Z
            `;

            return (
              <motion.path
                key={index}
                d={pathData}
                fill={selectedColor[index % selectedColor.length]}
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0.15,
                  scale: isActive ? 1.05 : 1,
                  filter: isActive ? 'drop-shadow(0 0 8px rgba(0,0,0,0.2))' : 'none',
                }}
                whileHover={!disabled ? { 
                  scale: 1.1, 
                  opacity: 0.8,
                  filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))',
                } : {}}
                transition={{ 
                  duration: 0.3,
                  type: 'spring',
                  stiffness: 300,
                  damping: 15,
                }}
                style={{ transformOrigin: "center" }}
                onClick={() => handleRating(value)}
                onMouseEnter={() => !disabled && setHoveredRating(value)}
                onMouseLeave={() => !disabled && setHoveredRating(null)}
                className={disabled ? "cursor-not-allowed" : "cursor-pointer"}
              />
            );
          })}

          {/* Center circle with glow */}
          <motion.circle
            cx={center}
            cy={center}
            r={radius * 0.5}
            fill="white"
            className="drop-shadow-lg"
            initial={false}
            animate={{
              scale: rating > 0 ? [1, 1.05, 1] : 1,
            }}
            transition={{
              duration: 0.5,
              repeat: rating > 0 ? 1 : 0,
            }}
          />

          {/* Rating display */}
          <motion.text
            x={center}
            y={center}
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-4xl font-bold select-none"
            fill="#1F2937"
            initial={false}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {hoveredRating || rating || '?'}
          </motion.text>
          
          {/* Max rating */}
          <text
            x={center}
            y={center + 30}
            textAnchor="middle"
            className="text-sm font-medium text-gray-500 select-none"
          >
            out of {max}
          </text>
        </svg>
        
        {/* Rating label */}
        {rating > 0 && (
          <motion.div 
            className="mt-4 px-4 py-2 bg-gray-50 rounded-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-sm font-medium text-gray-700">
              You rated this {rating} out of {max}
            </span>
          </motion.div>
        )}
      </div>
      
      {!disabled && rating > 0 && (
        <div className="flex justify-center">
          <motion.button
            onClick={() => {
              setRating(0);
              setHoveredRating(null);
              if (onRatingChange) onRatingChange(0);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Reset Rating
          </motion.button>
        </div>
      )}
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-500 mb-3 text-center">
          Color Presets:
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {colorPresets.map((preset, index) => (
            <motion.button
              key={index}
              onClick={() => handleColorChange(preset.colors)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                JSON.stringify(selectedColor) === JSON.stringify(preset.colors)
                  ? 'text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              style={{
                background: JSON.stringify(selectedColor) === JSON.stringify(preset.colors)
                  ? `linear-gradient(90deg, ${preset.colors.join(', ')})`
                  : 'transparent',
                border: `1px solid ${
                  JSON.stringify(selectedColor) === JSON.stringify(preset.colors)
                    ? 'transparent'
                    : '#E5E7EB'
                }`,
              }}
            >
              {preset.name}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

render(<PieRating />);
