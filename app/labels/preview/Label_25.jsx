const Label_25 = ({ text, value, maxValue, className = "", color = "#3b82f6" }) => {
  const percentage = (value / maxValue) * 100;
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      className={`
        inline-flex items-center gap-3 px-4 py-2 bg-white
        rounded-full shadow-sm ${className}
      `}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative w-12 h-12">
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="24"
            cy="24"
            r={radius}
            stroke="#e2e8f0"
            strokeWidth="4"
            fill="none"
          />
          <motion.circle
            cx="24"
            cy="24"
            r={radius}
            stroke={color}
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-semibold text-gray-700">
            {Math.round(percentage)}%
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-900">{text}</span>
        <span className="text-xs text-gray-500">
          {value} of {maxValue}
        </span>
      </div>
    </motion.div>
  );
};

const Demo = () => {
  const [value, setValue] = React.useState(75);
  const [maxValue, setMaxValue] = React.useState(100);
  const [text, setText] = React.useState("Progress");
  const [color, setColor] = React.useState("#3b82f6");
  
  const colors = [
    { value: "#3b82f6", label: "Blue" },
    { value: "#10b981", label: "Green" },
    { value: "#f59e0b", label: "Amber" },
    { value: "#ef4444", label: "Red" },
    { value: "#8b5cf6", label: "Purple" },
  ];
  
  const presets = [
    { text: "Progress", value: 75, maxValue: 100, color: "#3b82f6" },
    { text: "Storage", value: 45, maxValue: 100, color: "#10b981" },
    { text: "Tasks", value: 8, maxValue: 10, color: "#f59e0b" },
    { text: "Goals", value: 3, maxValue: 5, color: "#ef4444" },
  ];
  
  const applyPreset = (preset) => {
    setText(preset.text);
    setValue(preset.value);
    setMaxValue(preset.maxValue);
    setColor(preset.color);
  };
  
  const percentage = (value / maxValue) * 100;
  
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-4 p-6 bg-gray-50 rounded-lg">
        <Label_25 
          text={text} 
          value={value} 
          maxValue={maxValue} 
          color={color}
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
                  Value
                </label>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(parseInt(e.target.value) || 0)}
                  min={0}
                  max={maxValue}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Max Value
                </label>
                <input
                  type="number"
                  value={maxValue}
                  onChange={(e) => setMaxValue(parseInt(e.target.value) || 1)}
                  min={1}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Progress Color
              </label>
              <div className="flex flex-wrap gap-2">
                {colors.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => setColor(c.value)}
                    className={`w-8 h-8 rounded-full ${color === c.value ? 'ring-2 ring-offset-2 ring-indigo-500' : ''}`}
                    style={{ backgroundColor: c.value }}
                    title={c.label}
                  />
                ))}
              </div>
            </div>
            
            <div className="pt-2">
              <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                <span>0%</span>
                <span>{Math.round(percentage)}%</span>
                <span>100%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div 
                  className="h-2 rounded-full" 
                  style={{ 
                    backgroundColor: color,
                    width: `${Math.min(100, Math.max(0, percentage))}%`
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, Math.max(0, percentage))}%` }}
                  transition={{ duration: 0.5 }}
                />
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
                className="px-3 py-2 text-sm bg-white border border-gray-200 rounded-md hover:bg-gray-50 text-left"
              >
                <div className="flex items-center gap-2">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: preset.color }}
                  />
                  <span>{preset.text}</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {preset.value} / {preset.maxValue}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

render(<Demo />);
