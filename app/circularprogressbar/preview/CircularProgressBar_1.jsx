const CircularProgressBar = ({
  progress,
  size = 100,
  strokeWidth = 10,
  color = "#4A90E2",
  backgroundColor = "#e6e6e6",
  animationDuration = 0.5,
  showPercentage = true,
  onStart,
  onComplete,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  const [currentProgress, setCurrentProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (onStart) onStart();
    setIsAnimating(true);
    
    const intervalDuration = (animationDuration * 1000) / progress;
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      setCurrentProgress(current);
      if (current >= progress) {
        clearInterval(interval);
        setIsAnimating(false);
        if (onComplete) onComplete();
      }
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [progress, animationDuration]);

  const currentOffset = circumference - (currentProgress / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Circular Progress Bar</h1>
        <p className="text-gray-600 mb-8">Basic circular progress indicator with smooth animation</p>
        
        <div className="flex flex-col items-center space-y-8">
          <div className="relative" style={{ width: size, height: size }}>
            <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
              {/* Background circle */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={backgroundColor}
                strokeWidth={strokeWidth}
              />
              
              {/* Progress circle */}
              <motion.circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={currentOffset}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: currentOffset }}
                transition={{ duration: animationDuration, ease: "easeInOut" }}
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
              />
              
              {/* Center text */}
              {showPercentage && (
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dy=".3em"
                  className="text-xl font-semibold"
                  fill={color}
                >
                  {`${Math.round(currentProgress)}%`}
                </text>
              )}
            </svg>
            
            {/* Animation indicator */}
            {isAnimating && (
              <div className="absolute -bottom-8 left-0 right-0 text-center">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  Animating...
                </span>
              </div>
            )}
          </div>
          
          <div className="w-full">
            <div className="mb-2 flex justify-between">
              <label className="text-sm font-medium text-gray-700">Progress: {progress}%</label>
              <span className="text-sm text-gray-500">
                {Math.round(currentProgress)}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(e) => {
                const newValue = parseInt(e.target.value);
                // Update progress through the demo component's state
                if (onChange) onChange(newValue);
              }}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div className="w-full grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Size</label>
              <select
                value={size}
                onChange={(e) => {
                  // Update size through the demo component's state
                  if (onSizeChange) onSizeChange(parseInt(e.target.value));
                }}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="80">Small (80px)</option>
                <option value="100">Medium (100px)</option>
                <option value="120">Large (120px)</option>
                <option value="150">X-Large (150px)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
              <select
                value={color}
                onChange={(e) => {
                  // Update color through the demo component's state
                  if (onColorChange) onColorChange(e.target.value);
                }}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="#4A90E2">Blue</option>
                <option value="#10B981">Green</option>
                <option value="#F59E0B">Amber</option>
                <option value="#EF4444">Red</option>
                <option value="#8B5CF6">Purple</option>
              </select>
            </div>
          </div>
          
          <div className="w-full grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Stroke Width: {strokeWidth}px
              </label>
              <input
                type="range"
                min="4"
                max="20"
                value={strokeWidth}
                onChange={(e) => {
                  // Update stroke width through the demo component's state
                  if (onStrokeWidthChange) onStrokeWidthChange(parseInt(e.target.value));
                }}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration: {animationDuration}s
              </label>
              <input
                type="range"
                min="0.1"
                max="3"
                step="0.1"
                value={animationDuration}
                onChange={(e) => {
                  // Update animation duration through the demo component's state
                  if (onDurationChange) onDurationChange(parseFloat(e.target.value));
                }}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between w-full pt-4 border-t border-gray-200">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="showPercentage"
                checked={showPercentage}
                onChange={(e) => {
                  // Toggle percentage display through the demo component's state
                  if (onTogglePercentage) onTogglePercentage(e.target.checked);
                }}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="showPercentage" className="ml-2 block text-sm text-gray-700">
                Show percentage
              </label>
            </div>
            
            <button
              onClick={() => {
                // Reset to default values
                if (onReset) onReset();
              }}
              className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              Reset to Defaults
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CircularProgressBarDemo = () => {
  const [progress, setProgress] = useState(65);
  const [size, setSize] = useState(100);
  const [strokeWidth, setStrokeWidth] = useState(10);
  const [color, setColor] = useState("#4A90E2");
  const [animationDuration, setAnimationDuration] = useState(0.5);
  const [showPercentage, setShowPercentage] = useState(true);
  
  const handleAnimationStart = () => {
    console.log("Animation started");
  };
  
  const handleAnimationComplete = () => {
    console.log("Animation completed");
  };
  
  const resetToDefaults = () => {
    setProgress(65);
    setSize(100);
    setStrokeWidth(10);
    setColor("#4A90E2");
    setAnimationDuration(0.5);
    setShowPercentage(true);
  };

  return (
    <CircularProgressBar
      progress={progress}
      size={size}
      strokeWidth={strokeWidth}
      color={color}
      animationDuration={animationDuration}
      showPercentage={showPercentage}
      onStart={handleAnimationStart}
      onComplete={handleAnimationComplete}
      // Callbacks to update state in the demo component
      onChange={setProgress}
      onSizeChange={setSize}
      onColorChange={setColor}
      onStrokeWidthChange={setStrokeWidth}
      onDurationChange={setAnimationDuration}
      onTogglePercentage={setShowPercentage}
      onReset={resetToDefaults}
    />
  );
};

render(<CircularProgressBarDemo />);
