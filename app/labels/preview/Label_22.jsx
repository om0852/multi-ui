const Label_22 = ({ text, color = "#3b82f6", className = "" }) => {
  return (
    <motion.div
      className={`
        relative inline-flex items-center px-4 py-1.5
        rounded-full overflow-hidden ${className}
      `}
      style={{ backgroundColor: color }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`,
        }}
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <span className="relative text-sm font-medium text-white">
        {text}
      </span>
    </motion.div>
  );
};

const Demo = () => {
  const [labelText, setLabelText] = React.useState("Premium");
  const [labelColor, setLabelColor] = React.useState("#3b82f6");
  const [isShimmering, setIsShimmering] = React.useState(true);
  
  const colors = [
    { value: "#3b82f6", label: "Blue" },
    { value: "#10b981", label: "Green" },
    { value: "#f59e0b", label: "Amber" },
    { value: "#ef4444", label: "Red" },
    { value: "#8b5cf6", label: "Purple" },
  ];
  
  const presets = [
    { text: "Premium", color: "#3b82f6" },
    { text: "Special", color: "#10b981" },
    { text: "Limited", color: "#f59e0b" },
    { text: "New", color: "#ef4444" },
    { text: "Pro", color: "#8b5cf6" },
  ];
  
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-4 p-6 bg-gray-50 rounded-lg">
        <div className="relative">
          <div
            className={`
              relative inline-flex items-center px-4 py-1.5
              rounded-full overflow-hidden
            `}
            style={{ 
              backgroundColor: labelColor,
              filter: isShimmering ? 'none' : 'none'
            }}
          >
            {isShimmering && (
              <motion.div
                className="absolute inset-0 w-full h-full"
                style={{
                  background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)`,
                }}
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            )}
            <span className="relative text-sm font-medium text-white">
              {labelText}
            </span>
          </div>
        </div>
      </div>
      
      <div className="max-w-md mx-auto space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Customize Label</h3>
          
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Text
              </label>
              <input
                type="text"
                value={labelText}
                onChange={(e) => setLabelText(e.target.value)}
                className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                maxLength={15}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Color
              </label>
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
            
            <div className="flex items-center pt-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isShimmering}
                  onChange={() => setIsShimmering(!isShimmering)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">Enable shimmer effect</span>
              </label>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Presets</h3>
          <div className="flex flex-wrap gap-2">
            {presets.map((preset, index) => (
              <button
                key={index}
                onClick={() => {
                  setLabelText(preset.text);
                  setLabelColor(preset.color);
                }}
                className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-md hover:bg-gray-50"
              >
                {preset.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

render(<Demo />);
