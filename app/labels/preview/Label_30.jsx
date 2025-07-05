const Label_30 = ({ text, color = "#3b82f6", className = "", strength = 0.2 }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const ref = React.useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const x = (clientX - centerX) * strength;
    const y = (clientY - centerY) * strength;

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={`
        inline-flex items-center px-4 py-1.5
        rounded-md cursor-pointer ${className}
      `}
      style={{ backgroundColor: color }}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span className="text-sm font-medium text-white">
        {text}
      </span>
    </motion.div>
  );
};

const Demo = () => {
  const [text, setText] = React.useState("Magnetic");
  const [color, setColor] = React.useState("#3b82f6");
  const [strength, setStrength] = React.useState(0.2);
  const [isMagnetic, setIsMagnetic] = React.useState(true);
  
  const colorPresets = [
    { value: "#3b82f6", label: "Blue" },
    { value: "#10b981", label: "Green" },
    { value: "#f59e0b", label: "Amber" },
    { value: "#ef4444", label: "Red" },
    { value: "#8b5cf6", label: "Purple" },
  ];
  
  const textPresets = ["Magnetic", "Interactive", "Movement", "Try Me!", "Custom"];
  
  const presets = [
    { text: "Magnetic", color: "#3b82f6", strength: 0.2 },
    { text: "Interactive", color: "#10b981", strength: 0.3 },
    { text: "Movement", color: "#f59e0b", strength: 0.25 },
    { text: "Try Me!", color: "#8b5cf6", strength: 0.35 },
  ];
  
  const applyPreset = (preset) => {
    setText(preset.text);
    setColor(preset.color);
    setStrength(preset.strength);
  };
  
  const applyTextPreset = (presetText) => {
    setText(presetText);
  };
  
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-4 p-6 bg-gray-50 rounded-lg">
        {isMagnetic ? (
          <Label_30 
            text={text}
            color={color}
            strength={strength}
          />
        ) : (
          <div 
            className="inline-flex items-center px-4 py-1.5 rounded-md"
            style={{ backgroundColor: color }}
          >
            <span className="text-sm font-medium text-white">
              {text}
            </span>
          </div>
        )}
      </div>
      
      <div className="max-w-md mx-auto space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Customize Label</h3>
          
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Text
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  maxLength={20}
                />
                <div className="flex gap-1">
                  {textPresets.map((preset, index) => (
                    <button
                      key={index}
                      onClick={() => applyTextPreset(preset)}
                      className={`px-2 py-1 text-xs rounded ${
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
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Color
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-10 h-10 p-1 border border-gray-300 rounded"
                  />
                  <span className="text-xs font-mono">{color}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-1">
                  {colorPresets.map((c) => (
                    <button
                      key={c.value}
                      onClick={() => setColor(c.value)}
                      className={`w-6 h-6 rounded-full ${color === c.value ? 'ring-2 ring-offset-1 ring-indigo-500' : ''}`}
                      style={{ backgroundColor: c.value }}
                      title={c.label}
                    />
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Magnet Strength: {strength.toFixed(2)}
                </label>
                <input
                  type="range"
                  min="0.05"
                  max="0.5"
                  step="0.05"
                  value={strength}
                  onChange={(e) => setStrength(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Subtle</span>
                  <span>Strong</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-2">
              <label className="text-sm font-medium text-gray-700">
                Magnetic Effect
              </label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={isMagnetic}
                  onChange={() => setIsMagnetic(!isMagnetic)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Presets</h3>
          <div className="grid grid-cols-2 gap-2">
            {presets.map((preset, index) => (
              <button
                key={index}
                onClick={() => applyPreset(preset)}
                className="p-2 rounded-md border border-gray-200 hover:border-indigo-300 text-left"
              >
                <div 
                  className="w-full h-2 rounded-full mb-1.5"
                  style={{ 
                    backgroundColor: preset.color,
                    opacity: 0.8
                  }}
                />
                <div className="text-sm font-medium">{preset.text}</div>
                <div className="text-xs text-gray-500">
                  Strength: {(preset.strength * 100).toFixed(0)}%
                </div>
              </button>
            ))}
          </div>
        </div>
        
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-3">How to Use</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>1. Hover over the label to see the magnetic effect</p>
            <p>2. Adjust the strength to control the movement intensity</p>
            <p>3. Toggle the magnetic effect on/off to see the difference</p>
            <p>4. Try different colors and text options</p>
          </div>
        </div>
      </div>
    </div>
  );
};

render(<Demo />);
