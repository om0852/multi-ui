const Label_23 = ({ frontText, backText, className = "" }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <motion.div
      className={`relative inline-block cursor-pointer ${className}`}
      style={{ perspective: "1000px" }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateX: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute inset-0 px-4 py-1.5 bg-indigo-500 text-white
            rounded-md text-sm font-medium flex items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          {frontText}
        </div>
        <div
          className="absolute inset-0 px-4 py-1.5 bg-indigo-600 text-white
            rounded-md text-sm font-medium flex items-center justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateX(180deg)" }}
        >
          {backText}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Demo = () => {
  const [frontText, setFrontText] = React.useState("Hover me");
  const [backText, setBackText] = React.useState("Hello!");
  const [frontColor, setFrontColor] = React.useState("#4f46e5");
  const [backColor, setBackColor] = React.useState("#4338ca");
  
  const colors = [
    { value: "#4f46e5", label: "Indigo" },
    { value: "#10b981", label: "Emerald" },
    { value: "#f59e0b", label: "Amber" },
    { value: "#ef4444", label: "Red" },
    { value: "#8b5cf6", label: "Violet" },
  ];
  
  const presets = [
    {
      frontText: "Hover me",
      backText: "Hello!",
      frontColor: "#4f46e5",
      backColor: "#4338ca"
    },
    {
      frontText: "Price",
      backText: "$99.99",
      frontColor: "#10b981",
      backColor: "#0d9488"
    },
    {
      frontText: "Status",
      backText: "Active",
      frontColor: "#f59e0b",
      backColor: "#d97706"
    },
    {
      frontText: "Click",
      backText: "Clicked!",
      frontColor: "#8b5cf6",
      backColor: "#7c3aed"
    }
  ];
  
  const applyPreset = (preset) => {
    setFrontText(preset.frontText);
    setBackText(preset.backText);
    setFrontColor(preset.frontColor);
    setBackColor(preset.backColor);
  };
  
  const isCustomPreset = !presets.some(preset => 
    preset.frontText === frontText && 
    preset.backText === backText &&
    preset.frontColor === frontColor &&
    preset.backColor === backColor
  );
  
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-4 p-6 bg-gray-50 rounded-lg">
        <div 
          className="relative inline-block cursor-pointer"
          style={{ perspective: "1000px" }}
        >
          <motion.div
            className="relative w-full h-full"
            initial={false}
            animate={{ rotateX: 0 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute inset-0 px-4 py-1.5 text-white
                rounded-md text-sm font-medium flex items-center justify-center"
              style={{ 
                backgroundColor: frontColor,
                backfaceVisibility: "hidden" 
              }}
            >
              {frontText}
            </div>
          </motion.div>
        </div>
        
        <div className="flex items-center text-gray-500">
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </div>
        
        <div 
          className="relative inline-block cursor-pointer"
          style={{ perspective: "1000px" }}
        >
          <motion.div
            className="relative w-full h-full"
            initial={false}
            animate={{ rotateX: 0 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute inset-0 px-4 py-1.5 text-white
                rounded-md text-sm font-medium flex items-center justify-center"
              style={{ 
                backgroundColor: backColor,
                backfaceVisibility: "hidden" 
              }}
            >
              {backText}
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="max-w-md mx-auto space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Customize Label</h3>
          
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Front Text
              </label>
              <input
                type="text"
                value={frontText}
                onChange={(e) => setFrontText(e.target.value)}
                className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                maxLength={20}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Back Text
              </label>
              <input
                type="text"
                value={backText}
                onChange={(e) => setBackText(e.target.value)}
                className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                maxLength={20}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Front Color
                </label>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <button
                      key={`front-${color.value}`}
                      onClick={() => setFrontColor(color.value)}
                      className={`w-6 h-6 rounded-full ${frontColor === color.value ? 'ring-2 ring-offset-1 ring-indigo-500' : ''}`}
                      style={{ backgroundColor: color.value }}
                      title={color.label}
                    />
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Back Color
                </label>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <button
                      key={`back-${color.value}`}
                      onClick={() => setBackColor(color.value)}
                      className={`w-6 h-6 rounded-full ${backColor === color.value ? 'ring-2 ring-offset-1 ring-indigo-500' : ''}`}
                      style={{ backgroundColor: color.value }}
                      title={color.label}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {(frontText !== backText) && (
              <div className="pt-2">
                <Label_23 
                  frontText={frontText} 
                  backText={backText}
                  className="mx-auto"
                  style={{
                    '--front-color': frontColor,
                    '--back-color': backColor
                  }}
                />
              </div>
            )}
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
                    style={{ backgroundColor: preset.frontColor }}
                  />
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: preset.backColor }}
                  />
                  <span>{preset.frontText} → {preset.backText}</span>
                </div>
              </button>
            ))}
            
            {isCustomPreset && (
              <button
                className="px-3 py-2 text-sm bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-md"
              >
                <div className="flex items-center gap-2">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: frontColor }}
                  />
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: backColor }}
                  />
                  <span>Custom</span>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

render(<Demo />);
