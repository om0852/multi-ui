const DepthEffectCircularProgressBar = ({
  value,
  max = 100,
  size = 100,
  strokeWidth = 12,
  progressColor = "#3B82F6",
  showPercentage = true,
  depth = 10,
  onStart,
  onComplete,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = (value / max) * 100;
  
  // State for animation
  const [currentValue, setCurrentValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  
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
  
  // Handle mouse move for 3D tilt effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate tilt based on mouse position relative to center
    const tiltX = ((y - centerY) / centerY) * 10; // Max 10 degrees tilt
    const tiltY = ((centerX - x) / centerX) * 10; // Max 10 degrees tilt
    
    setTilt({ x: tiltX, y: tiltY });
  };
  
  const handleMouseLeave = () => {
    // Reset tilt when mouse leaves
    setTilt({ x: 0, y: 0 });
  };
  
  // Calculate current percentage and dash offset
  const currentPercentage = (currentValue / max) * 100;
  const currentStrokeDashoffset = circumference - (currentPercentage / 100) * circumference;
  
  // Calculate shadow and highlight based on tilt
  const shadowX = -tilt.y * 0.5;
  const shadowY = tilt.x * 0.5;
  const highlightX = tilt.y * 0.5;
  const highlightY = -tilt.x * 0.5;
  
  // Generate gradient ID
  const gradientId = `gradient-${progressColor.replace('#', '')}`;
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">3D Depth Effect</h1>
        <p className="text-gray-600 mb-8">With interactive 3D tilt</p>
        
        <div className="flex flex-col items-center space-y-8">
          <div 
            className="relative transition-transform duration-300 ease-out"
            style={{ 
              width: size, 
              height: size,
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
              <defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={progressColor} />
                  <stop offset="100%" stopColor={progressColor} stopOpacity="0.8" />
                </linearGradient>
                
                {/* Shadow filter */}
                <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx={shadowX} dy={shadowY} stdDeviation="3" floodColor="rgba(0,0,0,0.3)" />
                </filter>
                
                {/* Highlight filter */}
                <filter id="highlight" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx={highlightX} dy={highlightY} stdDeviation="2" floodColor="rgba(255,255,255,0.8)" />
                </filter>
              </defs>
              
              {/* Background circle with 3D effect */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius - depth / 2}
                fill="#E5E7EB"
                filter="url(#shadow)"
                style={{
                  transition: 'all 0.3s ease-out',
                }}
              />
              
              {/* Progress track with 3D effect */}
              <motion.circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="#E5E7EB"
                strokeWidth={strokeWidth}
                style={{
                  filter: 'url(#shadow)',
                  transition: 'all 0.3s ease-out',
                }}
              />
              
              {/* Progress bar with 3D effect */}
              <motion.circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={`url(#${gradientId})`}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={currentStrokeDashoffset}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: currentStrokeDashoffset }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{
                  filter: 'url(#highlight)',
                  transform: 'translateZ(10px)',
                  transformOrigin: 'center',
                  transition: 'all 0.3s ease-out',
                }}
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
              />
              
              {/* Center hole for 3D effect */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius - strokeWidth}
                fill="#F9FAFB"
                style={{
                  filter: 'url(#highlight)',
                  transition: 'all 0.3s ease-out',
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
                  fill={progressColor}
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                    transition: 'all 0.3s ease-out',
                  }}
                >
                  {`${Math.round(currentPercentage)}%`}
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
              <label className="text-sm font-medium text-gray-700">
                Value: {value} / {max}
              </label>
              <span className="text-sm text-gray-500">
                {Math.round(currentValue)} / {max}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max={max}
              value={value}
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Stroke: {strokeWidth}px
              </label>
              <input
                type="range"
                min="4"
                max="20"
                value={strokeWidth}
                onChange={(e) => onStrokeWidthChange && onStrokeWidthChange(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
          
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">3D Depth</label>
            <input
              type="range"
              min="0"
              max="20"
              value={depth}
              onChange={(e) => onDepthChange && onDepthChange(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">Progress Color</label>
            <div className="flex space-x-2">
              {['#3B82F6', '#10B981', '#F59E0B', '#EC4899', '#8B5CF6'].map((color) => (
                <button
                  key={color}
                  onClick={() => onProgressColorChange && onProgressColorChange(color)}
                  className={`w-8 h-8 rounded-full border-2 ${progressColor === color ? 'ring-2 ring-offset-2 ring-blue-500' : 'border-transparent'}`}
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
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
              
              <button
                onClick={onReset}
                className="px-3 py-1 text-sm font-medium text-blue-600 hover:text-blue-800"
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

const DepthEffectCircularProgressBarDemo = () => {
  const [value, setValue] = useState(75);
  const [max, setMax] = useState(100);
  const [size, setSize] = useState(100);
  const [strokeWidth, setStrokeWidth] = useState(12);
  const [depth, setDepth] = useState(10);
  const [progressColor, setProgressColor] = useState("#3B82F6");
  const [showPercentage, setShowPercentage] = useState(true);
  
  const handleAnimationStart = () => {
    console.log("3D depth animation started");
  };
  
  const handleAnimationComplete = () => {
    console.log("3D depth animation completed");
  };
  
  const resetToDefaults = () => {
    setValue(75);
    setMax(100);
    setSize(100);
    setStrokeWidth(12);
    setDepth(10);
    setProgressColor("#3B82F6");
    setShowPercentage(true);
  };

  return (
    <DepthEffectCircularProgressBar
      value={value}
      max={max}
      size={size}
      strokeWidth={strokeWidth}
      depth={depth}
      progressColor={progressColor}
      showPercentage={showPercentage}
      onStart={handleAnimationStart}
      onComplete={handleAnimationComplete}
      // Callbacks to update state in the demo component
      onChange={setValue}
      onMaxChange={setMax}
      onSizeChange={setSize}
      onStrokeWidthChange={setStrokeWidth}
      onDepthChange={setDepth}
      onProgressColorChange={setProgressColor}
      onTogglePercentage={setShowPercentage}
      onReset={resetToDefaults}
    />
  );
};

render(<DepthEffectCircularProgressBarDemo />);
