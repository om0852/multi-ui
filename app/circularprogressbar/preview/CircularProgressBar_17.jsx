const GradientWaveCircularProgressBar = ({
  value,
  max = 100,
  size = 120,
  strokeWidth = 12,
  waveAmplitude = 10,
  waveFrequency = 2,
  gradientStart = "#3B82F6",
  gradientEnd = "#8B5CF6",
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
  const [waveOffset, setWaveOffset] = useState(0);
  
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
  
  // Animate wave effect
  useEffect(() => {
    let animationFrameId;
    let lastTimestamp = 0;
    const speed = 0.03; // Speed of the wave animation
    
    const animateWave = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      // Update wave offset
      setWaveOffset(prev => (prev + speed * (deltaTime / 16)) % (Math.PI * 2));
      
      animationFrameId = requestAnimationFrame(animateWave);
    };
    
    animationFrameId = requestAnimationFrame(animateWave);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  // Calculate current percentage and dash offset
  const currentPercentage = (currentValue / max) * 100;
  const currentStrokeDashoffset = circumference - (currentPercentage / 100) * circumference;
  
  // Generate wave path
  const generateWavePath = () => {
    const centerX = size / 2;
    const centerY = size / 2;
    const points = [];
    const segments = 36; // Number of segments for the wave
    
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const waveOffsetAngle = angle * waveFrequency + waveOffset;
      const waveHeight = Math.sin(waveOffsetAngle) * waveAmplitude * (1 - currentPercentage / 100);
      const x = centerX + (radius - strokeWidth / 2 + waveHeight) * Math.cos(angle - Math.PI / 2);
      const y = centerY + (radius - strokeWidth / 2 + waveHeight) * Math.sin(angle - Math.PI / 2);
      
      if (i === 0) {
        points.push(`M ${x} ${y}`);
      } else {
        points.push(`L ${x} ${y}`);
      }
    }
    
    return points.join(' ');
  };
  
  // Generate gradient ID
  const gradientId = `gradient-${gradientStart.replace('#', '')}-${gradientEnd.replace('#', '')}`;
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="w-full max-w-md bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-700/50">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
          Gradient Wave
        </h1>
        <p className="text-gray-400 mb-8">With animated wave effect</p>
        
        <div className="flex flex-col items-center space-y-8">
          <div className="relative" style={{ width: size, height: size }}>
            <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
              <defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={gradientStart} />
                  <stop offset="100%" stopColor={gradientEnd} />
                </linearGradient>
                
                {/* Clip path for the wave effect */}
                <clipPath id="wave-clip">
                  <path d={generateWavePath()} />
                </clipPath>
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
              
              {/* Wave effect */}
              <g clipPath="url(#wave-clip)">
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill={`url(#${gradientId})`}
                  opacity="0.8"
                />
                
                {/* Animated highlights */}
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius * 0.7}
                  fill="white"
                  opacity="0.1"
                  style={{
                    transformOrigin: 'center',
                    animation: 'pulse 3s ease-in-out infinite',
                  }}
                />
              </g>
              
              {/* Progress bar outline */}
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
                  filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.5))',
                }}
              />
              
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
                    textShadow: '0 0 10px rgba(139, 92, 246, 0.8)',
                  }}
                >
                  {`${Math.round(currentPercentage)}%`}
                </text>
              )}
            </svg>
            
            {/* Animation indicator */}
            {isAnimating && (
              <div className="absolute -bottom-8 left-0 right-0 text-center">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-900/50 text-purple-200 border border-purple-700/50">
                  <svg className="animate-spin -ml-1 mr-1.5 h-3 w-3 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
          
          <div className="w-full grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Wave Height: {waveAmplitude}
              </label>
              <input
                type="range"
                min="0"
                max="20"
                value={waveAmplitude}
                onChange={(e) => onWaveAmplitudeChange && onWaveAmplitudeChange(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Wave Frequency: {waveFrequency}
              </label>
              <input
                type="range"
                min="1"
                max="5"
                step="0.5"
                value={waveFrequency}
                onChange={(e) => onWaveFrequencyChange && onWaveFrequencyChange(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
          
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-300 mb-1">Gradient Colors</label>
            <div className="flex items-center space-x-4">
              <div>
                <div className="text-xs text-gray-400 mb-1">Start</div>
                <div className="flex space-x-1">
                  {['#3B82F6', '#10B981', '#F59E0B', '#EC4899', '#8B5CF6'].map((color) => (
                    <button
                      key={`start-${color}`}
                      onClick={() => onGradientStartChange && onGradientStartChange(color)}
                      className={`w-6 h-6 rounded-full border ${gradientStart === color ? 'ring-2 ring-offset-2 ring-blue-500' : 'border-transparent'}`}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">End</div>
                <div className="flex space-x-1">
                  {['#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#3B82F6'].map((color) => (
                    <button
                      key={`end-${color}`}
                      onClick={() => onGradientEndChange && onGradientEndChange(color)}
                      className={`w-6 h-6 rounded-full border ${gradientEnd === color ? 'ring-2 ring-offset-2 ring-purple-500' : 'border-transparent'}`}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
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
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-600 rounded bg-gray-700"
                />
                <label htmlFor="showPercentage" className="ml-2 block text-sm text-gray-300">
                  Show percentage
                </label>
              </div>
              
              <button
                onClick={onReset}
                className="px-3 py-1 text-sm font-medium text-purple-400 hover:text-purple-300"
              >
                Reset to Defaults
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add global styles for animations */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

const GradientWaveCircularProgressBarDemo = () => {
  const [value, setValue] = useState(75);
  const [max, setMax] = useState(100);
  const [size, setSize] = useState(120);
  const [strokeWidth, setStrokeWidth] = useState(12);
  const [waveAmplitude, setWaveAmplitude] = useState(10);
  const [waveFrequency, setWaveFrequency] = useState(2);
  const [gradientStart, setGradientStart] = useState("#3B82F6");
  const [gradientEnd, setGradientEnd] = useState("#8B5CF6");
  const [showPercentage, setShowPercentage] = useState(true);
  
  const handleAnimationStart = () => {
    console.log("Gradient wave animation started");
  };
  
  const handleAnimationComplete = () => {
    console.log("Gradient wave animation completed");
  };
  
  const resetToDefaults = () => {
    setValue(75);
    setMax(100);
    setSize(120);
    setStrokeWidth(12);
    setWaveAmplitude(10);
    setWaveFrequency(2);
    setGradientStart("#3B82F6");
    setGradientEnd("#8B5CF6");
    setShowPercentage(true);
  };

  return (
    <GradientWaveCircularProgressBar
      value={value}
      max={max}
      size={size}
      strokeWidth={strokeWidth}
      waveAmplitude={waveAmplitude}
      waveFrequency={waveFrequency}
      gradientStart={gradientStart}
      gradientEnd={gradientEnd}
      showPercentage={showPercentage}
      onStart={handleAnimationStart}
      onComplete={handleAnimationComplete}
      // Callbacks to update state in the demo component
      onChange={setValue}
      onMaxChange={setMax}
      onSizeChange={setSize}
      onStrokeWidthChange={setStrokeWidth}
      onWaveAmplitudeChange={setWaveAmplitude}
      onWaveFrequencyChange={setWaveFrequency}
      onGradientStartChange={setGradientStart}
      onGradientEndChange={setGradientEnd}
      onTogglePercentage={setShowPercentage}
      onReset={resetToDefaults}
    />
  );
};

render(<GradientWaveCircularProgressBarDemo />);
