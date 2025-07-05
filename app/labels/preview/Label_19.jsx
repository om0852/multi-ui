const Label_19 = ({ text, color = "#3b82f6", className = "" }) => {
  return (
    <motion.div
      className={`
        relative inline-flex items-center px-4 py-1.5
        rounded-md ${className}
      `}
      whileHover="hover"
    >
      <motion.span
        className="absolute inset-0 rounded-md"
        style={{
          border: `2px solid ${color}`,
        }}
        variants={{
          hover: {
            scale: 1.05,
            boxShadow: `0 0 8px ${color}`,
          },
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-md overflow-hidden"
        style={{ border: `2px solid ${color}`, background: 'transparent' }}
      >
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{ backgroundColor: color }}
          variants={{
            hover: {
              x: ["100%", "-100%"],
            },
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </motion.div>
      <span className="relative text-sm font-medium" style={{ color }}>
        {text}
      </span>
    </motion.div>
  );
};

const Demo = () => {
  const [activeColor, setActiveColor] = React.useState("#3b82f6");
  const [labelText, setLabelText] = React.useState("Hover me");
  
  const colors = [
    { value: "#3b82f6", label: "Blue" },
    { value: "#10b981", label: "Green" },
    { value: "#f59e0b", label: "Amber" },
    { value: "#ef4444", label: "Red" },
    { value: "#8b5cf6", label: "Purple" },
  ];
  
  const presets = [
    { text: "Hover me", color: "#3b82f6" },
    { text: "Animated", color: "#10b981" },
    { text: "Border", color: "#f59e0b" },
    { text: "Effect", color: "#8b5cf6" },
  ];
  
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-4 justify-center">
        <Label_19 text={labelText} color={activeColor} />
      </div>
      
      <div className="max-w-md mx-auto p-4 bg-gray-50 rounded-lg space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Text
          </label>
          <input
            type="text"
            value={labelText}
            onChange={(e) => setLabelText(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            maxLength={20}
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
                onClick={() => setActiveColor(color.value)}
                className={`w-8 h-8 rounded-full ${activeColor === color.value ? 'ring-2 ring-offset-2 ring-indigo-500' : ''}`}
                style={{ backgroundColor: color.value }}
                title={color.label}
              />
            ))}
          </div>
        </div>
        
        <div className="pt-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Presets
          </label>
          <div className="flex flex-wrap gap-2">
            {presets.map((preset, index) => (
              <button
                key={index}
                onClick={() => {
                  setLabelText(preset.text);
                  setActiveColor(preset.color);
                }}
                className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-md hover:bg-gray-50"
              >
                {preset.text}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {presets.map((preset, index) => (
          <Label_19 
            key={index} 
            text={preset.text} 
            color={preset.color} 
            className="m-1"
          />
        ))}
      </div>
    </div>
  );
};

render(<Demo />);
