const NeonGlowCircularProgressBar = ({
  value,
  max = 100,
  size = 100,
  strokeWidth = 8,
  glowColor = "#3B82F6",
  showPercentage = true,
  onStart,
  onComplete,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = (value / max) * 100;
  
  // State for animation
  const [currentValue, setCurrentValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Animate progress
  useEffect(() => {
    if (onStart) onStart();
    setIsAnimating(true);
    
    const duration = 1500; // 1.5 seconds for the animation
    const startTime = Date.now();
    const startValue = 0;
    const endValue = value;
    
    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out function
      const easeOut = (t) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOut(progress);
      
      // Update current value
      const newValue = startValue + (endValue - startValue) * easedProgress;
      setCurrentValue(newValue);
      
      // Continue animation if not complete
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
        if (onComplete) onComplete();
      }
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [value, max]);
  
  // Calculate current percentage and dash offset
  const currentPercentage = (currentValue / max) * 100;
  const currentStrokeDashoffset = circumference - (currentPercentage / 100) * circumference;
  
  // Calculate glow effect
  const glowIntensity = 8;
  const blurAmount = 10;
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-white mb-2">Neon Glow</h1>
        <p className="text-gray-400 mb-8">With glowing progress effect</p>
        
        <div className="flex flex-col items-center space-y-8">
          <div className="relative" style={{ width: size, height: size }}>
            <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
              {/* Filter for neon glow effect */}
              <defs>
                <filter id="neon-glow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                
                <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={glowColor} />
                  <stop offset="100%" stopColor={glowColor} stopOpacity="0.8" />
                </linearGradient>
              </defs>
              
              {/* Background circle */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="#374151"
                strokeWidth={strokeWidth}
              />
              
              {/* Glow effect */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={glowColor}
                strokeWidth={strokeWidth * 1.5}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={currentStrokeDashoffset}
                opacity="0.3"
                style={{
                  filter: `blur(${blurAmount}px)`,
                  transition: 'all 0.5s ease-out',
                }}
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
              />
              
              {/* Progress circle */}
              <motion.circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="url(#progress-gradient)"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={currentStrokeDashoffset}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: currentStrokeDashoffset }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{
                  filter: `drop-shadow(0 0 ${glowIntensity}px ${glowColor}99)`,
                }}
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
              />
              
              {/* Center text with glow */}
              {showPercentage && (
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dy=".3em"
                  className="text-xl font-semibold"
                  fill="white"
                  style={{
                    filter: `drop-shadow(0 0 ${glowIntensity/2}px ${glowColor})`,
                  }}
                >
                  {`${Math.round(currentPercentage)}%`}
                </text>
              )}
            </svg>
            
            {/* Animation indicator */}
            {isAnimating && (
              <div className="absolute -bottom-8 left-0 right-0 text-center">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900 text-blue-200">
                  <svg className="animate-spin -ml-1 mr-1.5 h-3 w-3 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Animating...
                </span>
              </div>
            )}
          </div>
          
          <div className="w-full">
            <div className="mb-2 flex justify-between">
              <label className="text-sm font-medium text-gray-300">
                Value: {value} / {max}
              </label>
              <span className="text-sm text-gray-400">
                {Math.round(currentValue)} / {max}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max={max}
              value={value}
              onChange={(e) => onChange && onChange(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div className="w-full grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Size</label>
              <select
                value={size}
                onChange={(e) => onSizeChange && onSizeChange(parseInt(e.target.value))}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-sm text-white"
              >
                <option value="80">Small (80px)</option>
                <option value="100">Medium (100px)</option>
                <option value="120">Large (120px)</option>
                <option value="150">X-Large (150px)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Stroke: {strokeWidth}px
              </label>
              <input
                type="range"
                min="4"
                max="20"
                value={strokeWidth}
                onChange={(e) => onStrokeWidthChange && onStrokeWidthChange(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
          
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-300 mb-1">Glow Color</label>
            <div className="flex space-x-2">
              {['#3B82F6', '#10B981', '#F59E0B', '#EC4899', '#8B5CF6'].map((color) => (
                <button
                  key={color}
                  onClick={() => onGlowColorChange && onGlowColorChange(color)}
                  className={`w-8 h-8 rounded-full border-2 ${glowColor === color ? 'ring-2 ring-offset-2 ring-blue-500' : 'border-transparent'}`}
                  style={{ 
                    backgroundColor: color,
                    boxShadow: `0 0 10px ${color}`
                  }}
                  title={color}
                />
              ))}
            </div>
          </div>
          
          <div className="w-full pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="showPercentage"
                  checked={showPercentage}
                  onChange={(e) => onTogglePercentage && onTogglePercentage(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
                />
                <label htmlFor="showPercentage" className="ml-2 block text-sm text-gray-300">
                  Show percentage
                </label>
              </div>
              
              <button
                onClick={onReset}
                className="px-3 py-1 text-sm font-medium text-blue-400 hover:text-blue-300"
              >
                Reset to Defaults
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NeonGlowCircularProgressBarDemo = () => {
  const [value, setValue] = useState(75);
  const [max, setMax] = useState(100);
  const [size, setSize] = useState(100);
  const [strokeWidth, setStrokeWidth] = useState(8);
  const [glowColor, setGlowColor] = useState("#3B82F6");
  const [showPercentage, setShowPercentage] = useState(true);
  
  const handleAnimationStart = () => {
    console.log("Neon glow animation started");
  };
  
  const handleAnimationComplete = () => {
    console.log("Neon glow animation completed");
  };
  
  const resetToDefaults = () => {
    setValue(75);
    setMax(100);
    setSize(100);
    setStrokeWidth(8);
    setGlowColor("#3B82F6");
    setShowPercentage(true);
  };

  return (
    <NeonGlowCircularProgressBar
      value={value}
      max={max}
      size={size}
      strokeWidth={strokeWidth}
      glowColor={glowColor}
      showPercentage={showPercentage}
      onStart={handleAnimationStart}
      onComplete={handleAnimationComplete}
      // Callbacks to update state in the demo component
      onChange={setValue}
      onMaxChange={setMax}
      onSizeChange={setSize}
      onStrokeWidthChange={setStrokeWidth}
      onGlowColorChange={setGlowColor}
      onTogglePercentage={setShowPercentage}
      onReset={resetToDefaults}
    />
  );
};

render(<NeonGlowCircularProgressBarDemo />);
