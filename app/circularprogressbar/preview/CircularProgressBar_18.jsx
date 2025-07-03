const AnimatedGradientCircularProgressBar = ({
  value,
  max = 100,
  size = 120,
  strokeWidth = 12,
  gradientColors = ["#3B82F6", "#8B5CF6", "#EC4899", "#F59E0B", "#10B981"],
  showPercentage = true,
  animateGradient = true,
  onStart,
  onComplete,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = (value / max) * 100;
  
  // State for animation
  const [currentValue, setCurrentValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [gradientRotation, setGradientRotation] = useState(0);
  
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
  
  // Animate gradient rotation
  useEffect(() => {
    if (!animateGradient) return;
    
    let animationFrameId;
    let lastTimestamp = 0;
    const rotationSpeed = 0.5; // Degrees per frame
    
    const animateGradientRotation = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      // Update gradient rotation
      setGradientRotation(prev => (prev + rotationSpeed * (deltaTime / 16)) % 360);
      
      animationFrameId = requestAnimationFrame(animateGradientRotation);
    };
    
    animationFrameId = requestAnimationFrame(animateGradientRotation);
    
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [animateGradient]);
  
  // Calculate current percentage and dash offset
  const currentPercentage = (currentValue / max) * 100;
  const currentStrokeDashoffset = circumference - (currentPercentage / 100) * circumference;
  
  // Generate gradient stops
  const gradientStops = gradientColors.map((color, index) => (
    <stop 
      key={index} 
      offset={`${(index / (gradientColors.length - 1)) * 100}%`} 
      stopColor={color} 
    />
  ));
  
  // Generate gradient ID
  const gradientId = 'animated-gradient';
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="w-full max-w-md bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-700/50">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-2">
          Animated Gradient
        </h1>
        <p className="text-gray-400 mb-8">With rotating gradient effect</p>
        
        <div className="flex flex-col items-center space-y-8">
          <div className="relative" style={{ width: size, height: size }}>
            <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
              <defs>
                <linearGradient 
                  id={gradientId} 
                  x1="0%" 
                  y1="0%" 
                  x2="100%" 
                  y2="100%"
                  gradientTransform={`rotate(${gradientRotation} 0.5 0.5)`}
                >
                  {gradientStops}
                </linearGradient>
                
                {/* Glow effect */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              
              {/* Background circle */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="rgba(75, 85, 99, 0.3)"
                strokeWidth={strokeWidth}
              />
              
              {/* Progress bar with animated gradient */}
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
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
                style={{
                  filter: 'url(#glow)',
                }}
              />
              
              {/* Center hole */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius - strokeWidth}
                fill="rgba(17, 24, 39, 0.8)"
                style={{
                  backdropFilter: 'blur(5px)',
                  WebkitBackdropFilter: 'blur(5px)',
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
                  fill="white"
                  style={{
                    textShadow: '0 0 10px rgba(139, 92, 246, 0.8)',
                  }}
                >
                  {`${Math.round(currentPercentage)}%`}
                </text>
              )}
              
              {/* Animated dots along the progress */}
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i / 8) * 360 - 90; // Convert to degrees and offset by -90deg
                const radian = (angle * Math.PI) / 180;
                const dotSize = 4;
                const dotRadius = radius - strokeWidth / 2 - dotSize / 2;
                const x = size / 2 + dotRadius * Math.cos(radian);
                const y = size / 2 + dotRadius * Math.sin(radian);
                const isActive = (angle + 90) % 360 <= (currentPercentage / 100) * 360;
                
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r={isActive ? dotSize : dotSize * 0.5}
                    fill={isActive ? `url(#${gradientId})` : 'rgba(255, 255, 255, 0.1)'}
                    style={{
                      transition: 'all 0.3s ease',
                    }}
                  />
                );
              })}
            </svg>
            
            {/* Animation indicator */}
            {isAnimating && (
              <div className="absolute -bottom-8 left-0 right-0 text-center">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-900/50 text-pink-200 border border-pink-700/50">
                  <svg className="animate-spin -ml-1 mr-1.5 h-3 w-3 text-pink-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-300">
                Gradient Colors
              </label>
              <button
                onClick={() => onRandomizeColors && onRandomizeColors()}
                className="text-xs px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded text-gray-300"
              >
                Randomize
              </button>
            </div>
            <div className="flex flex-wrap gap-1">
              {gradientColors.map((color, index) => (
                <div key={index} className="relative group">
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => onGradientColorChange && onGradientColorChange(index, e.target.value)}
                    className="w-8 h-8 rounded-full border-2 border-transparent cursor-pointer"
                    style={{
                      backgroundColor: color,
                    }}
                  />
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {color}
                  </div>
                </div>
              ))}
              {gradientColors.length < 5 && (
                <button
                  onClick={() => onAddGradientColor && onAddGradientColor()}
                  className="w-8 h-8 rounded-full border-2 border-dashed border-gray-500 flex items-center justify-center text-gray-400 hover:border-gray-300 hover:text-gray-200"
                  title="Add color"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              )}
              {gradientColors.length > 2 && (
                <button
                  onClick={() => onRemoveGradientColor && onRemoveGradientColor()}
                  className="w-8 h-8 rounded-full border-2 border-dashed border-red-500 flex items-center justify-center text-red-400 hover:border-red-400 hover:text-red-300"
                  title="Remove color"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
              )}
            </div>
          </div>
          
          <div className="w-full pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="showPercentage"
                    checked={showPercentage}
                    onChange={(e) => onTogglePercentage && onTogglePercentage(e.target.checked)}
                    className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-600 rounded bg-gray-700"
                  />
                  <label htmlFor="showPercentage" className="ml-2 block text-sm text-gray-300">
                    Show percentage
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="animateGradient"
                    checked={animateGradient}
                    onChange={(e) => onToggleAnimateGradient && onToggleAnimateGradient(e.target.checked)}
                    className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-600 rounded bg-gray-700"
                  />
                  <label htmlFor="animateGradient" className="ml-2 block text-sm text-gray-300">
                    Animate gradient
                  </label>
                </div>
              </div>
              
              <button
                onClick={onReset}
                className="px-3 py-1 text-sm font-medium text-pink-400 hover:text-pink-300"
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

const AnimatedGradientCircularProgressBarDemo = () => {
  const [value, setValue] = useState(75);
  const [max, setMax] = useState(100);
  const [size, setSize] = useState(120);
  const [strokeWidth, setStrokeWidth] = useState(12);
  const [gradientColors, setGradientColors] = useState(["#3B82F6", "#8B5CF6", "#EC4899", "#F59E0B", "#10B981"]);
  const [showPercentage, setShowPercentage] = useState(true);
  const [animateGradient, setAnimateGradient] = useState(true);
  
  const handleAnimationStart = () => {
    console.log("Animated gradient animation started");
  };
  
  const handleAnimationComplete = () => {
    console.log("Animated gradient animation completed");
  };
  
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  const handleRandomizeColors = () => {
    const newColors = [];
    const numColors = Math.max(3, Math.floor(Math.random() * 3) + 3); // 3-5 colors
    
    for (let i = 0; i < numColors; i++) {
      newColors.push(getRandomColor());
    }
    
    setGradientColors(newColors);
  };
  
  const handleAddGradientColor = () => {
    if (gradientColors.length < 5) {
      setGradientColors([...gradientColors, getRandomColor()]);
    }
  };
  
  const handleRemoveGradientColor = () => {
    if (gradientColors.length > 2) {
      setGradientColors(gradientColors.slice(0, -1));
    }
  };
  
  const handleGradientColorChange = (index, color) => {
    const newColors = [...gradientColors];
    newColors[index] = color;
    setGradientColors(newColors);
  };
  
  const resetToDefaults = () => {
    setValue(75);
    setMax(100);
    setSize(120);
    setStrokeWidth(12);
    setGradientColors(["#3B82F6", "#8B5CF6", "#EC4899", "#F59E0B", "#10B981"]);
    setShowPercentage(true);
    setAnimateGradient(true);
  };

  return (
    <AnimatedGradientCircularProgressBar
      value={value}
      max={max}
      size={size}
      strokeWidth={strokeWidth}
      gradientColors={gradientColors}
      showPercentage={showPercentage}
      animateGradient={animateGradient}
      onStart={handleAnimationStart}
      onComplete={handleAnimationComplete}
      // Callbacks to update state in the demo component
      onChange={setValue}
      onMaxChange={setMax}
      onSizeChange={setSize}
      onStrokeWidthChange={setStrokeWidth}
      onTogglePercentage={setShowPercentage}
      onToggleAnimateGradient={setAnimateGradient}
      onRandomizeColors={handleRandomizeColors}
      onAddGradientColor={handleAddGradientColor}
      onRemoveGradientColor={handleRemoveGradientColor}
      onGradientColorChange={handleGradientColorChange}
      onReset={resetToDefaults}
    />
  );
};

render(<AnimatedGradientCircularProgressBarDemo />);
