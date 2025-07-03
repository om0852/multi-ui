const EnhancedCircularProgressBar = ({
  progress,
  size = 100,
  strokeWidth = 10,
  primaryColor = "#4A90E2",
  secondaryColor = "#FF6347",
  backgroundColor = "#e6e6e6",
  animationDuration = 1,
  showPercentage = true,
  glowEffect = true,
  onStart,
  onComplete,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  const [currentProgress, setCurrentProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [glow, setGlow] = useState(false);

  useEffect(() => {
    if (onStart) onStart();
    setIsAnimating(true);
    
    const intervalDuration = (animationDuration * 1000) / progress;
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      setCurrentProgress(current);
      
      // Trigger glow effect when progress changes
      if (glowEffect && current % 10 === 0) {
        setGlow(true);
        setTimeout(() => setGlow(false), 300);
      }
      
      if (current >= progress) {
        clearInterval(interval);
        setIsAnimating(false);
        if (onComplete) onComplete();
      }
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [progress, animationDuration, glowEffect]);

  const currentOffset = circumference - (currentProgress / 100) * circumference;
  const gradientId = `gradient-${primaryColor.replace('#', '')}-${secondaryColor.replace('#', '')}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Enhanced Circular Progress</h1>
        <p className="text-gray-600 mb-8">With gradient and glow effects</p>
        
        <div className="flex flex-col items-center space-y-8">
          <div className="relative" style={{ width: size, height: size }}>
            {/* Glow effect */}
            {glowEffect && (
              <motion.div 
                className="absolute inset-0 rounded-full opacity-0"
                style={{
                  background: `radial-gradient(circle at center, ${primaryColor}33 0%, transparent 70%)`,
                  filter: `blur(${size * 0.15}px)`,
                  margin: `-${size * 0.15}px`,
                  width: size * 1.3,
                  height: size * 1.3,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: glow ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
            
            <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
              <defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={primaryColor} />
                  <stop offset="100%" stopColor={secondaryColor} />
                </linearGradient>
              </defs>
              
              {/* Background circle */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={backgroundColor}
                strokeWidth={strokeWidth}
                strokeOpacity="0.3"
              />
              
              {/* Progress circle with gradient */}
              <motion.circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={`url(#${gradientId})`}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={currentOffset}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: currentOffset }}
                transition={{ duration: animationDuration, ease: "easeInOut" }}
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
                style={{
                  filter: glow ? `drop-shadow(0 0 ${size * 0.1}px ${primaryColor}80)` : 'none',
                  transition: 'filter 0.3s ease-out'
                }}
              />
              
              {/* Center text */}
              {showPercentage && (
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dy=".3em"
                  className="text-xl font-semibold"
                  fill={primaryColor}
                >
                  {`${Math.round(currentProgress)}%`}
                </text>
              )}
            </svg>
            
            {/* Animation indicator */}
            {isAnimating && (
              <div className="absolute -bottom-8 left-0 right-0 text-center">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  <svg className="animate-spin -ml-1 mr-1.5 h-3 w-3 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
              onChange={(e) => onChange && onChange(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div className="w-full grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Size</label>
              <select
                value={size}
                onChange={(e) => onSizeChange && onSizeChange(parseInt(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="80">Small (80px)</option>
                <option value="100">Medium (100px)</option>
                <option value="120">Large (120px)</option>
                <option value="150">X-Large (150px)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Stroke</label>
              <select
                value={strokeWidth}
                onChange={(e) => onStrokeWidthChange && onStrokeWidthChange(parseInt(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="6">Thin (6px)</option>
                <option value="10">Normal (10px)</option>
                <option value="14">Thick (14px)</option>
                <option value="18">Bold (18px)</option>
              </select>
            </div>
          </div>
          
          <div className="w-full grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Primary Color</label>
              <div className="flex space-x-2">
                {['#4A90E2', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'].map((color) => (
                  <button
                    key={color}
                    onClick={() => onPrimaryColorChange && onPrimaryColorChange(color)}
                    className={`w-6 h-6 rounded-full border-2 ${primaryColor === color ? 'ring-2 ring-offset-2 ring-blue-500' : 'border-transparent'}`}
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Color</label>
              <div className="flex space-x-2">
                {['#FF6347', '#EC4899', '#F59E0B', '#10B981', '#8B5CF6'].map((color) => (
                  <button
                    key={color}
                    onClick={() => onSecondaryColorChange && onSecondaryColorChange(color)}
                    className={`w-6 h-6 rounded-full border-2 ${secondaryColor === color ? 'ring-2 ring-offset-2 ring-blue-500' : 'border-transparent'}`}
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="w-full pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="showPercentage"
                  checked={showPercentage}
                  onChange={(e) => onTogglePercentage && onTogglePercentage(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="showPercentage" className="ml-2 block text-sm text-gray-700">
                  Show percentage
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="glowEffect"
                  checked={glowEffect}
                  onChange={(e) => onToggleGlow && onToggleGlow(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="glowEffect" className="ml-2 block text-sm text-gray-700">
                  Glow effect
                </label>
              </div>
              
              <button
                onClick={onReset}
                className="px-3 py-1 text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EnhancedCircularProgressBarDemo = () => {
  const [progress, setProgress] = useState(65);
  const [size, setSize] = useState(120);
  const [strokeWidth, setStrokeWidth] = useState(12);
  const [primaryColor, setPrimaryColor] = useState("#4A90E2");
  const [secondaryColor, setSecondaryColor] = useState("#FF6347");
  const [animationDuration, setAnimationDuration] = useState(1);
  const [showPercentage, setShowPercentage] = useState(true);
  const [glowEffect, setGlowEffect] = useState(true);
  
  const handleAnimationStart = () => {
    console.log("Animation started");
  };
  
  const handleAnimationComplete = () => {
    console.log("Animation completed");
  };
  
  const resetToDefaults = () => {
    setProgress(65);
    setSize(120);
    setStrokeWidth(12);
    setPrimaryColor("#4A90E2");
    setSecondaryColor("#FF6347");
    setAnimationDuration(1);
    setShowPercentage(true);
    setGlowEffect(true);
  };

  return (
    <EnhancedCircularProgressBar
      progress={progress}
      size={size}
      strokeWidth={strokeWidth}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      animationDuration={animationDuration}
      showPercentage={showPercentage}
      glowEffect={glowEffect}
      onStart={handleAnimationStart}
      onComplete={handleAnimationComplete}
      // Callbacks to update state in the demo component
      onChange={setProgress}
      onSizeChange={setSize}
      onStrokeWidthChange={setStrokeWidth}
      onPrimaryColorChange={setPrimaryColor}
      onSecondaryColorChange={setSecondaryColor}
      onTogglePercentage={setShowPercentage}
      onToggleGlow={setGlowEffect}
      onReset={resetToDefaults}
    />
  );
};

render(<EnhancedCircularProgressBarDemo />);
