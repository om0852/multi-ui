const GlassMorphismCircularProgressBar = ({
  value,
  max = 100,
  size = 120,
  strokeWidth = 10,
  progressColor = "rgba(59, 130, 246, 0.8)",
  glassColor = "rgba(255, 255, 255, 0.2)",
  showPercentage = true,
  blurAmount = 10,
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
  
  // Generate gradient ID
  const gradientId = `gradient-${progressColor.replace(/[^a-zA-Z0-9]/g, '')}`;
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 p-6">
      <div className="w-full max-w-md bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl p-8"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          backdropFilter: `blur(${blurAmount}px)`,
          WebkitBackdropFilter: `blur(${blurAmount}px)`,
          border: '1px solid rgba(255, 255, 255, 0.18)',
        }}
      >
        <h1 className="text-2xl font-bold text-white mb-2">Glass Morphism</h1>
        <p className="text-white/80 mb-8">With frosted glass effect</p>
        
        <div className="flex flex-col items-center space-y-8">
          <div className="relative" style={{ width: size, height: size }}>
            <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
              <defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={progressColor} />
                  <stop offset="100%" stopColor={progressColor.replace('0.8', '0.5')} />
                </linearGradient>
                
                {/* Glass effect filter */}
                <filter id="glass" x="0" y="0" width="100%" height="100%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                  <feColorMatrix 
                    in="blur" 
                    mode="matrix" 
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -7" 
                    result="glass"
                  />
                  <feComposite in="SourceGraphic" in2="glass" operator="atop"/>
                </filter>
              </defs>
              
              {/* Background circle with glass effect */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill={glassColor}
                filter="url(#glass)"
                style={{
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
              />
              
              {/* Progress track */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth={strokeWidth}
              />
              
              {/* Progress bar */}
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
                  filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))',
                }}
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
              />
              
              {/* Center hole with glass effect */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius - strokeWidth}
                fill="rgba(255, 255, 255, 0.1)"
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
                    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  }}
                >
                  {`${Math.round(currentPercentage)}%`}
                </text>
              )}
            </svg>
            
            {/* Animation indicator */}
            {isAnimating && (
              <div className="absolute -bottom-8 left-0 right-0 text-center">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white">
                  <svg className="animate-spin -ml-1 mr-1.5 h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
              <label className="text-sm font-medium text-white">
                Value: {value} / {max}
              </label>
              <span className="text-sm text-white/80">
                {Math.round(currentValue)} / {max}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max={max}
              value={value}
              onChange={(e) => onChange && onChange(parseInt(e.target.value))}
              className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer"
              style={{
                WebkitAppearance: 'none',
              }}
            />
          </div>
          
          <div className="w-full grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-1">Size</label>
              <select
                value={size}
                onChange={(e) => onSizeChange && onSizeChange(parseInt(e.target.value))}
                className="w-full p-2 bg-white/20 border border-white/30 rounded-md text-sm text-white"
                style={{
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
              >
                <option value="80">Small (80px)</option>
                <option value="100">Medium (100px)</option>
                <option value="120">Large (120px)</option>
                <option value="150">X-Large (150px)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Stroke: {strokeWidth}px
              </label>
              <input
                type="range"
                min="4"
                max="20"
                value={strokeWidth}
                onChange={(e) => onStrokeWidthChange && onStrokeWidthChange(parseInt(e.target.value))}
                className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer"
                style={{
                  WebkitAppearance: 'none',
                }}
              />
            </div>
          </div>
          
          <div className="w-full">
            <label className="block text-sm font-medium text-white mb-1">Blur Amount</label>
            <input
              type="range"
              min="0"
              max="20"
              value={blurAmount}
              onChange={(e) => onBlurAmountChange && onBlurAmountChange(parseInt(e.target.value))}
              className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer"
              style={{
                WebkitAppearance: 'none',
              }}
            />
          </div>
          
          <div className="w-full">
            <label className="block text-sm font-medium text-white mb-1">Progress Color</label>
            <div className="flex space-x-2">
              {[
                'rgba(59, 130, 246, 0.8)', 
                'rgba(16, 185, 129, 0.8)', 
                'rgba(245, 158, 11, 0.8)', 
                'rgba(236, 72, 153, 0.8)', 
                'rgba(139, 92, 246, 0.8)'
              ].map((color) => (
                <button
                  key={color}
                  onClick={() => onProgressColorChange && onProgressColorChange(color)}
                  className={`w-8 h-8 rounded-full border-2 ${progressColor === color ? 'ring-2 ring-offset-2 ring-white' : 'border-transparent'}`}
                  style={{ 
                    backgroundColor: color,
                    backdropFilter: 'blur(5px)',
                    WebkitBackdropFilter: 'blur(5px)',
                  }}
                  title={color}
                />
              ))}
            </div>
          </div>
          
          <div className="w-full pt-4 border-t border-white/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="showPercentage"
                  checked={showPercentage}
                  onChange={(e) => onTogglePercentage && onTogglePercentage(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-white/30 rounded bg-white/20"
                />
                <label htmlFor="showPercentage" className="ml-2 block text-sm text-white">
                  Show percentage
                </label>
              </div>
              
              <button
                onClick={onReset}
                className="px-3 py-1 text-sm font-medium text-white hover:text-white/80"
                style={{
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '0.375rem',
                }}
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

const GlassMorphismCircularProgressBarDemo = () => {
  const [value, setValue] = useState(75);
  const [max, setMax] = useState(100);
  const [size, setSize] = useState(120);
  const [strokeWidth, setStrokeWidth] = useState(10);
  const [blurAmount, setBlurAmount] = useState(10);
  const [progressColor, setProgressColor] = useState("rgba(59, 130, 246, 0.8)");
  const [showPercentage, setShowPercentage] = useState(true);
  
  const handleAnimationStart = () => {
    console.log("Glass morphism animation started");
  };
  
  const handleAnimationComplete = () => {
    console.log("Glass morphism animation completed");
  };
  
  const resetToDefaults = () => {
    setValue(75);
    setMax(100);
    setSize(120);
    setStrokeWidth(10);
    setBlurAmount(10);
    setProgressColor("rgba(59, 130, 246, 0.8)");
    setShowPercentage(true);
  };

  return (
    <GlassMorphismCircularProgressBar
      value={value}
      max={max}
      size={size}
      strokeWidth={strokeWidth}
      blurAmount={blurAmount}
      progressColor={progressColor}
      showPercentage={showPercentage}
      onStart={handleAnimationStart}
      onComplete={handleAnimationComplete}
      // Callbacks to update state in the demo component
      onChange={setValue}
      onMaxChange={setMax}
      onSizeChange={setSize}
      onStrokeWidthChange={setStrokeWidth}
      onBlurAmountChange={setBlurAmount}
      onProgressColorChange={setProgressColor}
      onTogglePercentage={setShowPercentage}
      onReset={resetToDefaults}
    />
  );
};

render(<GlassMorphismCircularProgressBarDemo />);
