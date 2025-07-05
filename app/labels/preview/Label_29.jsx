const Label_29 = ({ texts, interval = 2000, className = "", textColor = "#1f2937", bgColor = "#ffffff" }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [customTexts, setCustomTexts] = React.useState(texts);
  const [customInterval, setCustomInterval] = React.useState(interval);
  
  React.useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % customTexts.length);
    }, customInterval);

    return () => clearInterval(timer);
  }, [customTexts.length, customInterval, isPaused]);

  return (
    <motion.div
      className={`
        relative inline-flex items-center px-4 py-1.5
        rounded-md shadow-sm overflow-hidden ${className}
      `}
      style={{ backgroundColor: bgColor }}
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex flex-col"
        animate={{ y: -currentIndex * 24 }}
        transition={{ duration: 0.3 }}
      >
        {customTexts.map((text, index) => (
          <span
            key={index}
            className="h-6 text-sm font-medium"
            style={{ color: textColor }}
          >
            {text}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
};

const Demo = () => {
  const [texts, setTexts] = React.useState(["Breaking News", "Latest Updates", "Top Stories"]);
  const [currentText, setCurrentText] = React.useState("");
  const [interval, setIntervalValue] = React.useState(2000);
  const [textColor, setTextColor] = React.useState("#1f2937");
  const [bgColor, setBgColor] = React.useState("#ffffff");
  
  const presets = [
    {
      name: "News Ticker",
      texts: ["Breaking News", "Latest Updates", "Top Stories"],
      textColor: "#1f2937",
      bgColor: "#ffffff"
    },
    {
      name: "Special Offer",
      texts: ["50% Off", "Limited Time", "Today Only"],
      textColor: "#ffffff",
      bgColor: "#ef4444"
    },
    {
      name: "Status",
      texts: ["Connected", "Syncing...", "Up to Date"],
      textColor: "#ffffff",
      bgColor: "#10b981"
    },
    {
      name: "Loading",
      texts: ["Loading", "Please Wait", "Almost There"],
      textColor: "#1f2937",
      bgColor: "#f59e0b"
    }
  ];
  
  const addText = () => {
    if (currentText.trim() && !texts.includes(currentText)) {
      setTexts([...texts, currentText]);
      setCurrentText("");
    }
  };
  
  const removeText = (index) => {
    const newTexts = [...texts];
    newTexts.splice(index, 1);
    setTexts(newTexts);
  };
  
  const applyPreset = (preset) => {
    setTexts(preset.texts);
    setTextColor(preset.textColor);
    setBgColor(preset.bgColor);
  };
  
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-4 p-6 bg-gray-50 rounded-lg">
        <Label_29 
          texts={texts}
          interval={interval}
          textColor={textColor}
          bgColor={bgColor}
        />
      </div>
      
      <div className="max-w-md mx-auto space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Customize Label</h3>
          
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Add Text
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={currentText}
                  onChange={(e) => setCurrentText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addText()}
                  className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter text and press Enter"
                  maxLength={30}
                />
                <button
                  onClick={addText}
                  className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Add
                </button>
              </div>
              
              <div className="mt-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Text Items ({texts.length})
                </label>
                <div className="max-h-32 overflow-y-auto border border-gray-200 rounded-md p-1">
                  {texts.length > 0 ? (
                    <ul className="space-y-1">
                      {texts.map((text, index) => (
                        <li key={index} className="flex items-center justify-between px-2 py-1 text-sm bg-gray-50 rounded">
                          <span className="truncate">{text}</span>
                          <button
                            onClick={() => removeText(index)}
                            className="text-red-500 hover:text-red-700"
                            title="Remove"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500 text-center py-2">No text items added</p>
                  )}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Text Color
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="w-10 h-10 p-1 border border-gray-300 rounded"
                  />
                  <span className="text-xs font-mono">{textColor}</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Background Color
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-10 h-10 p-1 border border-gray-300 rounded"
                  />
                  <span className="text-xs font-mono">{bgColor}</span>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rotation Interval: {interval}ms
              </label>
              <input
                type="range"
                min="500"
                max="5000"
                step="100"
                value={interval}
                onChange={(e) => setIntervalValue(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Faster</span>
                <span>Slower</span>
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
                style={{ backgroundColor: preset.bgColor }}
              >
                <div className="flex flex-col">
                  <span 
                    className="text-sm font-medium"
                    style={{ color: preset.textColor }}
                  >
                    {preset.name}
                  </span>
                  <div className="text-xs mt-1 flex flex-wrap gap-0.5">
                    {preset.texts.map((text, i) => (
                      <span 
                        key={i}
                        className="px-1.5 py-0.5 rounded"
                        style={{ 
                          color: preset.textColor,
                          backgroundColor: `${preset.textColor}20`
                        }}
                      >
                        {text}
                      </span>
                    ))}
                  </div>
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
