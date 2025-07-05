const Label_28 = ({ text, color = "#3b82f6", className = "", wave = false }) => {
  return (
    <motion.div
      className={`
        inline-flex items-center px-4 py-1.5 bg-white
        rounded-md shadow-sm ${className}
      `}
      whileHover={wave ? "hover" : ""}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="text-sm font-medium"
          style={{ color }}
          variants={{
            hover: {
              y: [0, -4, 0],
              transition: {
                duration: 0.3,
                delay: i * 0.05,
                repeat: Infinity,
              },
            },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Demo = () => {
  const [text, setText] = React.useState("Wavy Text");
  const [color, setColor] = React.useState("#3b82f6");
  const [wave, setWave] = React.useState(true);
  
  const colorPresets = [
    { value: "#3b82f6", label: "Blue" },
    { value: "#10b981", label: "Green" },
    { value: "#f59e0b", label: "Amber" },
    { value: "#ef4444", label: "Red" },
    { value: "#8b5cf6", label: "Purple" },
  ];
  
  const textPresets = ["Wavy Text", "Hover me!", "Animation", "Try it out!", "Custom"];
  
  const applyTextPreset = (preset) => {
    setText(preset);
  };
  
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-4 p-6 bg-gray-50 rounded-lg">
        <Label_28 
          text={text} 
          color={color}
          wave={wave}
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
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Text Color
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
            
            <div className="flex items-center justify-between pt-2">
              <label className="text-sm font-medium text-gray-700">
                Wavy Animation
              </label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={wave}
                  onChange={() => setWave(!wave)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Preview</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <Label_28 text="Hover" color="#3b82f6" wave={true} />
            <Label_28 text="Me" color="#10b981" wave={true} />
            <Label_28 text="To" color="#f59e0b" wave={true} />
            <Label_28 text="See" color="#ef4444" wave={true} />
            <Label_28 text="Effect" color="#8b5cf6" wave={true} />
          </div>
        </div>
        
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Animation Demo</h3>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">Hover over the text below:</p>
              <div className="p-4 bg-gray-50 rounded-md">
                <Label_28 
                  text="This is a wavy text animation on hover!" 
                  color="#3b82f6"
                  wave={true}
                  className="text-base"
                />
              </div>
            </div>
            
            <div>
              <p className="text-xs text-gray-500 mb-1">Static version (animation disabled):</p>
              <div className="p-4 bg-gray-50 rounded-md">
                <Label_28 
                  text="This text doesn't animate on hover" 
                  color="#10b981"
                  wave={false}
                  className="text-base"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

render(<Demo />);
