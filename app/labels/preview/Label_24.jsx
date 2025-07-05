const Label_24 = ({ text, className = "" }) => {
  const characters = text.split("");

  return (
    <motion.div
      className={`
        inline-flex items-center px-3 py-1 bg-gray-900
        rounded-md ${className}
      `}
      whileHover={{ scale: 1.05 }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          className="text-sm font-mono text-green-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: index * 0.1,
          }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        className="w-0.5 h-4 bg-green-400 ml-0.5"
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "steps(2)",
        }}
      />
    </motion.div>
  );
};

const Demo = () => {
  const [text, setText] = React.useState("Loading...");
  const [isTyping, setIsTyping] = React.useState(true);
  const [cursorColor, setCursorColor] = React.useState("#4ade80");
  const [textColor, setTextColor] = React.useState("#4ade80");
  const [bgColor, setBgColor] = React.useState("#111827");
  
  const presets = [
    { 
      text: "Loading...",
      cursorColor: "#4ade80",
      textColor: "#4ade80",
      bgColor: "#111827"
    },
    { 
      text: "System ready",
      cursorColor: "#60a5fa",
      textColor: "#60a5fa",
      bgColor: "#1e1e1e"
    },
    { 
      text: "$ npm start",
      cursorColor: "#f472b6",
      textColor: "#f472b6",
      bgColor: "#1a1a1a"
    },
    { 
      text: "Connected to server",
      cursorColor: "#facc15",
      textColor: "#facc15",
      bgColor: "#1f2937"
    },
  ];
  
  React.useEffect(() => {
    if (isTyping) {
      const timer = setTimeout(() => {
        setIsTyping(false);
      }, 1000 + (text.length * 100));
      
      return () => clearTimeout(timer);
    }
  }, [isTyping, text]);
  
  const applyPreset = (preset) => {
    setText(preset.text);
    setCursorColor(preset.cursorColor);
    setTextColor(preset.textColor);
    setBgColor(preset.bgColor);
    setIsTyping(true);
  };
  
  const CustomLabel = () => {
    const characters = text.split("");
    
    return (
      <motion.div
        className="inline-flex items-center px-3 py-1 rounded-md"
        style={{ backgroundColor: bgColor }}
        whileHover={{ scale: 1.05 }}
      >
        {characters.map((char, index) => (
          <motion.span
            key={index}
            className="text-sm font-mono"
            style={{ color: textColor }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isTyping ? 1 : 1 }}
            transition={{
              duration: 0.1,
              delay: isTyping ? index * 0.1 : 0,
            }}
          >
            {char}
          </motion.span>
        ))}
        <motion.span
          className="w-0.5 h-4 ml-0.5"
          style={{ backgroundColor: cursorColor }}
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "steps(2)",
          }}
        />
      </motion.div>
    );
  };
  
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-4 p-6 bg-gray-50 rounded-lg">
        <CustomLabel />
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
                className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
                maxLength={30}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Text Color
                </label>
                <input
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-full h-10 cursor-pointer"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cursor Color
                </label>
                <input
                  type="color"
                  value={cursorColor}
                  onChange={(e) => setCursorColor(e.target.value)}
                  className="w-full h-10 cursor-pointer"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Background Color
              </label>
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="w-full h-10 cursor-pointer"
              />
            </div>
            
            <div className="pt-2">
              <button
                onClick={() => setIsTyping(true)}
                className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
              >
                Replay Animation
              </button>
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
                className="px-3 py-2 text-sm bg-white border border-gray-200 rounded-md hover:bg-gray-50 text-left font-mono"
                style={{ 
                  backgroundColor: preset.bgColor,
                  color: preset.textColor,
                  borderColor: preset.textColor + '40'
                }}
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
