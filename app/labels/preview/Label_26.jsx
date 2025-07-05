const Label_26 = ({ 
  text, 
  startColor = "#3b82f6", 
  endColor = "#8b5cf6", 
  className = "" 
}) => {
  return (
    <motion.div
      className={`
        relative inline-flex items-center px-4 py-1.5
        rounded-md ${className}
      `}
      whileHover={{ scale: 1.05 }}
    >
      <div
        className="absolute inset-0 rounded-md"
        style={{
          background: `linear-gradient(to right, ${startColor}, ${endColor})`,
          padding: "2px",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          maskComposite: "exclude",
        }}
      />
      <motion.div
        className="relative px-4 py-1.5 bg-white rounded-md"
        style={{
          background: "white",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          backgroundImage: `linear-gradient(to right, ${startColor}, ${endColor})`,
        }}
      >
        <span className="text-sm font-medium text-transparent">
          {text}
        </span>
      </motion.div>
    </motion.div>
  );
};

const Demo = () => {
  const [text, setText] = React.useState("Gradient");
  const [startColor, setStartColor] = React.useState("#3b82f6");
  const [endColor, setEndColor] = React.useState("#8b5cf6");
  
  const colorPresets = [
    { start: "#3b82f6", end: "#8b5cf6", label: "Blue-Purple" },
    { start: "#10b981", end: "#059669", label: "Green" },
    { start: "#f59e0b", end: "#dc2626", label: "Amber-Red" },
    { start: "#ec4899", end: "#8b5cf6", label: "Pink-Purple" },
    { start: "#06b6d4", end: "#3b82f6", label: "Cyan-Blue" },
  ];
  
  const textPresets = ["Gradient", "Border", "Effect", "Label", "Custom"];
  
  const applyPreset = (preset) => {
    setStartColor(preset.start);
    setEndColor(preset.end);
  };
  
  const applyTextPreset = (presetText) => {
    setText(presetText);
  };
  
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-4 p-6 bg-gray-50 rounded-lg">
        <Label_26 
          text={text} 
          startColor={startColor} 
          endColor={endColor} 
        />
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
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                maxLength={20}
              />
              <div className="flex flex-wrap gap-1 mt-1">
                {textPresets.map((preset, index) => (
                  <button
                    key={index}
                    onClick={() => applyTextPreset(preset)}
                    className={`px-2 py-0.5 text-xs rounded ${
                      text === preset 
                        ? 'bg-indigo-100 text-indigo-700' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Color
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={startColor}
                    onChange={(e) => setStartColor(e.target.value)}
                    className="w-10 h-10 p-1 border border-gray-300 rounded"
                  />
                  <span className="text-xs font-mono">{startColor}</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Color
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={endColor}
                    onChange={(e) => setEndColor(e.target.value)}
                    className="w-10 h-10 p-1 border border-gray-300 rounded"
                  />
                  <span className="text-xs font-mono">{endColor}</span>
                </div>
              </div>
            </div>
            
            <div className="pt-2">
              <div 
                className="w-full h-2 rounded-full"
                style={{
                  background: `linear-gradient(to right, ${startColor}, ${endColor})`
                }}
              />
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Color Presets</h3>
          <div className="grid grid-cols-2 gap-2">
            {colorPresets.map((preset, index) => (
              <button
                key={index}
                onClick={() => applyPreset(preset)}
                className="p-2 rounded-md border border-gray-200 hover:border-indigo-300"
              >
                <div 
                  className="w-full h-2 rounded-full mb-1"
                  style={{
                    background: `linear-gradient(to right, ${preset.start}, ${preset.end})`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-600">
                  <span>{preset.label}</span>
                  <span className="font-mono">→</span>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Preview</h3>
          <div className="flex flex-wrap gap-2">
            {colorPresets.map((preset, index) => (
              <div key={index} className="inline-block">
                <Label_26 
                  text={text || "Label"} 
                  startColor={preset.start} 
                  endColor={preset.end}
                  className="m-0.5"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

render(<Demo />);
