const Label_17 = ({ text, dotCount = 3, color = "#3b82f6", className = "" }) => {
  return (
    <motion.div
      className={`
        inline-flex items-center gap-2 px-3 py-1 bg-white
        rounded-full shadow-sm ${className}
      `}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex gap-0.5">
        {[...Array(dotCount)].map((_, i) => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: color }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
      <span className="text-sm font-medium" style={{ color }}>
        {text}
      </span>
    </motion.div>
  );
};

const Demo = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [dotCount, setDotCount] = React.useState(3);
  const [labelColor, setLabelColor] = React.useState("#3b82f6");
  
  const colors = [
    { value: "#3b82f6", label: "Blue" },
    { value: "#10b981", label: "Green" },
    { value: "#f59e0b", label: "Amber" },
    { value: "#ef4444", label: "Red" },
    { value: "#8b5cf6", label: "Purple" },
  ];
  
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-4 justify-center">
        <Label_17 
          text={isLoading ? "Processing" : "Complete!"} 
          dotCount={isLoading ? dotCount : 0} 
          color={labelColor} 
        />
      </div>
      
      <div className="max-w-md mx-auto space-y-4 p-4 bg-gray-50 rounded-lg">
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={isLoading}
              onChange={() => setIsLoading(!isLoading)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-700">Show loading animation</span>
          </label>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of dots: {dotCount}
          </label>
          <input
            type="range"
            min="1"
            max="5"
            value={dotCount}
            onChange={(e) => setDotCount(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            disabled={!isLoading}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <button
                key={color.value}
                onClick={() => setLabelColor(color.value)}
                className={`w-8 h-8 rounded-full ${labelColor === color.value ? 'ring-2 ring-offset-2 ring-indigo-500' : ''}`}
                style={{ backgroundColor: color.value }}
                title={color.label}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

render(<Demo />);
