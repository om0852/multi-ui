const HolographicCircularProgressBar = ({
  value,
  max = 100,
  size = 120,
  strokeWidth = 12,
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
  const [animationAngle, setAnimationAngle] = useState(0);
  
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
  
  // Animate the holographic effect
  useEffect(() => {
    let animationFrameId;
    let lastTimestamp = 0;
    const speed = 0.5; // Speed of the holographic animation
    
    const animateHologram = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      // Update animation angle
      setAnimationAngle(prev => (prev + speed * (deltaTime / 16)) % 360);
      
      animationFrameId = requestAnimationFrame(animateHologram);
    };
    
    animationFrameId = requestAnimationFrame(animateHologram);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  // Calculate current percentage and dash offset
  const currentPercentage = (currentValue / max) * 100;
  const currentStrokeDashoffset = circumference - (currentPercentage / 100) * circumference;
  
  // Generate gradient ID
  const gradientId = 'holographic-gradient';
  const maskId = 'holographic-mask';
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="w-full max-w-md bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-700/50">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
          Holographic Effect
        </h1>
        <p className="text-gray-400 mb-8">With light refraction and spectral colors</p>
        
        <div className="flex flex-col items-center space-y-8">
          <div className="relative" style={{ width: size, height: size }}>
            <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
              <defs>
                {/* Holographic gradient */}
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F2FE" stopOpacity="0.8" />
                  <stop offset="25%" stopColor="#4FACFE" stopOpacity="0.7" />
                  <stop offset="50%" stopColor="#A18CD1" stopOpacity="0.8" />
                  <stop offset="75%" stopColor="#FBC2EB" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#FF9A9E" stopOpacity="0.8" />
                </linearGradient>
                
                {/* Mask for the progress bar */}
                <mask id={maskId}>
                  <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="white"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={currentStrokeDashoffset}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                  />
                </mask>
                
                {/* Filter for the holographic effect */}
                <filter id="holographic" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -7" result="hologram" />
                  <feComposite in="SourceGraphic" in2="hologram" operator="atop" />
                </filter>
                
                {/* Animated gradient for the holographic effect */}
                <radialGradient id="hologram-shine" cx="50%" cy="50%" r="50%" gradientTransform={`rotate(${animationAngle} 0.5 0.5)`}>
                  <stop offset="0%" stopColor="white" stopOpacity="0" />
                  <stop offset="30%" stopColor="white" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="white" stopOpacity="0.3" />
                  <stop offset="70%" stopColor="white" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
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
              
              {/* Holographic progress bar */}
              <g mask={`url(#${maskId})`}>
                <rect 
                  x="0" 
                  y="0" 
                  width={size} 
                  height={size} 
                  fill={`url(#${gradientId})`}
                  style={{
                    filter: 'url(#holographic)',
                    mixBlendMode: 'screen',
                  }}
                />
                
                {/* Animated shine effect */}
                <rect 
                  x="0" 
                  y="0" 
                  width={size} 
                  height={size} 
                  fill="url(#hologram-shine)"
                  style={{
                    mixBlendMode: 'overlay',
                  }}
                />
                
                {/* Subtle noise texture */}
                <rect 
                  x="0" 
                  y="0" 
                  width={size} 
                  height={size} 
                  fill="url(#noise)"
                  opacity="0.05"
                  style={{
                    mixBlendMode: 'overlay',
                  }}
                />
              </g>
              
              {/* Center hole */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius - strokeWidth}
                fill="rgba(17, 24, 39, 0.7)"
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
                    textShadow: '0 0 10px rgba(79, 172, 254, 0.8)',
                  }}
                >
                  {`${Math.round(currentPercentage)}%`}
                </text>
              )}
              
              {/* Add subtle particles */}
              {Array.from({ length: 20 }).map((_, i) => (
                <circle
                  key={i}
                  cx={Math.random() * size}
                  cy={Math.random() * size}
                  r={Math.random() * 1.5}
                  fill="white"
                  opacity={Math.random() * 0.3}
                  style={{
                    animation: `float ${3 + Math.random() * 5}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </svg>
            
            {/* Animation indicator */}
            {isAnimating && (
              <div className="absolute -bottom-8 left-0 right-0 text-center">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/50 text-blue-200 border border-blue-700/50">
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
      
      {/* Add global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-5px) translateX(2px); }
          50% { transform: translateY(-10px) translateX(-2px); }
          75% { transform: translateY(-5px) translateX(2px); }
        }
        
        /* Add noise texture */
        svg {
          --noise: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' fill='none' opacity='0.3'/%3E%3C/svg%3E");
        }
        
        svg defs {
          background-image: var(--noise);
        }
      `}</style>
    </div>
  );
};

const HolographicCircularProgressBarDemo = () => {
  const [value, setValue] = useState(75);
  const [max, setMax] = useState(100);
  const [size, setSize] = useState(120);
  const [strokeWidth, setStrokeWidth] = useState(12);
  const [showPercentage, setShowPercentage] = useState(true);
  
  const handleAnimationStart = () => {
    console.log("Holographic animation started");
  };
  
  const handleAnimationComplete = () => {
    console.log("Holographic animation completed");
  };
  
  const resetToDefaults = () => {
    setValue(75);
    setMax(100);
    setSize(120);
    setStrokeWidth(12);
    setShowPercentage(true);
  };

  return (
    <HolographicCircularProgressBar
      value={value}
      max={max}
      size={size}
      strokeWidth={strokeWidth}
      showPercentage={showPercentage}
      onStart={handleAnimationStart}
      onComplete={handleAnimationComplete}
      // Callbacks to update state in the demo component
      onChange={setValue}
      onMaxChange={setMax}
      onSizeChange={setSize}
      onStrokeWidthChange={setStrokeWidth}
      onTogglePercentage={setShowPercentage}
      onReset={resetToDefaults}
    />
  );
};

render(<HolographicCircularProgressBarDemo />);
