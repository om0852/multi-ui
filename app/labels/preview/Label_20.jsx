const Label_20 = ({ texts, interval = 2000, className = "" }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval]);

  return (
    <div className={`relative inline-block overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          className="inline-block"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const Demo = () => {
  const [texts, setTexts] = React.useState([
    "Web Development",
    "UI/UX Design",
    "Mobile Apps",
    "Digital Marketing"
  ]);
  const [newText, setNewText] = React.useState("");
  const [intervalValue, setIntervalValue] = React.useState(2000);
  const [color, setColor] = React.useState("#4f46e5");
  
  const colors = [
    { value: "#4f46e5", label: "Indigo" },
    { value: "#10b981", label: "Emerald" },
    { value: "#f59e0b", label: "Amber" },
    { value: "#ef4444", label: "Red" },
    { value: "#8b5cf6", label: "Violet" },
  ];
  
  const presets = [
    {
      name: "Services",
      texts: ["Web Development", "UI/UX Design", "Mobile Apps", "Digital Marketing"],
      color: "#4f46e5"
    },
    {
      name: "Features",
      texts: ["Fast", "Responsive", "User-friendly", "Modern"],
      color: "#10b981"
    },
    {
      name: "Benefits",
      texts: ["Save Time", "Increase Sales", "Grow Business", "Engage Users"],
      color: "#f59e0b"
    }
  ];
  
  const addText = () => {
    if (newText.trim() && texts.length < 8) {
      setTexts([...texts, newText.trim()]);
      setNewText("");
    }
  };
  
  const removeText = (index) => {
    if (texts.length > 1) {
      setTexts(texts.filter((_, i) => i !== index));
    }
  };
  
  const applyPreset = (preset) => {
    setTexts(preset.texts);
    setColor(preset.color);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center justify-center min-h-40 p-6 bg-white rounded-lg shadow-sm">
        <div className="text-2xl font-medium text-center">
          We specialize in{" "}
          <span style={{ color }} className="font-semibold">
            <Label_20 texts={texts} interval={intervalValue} />
          </span>
        </div>
      </div>
      
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Text Rotation</h3>
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {texts.map((text, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-1 px-2 py-1 bg-white border border-gray-200 rounded-md"
                >
                  <span className="text-sm">{text}</span>
                  <button 
                    onClick={() => removeText(index)}
                    className="text-gray-400 hover:text-red-500"
                    disabled={texts.length <= 1}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            
            <div className="flex gap-2">
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addText()}
                placeholder="Add new text"
                className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                disabled={texts.length >= 8}
              />
              <button
                onClick={addText}
                disabled={!newText.trim() || texts.length >= 8}
                className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50"
              >
                Add
              </button>
            </div>
            {texts.length >= 8 && (
              <p className="text-xs text-amber-600">Maximum 8 items reached</p>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Speed</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Slow</span>
                <span className="text-xs text-gray-500">Fast</span>
              </div>
              <input
                type="range"
                min="1000"
                max="5000"
                step="500"
                value={intervalValue}
                onChange={(e) => setIntervalValue(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-xs text-center text-gray-500">
                {intervalValue / 1000} seconds
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Color</h3>
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
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Presets</h3>
          <div className="flex flex-wrap gap-2">
            {presets.map((preset, index) => (
              <button
                key={index}
                onClick={() => applyPreset(preset)}
                className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-md hover:bg-gray-50"
              >
                {preset.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

render(<Demo />);
