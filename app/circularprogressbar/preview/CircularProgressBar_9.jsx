const RotatingGradientSegmentCircularProgressBar = ({
  progress,
  size = 120,
  strokeWidth = 8,
  backgroundColor = "#f0f0f0",
  showPercentage = true,
  segments = 12,
  gradientStart = "#4A90E2",
  gradientEnd = "#FF6347",
  onStart,
  onComplete,
}) => {
  const radius = (size - strokeWidth) / 2;
  const segmentAngle = (2 * Math.PI) / segments;
  const totalOffset = (progress / 100) * segments;
  
  // State for animation
  const [currentProgress, setCurrentProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [animationFrame, setAnimationFrame] = useState(null);
  
  // Animate progress
  useEffect(() => {
    if (onStart) onStart();
    setIsAnimating(true);
    
    const duration = 1000; // 1 second for the animation
    const startTime = Date.now();
    const startValue = 0;
    const endValue = progress;
    
    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out function
      const easeOut = (t) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOut(progress);
      
      // Update current progress
      const newProgress = startValue + (endValue - startValue) * easedProgress;
      setCurrentProgress(newProgress);
      
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
  }, [progress]);
  
  // Rotate the segments continuously
  useEffect(() => {
    let frameId;
    let startTime = null;
    
    const rotate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Rotate continuously (one full rotation every 8 seconds)
      setRotation((elapsed * 0.045) % 360);
      
      // Continue the animation
      frameId = requestAnimationFrame(rotate);
    };
    
    // Start the rotation animation
    frameId = requestAnimationFrame(rotate);
    setAnimationFrame(frameId);
    
    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);
  
  const currentTotalOffset = (currentProgress / 100) * segments;
  const gradientId = `gradient-${gradientStart.replace('#', '')}-${gradientEnd.replace('#', '')}`;
  
  // Generate segment paths with gradient
  const renderSegments = () => {
    const segmentPaths = [];
    const centerX = size / 2;
    const centerY = size / 2;
    const segmentLength = radius * 0.8; // Length of each segment
    
    for (let i = 0; i < segments; i++) {
      const angle = (i * 2 * Math.PI) / segments - Math.PI / 2;
      
      // Determine if this segment should be filled based on progress
      const isFilled = i < currentTotalOffset;
      const opacity = isFilled ? 1 : 0.1;
      
      // Calculate start and end points for the segment
      const x1 = centerX + (radius - segmentLength) * Math.cos(angle + segmentAngle / 2);
      const y1 = centerY + (radius - segmentLength) * Math.sin(angle + segmentAngle / 2);
      const x2 = centerX + radius * Math.cos(angle + segmentAngle / 2);
      const y2 = centerY + radius * Math.sin(angle + segmentAngle / 2);
      
      // Calculate gradient angle for this segment
      const gradientAngle = (i / segments) * 360 + rotation;
      const gradientIdSegment = `${gradientId}-${i}`;
      
      // Create a unique gradient for each segment
      const segmentGradient = (
        <defs key={`gradient-${i}`}>
          <linearGradient 
            id={gradientIdSegment} 
            x1="0%" 
            y1="0%" 
            x2="100%" 
            y2="100%"
            gradientTransform={`rotate(${gradientAngle})`}
          >
            <stop offset="0%" stopColor={gradientStart} />
            <stop offset="100%" stopColor={gradientEnd} />
          </linearGradient>
        </defs>
      );
      
      segmentPaths.push(
        <React.Fragment key={`segment-${i}`}>
          {segmentGradient}
          <line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={`url(#${gradientIdSegment})`}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            opacity={opacity}
            style={{
              transition: 'opacity 0.3s ease-out',
            }}
          />
        </React.Fragment>
      );
    }
    
    return segmentPaths;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Gradient Segments</h1>
        <p className="text-gray-600 mb-8">Smoothly rotating gradient segments</p>
        
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
                opacity="0.3"
              />
              
              {/* Rotating gradient segments */}
              {renderSegments()}
              
              {/* Center text with gradient */}
              {showPercentage && (
                <React.Fragment>
                  <defs>
                    <linearGradient id="text-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={gradientStart} />
                      <stop offset="100%" stopColor={gradientEnd} />
                    </linearGradient>
                  </defs>
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dy=".3em"
                    className="text-xl font-semibold"
                    fill="url(#text-gradient)"
                  >
                    {`${Math.round(currentProgress)}%`}
                  </text>
                </React.Fragment>
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
                <option value="100">Small (100px)</option>
                <option value="120">Medium (120px)</option>
                <option value="150">Large (150px)</option>
                <option value="180">X-Large (180px)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Segments</label>
              <select
                value={segments}
                onChange={(e) => onSegmentsChange && onSegmentsChange(parseInt(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="8">8 Segments</option>
                <option value="12">12 Segments</option>
                <option value="16">16 Segments</option>
                <option value="24">24 Segments</option>
              </select>
            </div>
          </div>
          
          <div className="w-full grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Color</label>
              <div className="flex space-x-1">
                {['#4A90E2', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'].map((color) => (
                  <button
                    key={`start-${color}`}
                    onClick={() => onGradientStartChange && onGradientStartChange(color)}
                    className={`w-6 h-6 rounded-full border ${gradientStart === color ? 'ring-2 ring-offset-1 ring-blue-500' : 'border-transparent'}`}
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">End Color</label>
              <div className="flex space-x-1">
                {['#FF6347', '#EC4899', '#F59E0B', '#10B981', '#8B5CF6'].map((color) => (
                  <button
                    key={`end-${color}`}
                    onClick={() => onGradientEndChange && onGradientEndChange(color)}
                    className={`w-6 h-6 rounded-full border ${gradientEnd === color ? 'ring-2 ring-offset-1 ring-blue-500' : 'border-transparent'}`}
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

const RotatingGradientSegmentCircularProgressBarDemo = () => {
  const [progress, setProgress] = useState(65);
  const [size, setSize] = useState(120);
  const [strokeWidth, setStrokeWidth] = useState(8);
  const [segments, setSegments] = useState(12);
  const [gradientStart, setGradientStart] = useState("#4A90E2");
  const [gradientEnd, setGradientEnd] = useState("#FF6347");
  const [showPercentage, setShowPercentage] = useState(true);
  
  const handleAnimationStart = () => {
    console.log("Gradient segment animation started");
  };
  
  const handleAnimationComplete = () => {
    console.log("Gradient segment animation completed");
  };
  
  const resetToDefaults = () => {
    setProgress(65);
    setSize(120);
    setStrokeWidth(8);
    setSegments(12);
    setGradientStart("#4A90E2");
    setGradientEnd("#FF6347");
    setShowPercentage(true);
  };

  return (
    <RotatingGradientSegmentCircularProgressBar
      progress={progress}
      size={size}
      strokeWidth={strokeWidth}
      segments={segments}
      gradientStart={gradientStart}
      gradientEnd={gradientEnd}
      showPercentage={showPercentage}
      onStart={handleAnimationStart}
      onComplete={handleAnimationComplete}
      // Callbacks to update state in the demo component
      onChange={setProgress}
      onSizeChange={setSize}
      onStrokeWidthChange={setStrokeWidth}
      onSegmentsChange={setSegments}
      onGradientStartChange={setGradientStart}
      onGradientEndChange={setGradientEnd}
      onTogglePercentage={setShowPercentage}
      onReset={resetToDefaults}
    />
  );
};

render(<RotatingGradientSegmentCircularProgressBarDemo />);
