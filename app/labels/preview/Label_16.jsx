const Label_16 = ({ 
  text, 
  position = "top-right", 
  color = "#3b82f6", 
  className = "" 
}) => {
  const positions = {
    "top-left": "-rotate-45 -translate-x-1/3 -translate-y-1/2 origin-bottom-right",
    "top-right": "rotate-45 translate-x-1/3 -translate-y-1/2 origin-bottom-left",
    "bottom-left": "rotate-45 -translate-x-1/3 translate-y-1/2 origin-top-right",
    "bottom-right": "-rotate-45 translate-x-1/3 translate-y-1/2 origin-top-left",
  };

  return (
    <motion.div
      className={`
        absolute w-32 text-center py-1 text-white text-sm font-medium
        ${positions[position]} ${className}
      `}
      style={{ backgroundColor: color }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {text}
    </motion.div>
  );
};

const Demo = () => {
  const [activePosition, setActivePosition] = React.useState("top-right");
  const [labelText, setLabelText] = React.useState("New");
  const [labelColor, setLabelColor] = React.useState("#3b82f6");
  
  const positions = [
    { value: "top-right", label: "Top Right" },
    { value: "top-left", label: "Top Left" },
    { value: "bottom-right", label: "Bottom Right" },
    { value: "bottom-left", label: "Bottom Left" },
  ];
  
  const colors = [
    { value: "#3b82f6", label: "Blue" },
    { value: "#ef4444", label: "Red" },
    { value: "#10b981", label: "Green" },
    { value: "#f59e0b", label: "Amber" },
    { value: "#8b5cf6", label: "Purple" },
  ];
  
  return (
    <div className="space-y-6">
      <div className="relative w-64 h-64 border-2 border-gray-200 rounded-lg mx-auto">
        <Label_16 
          text={labelText} 
          position={activePosition} 
          color={labelColor} 
        />
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          Product Card
        </div>
      </div>
      
      <div className="space-y-4 max-w-md mx-auto">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
          <div className="grid grid-cols-2 gap-2">
            {positions.map((pos) => (
              <button
                key={pos.value}
                onClick={() => setActivePosition(pos.value)}
                className={`px-3 py-2 text-sm rounded-md ${
                  activePosition === pos.value 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {pos.label}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Text</label>
          <input
            type="text"
            value={labelText}
            onChange={(e) => setLabelText(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            maxLength={10}
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
