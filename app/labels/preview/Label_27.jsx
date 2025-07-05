const Label_27 = ({ text, badgeText, className = "", badgeColor = "#ef4444" }) => {
  return (
    <motion.div
      className={`relative inline-flex ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      <span className="px-4 py-1.5 bg-white rounded-md shadow-sm text-sm font-medium text-gray-700">
        {text}
      </span>
      <motion.div
        className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full"
        style={{ backgroundColor: badgeColor }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 25,
        }}
      >
        <span className="text-xs font-bold text-white">
          {badgeText}
        </span>
      </motion.div>
    </motion.div>
  );
};

const Demo = () => {
  const [text, setText] = React.useState("Notifications");
  const [badgeText, setBadgeText] = React.useState("3");
  const [badgeColor, setBadgeColor] = React.useState("#ef4444");
  
  const colorPresets = [
    { value: "#ef4444", label: "Red" },
    { value: "#3b82f6", label: "Blue" },
    { value: "#10b981", label: "Green" },
    { value: "#f59e0b", label: "Amber" },
    { value: "#8b5cf6", label: "Purple" },
  ];
  
  const presets = [
    { text: "Messages", badgeText: "3", color: "#3b82f6" },
    { text: "Notifications", badgeText: "99+", color: "#ef4444" },
    { text: "Updates", badgeText: "New", color: "#10b981" },
    { text: "Alerts", badgeText: "!", color: "#f59e0b" },
  ];
  
  const applyPreset = (preset) => {
    setText(preset.text);
    setBadgeText(preset.badgeText);
    setBadgeColor(preset.color);
  };
  
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-4 p-6 bg-gray-50 rounded-lg">
        <Label_27 
          text={text} 
          badgeText={badgeText}
          badgeColor={badgeColor}
        />
      </div>
      
      <div className="max-w-md mx-auto space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Customize Label</h3>
          
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Label Text
              </label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                maxLength={20}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Badge Text
                </label>
                <input
                  type="text"
                  value={badgeText}
                  onChange={(e) => setBadgeText(e.target.value)}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  maxLength={10}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Badge Color
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={badgeColor}
                    onChange={(e) => setBadgeColor(e.target.value)}
                    className="w-10 h-10 p-1 border border-gray-300 rounded"
                  />
                  <span className="text-xs font-mono">{badgeColor}</span>
                </div>
              </div>
            </div>
            
            <div className="pt-2">
              <div className="flex flex-wrap gap-2">
                {colorPresets.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setBadgeColor(color.value)}
                    className={`w-6 h-6 rounded-full ${badgeColor === color.value ? 'ring-2 ring-offset-1 ring-indigo-500' : ''}`}
                    style={{ backgroundColor: color.value }}
                    title={color.label}
                  />
                ))}
              </div>
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
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{preset.text}</span>
                  <span 
                    className="text-xs font-bold px-1.5 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: preset.color }}
                  >
                    {preset.badgeText}
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {preset.color}
                </div>
              </button>
            ))}
          </div>
        </div>
        
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Preview</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {presets.map((preset, index) => (
              <div key={index} className="inline-block">
                <Label_27 
                  text={preset.text} 
                  badgeText={preset.badgeText}
                  badgeColor={preset.color}
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
