const WaveCircularProgressBar = ({
  progress,
  size = 120,
  waveColor = "#4A90E2",
  backgroundColor = "#e6e6e6",
  showPercentage = true,
  onStart,
  onComplete,
}) => {
  const waveHeight = 10;
  const [currentProgress, setCurrentProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [waveOffset, setWaveOffset] = useState(0);
  const [animationFrame, setAnimationFrame] = useState(null);
  
  // Animation state
  const [animationStartTime, setAnimationStartTime] = useState(null);
  const [prevProgress, setPrevProgress] = useState(0);
  
  // Wave animation effect
  useEffect(() => {
    let frameId;
    let startTime = null;
    
    const animateWave = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Update wave offset for the wave animation (moves the wave)
      setWaveOffset(Math.sin(elapsed * 0.005) * 5);
      
      // Continue the animation
      frameId = requestAnimationFrame(animateWave);
    };
    
    // Start the wave animation
    frameId = requestAnimationFrame(animateWave);
    setAnimationFrame(frameId);
    
    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);
  
  // Progress animation effect
  useEffect(() => {
    if (onStart) onStart();
    setIsAnimating(true);
    
    const duration = 1500; // 1.5 seconds for the animation
    const startTime = Date.now();
    const startValue = prevProgress;
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
        setPrevProgress(endValue);
        if (onComplete) onComplete();
      }
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [progress]);
  
  // Clean up animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [animationFrame]);
  
  // Calculate wave path
  const getWavePath = (progress) => {
    const width = size;
    const height = size;
    const waveY = (1 - progress / 100) * height;
    
    // Create a wavy path
    const wavePoints = [];
    const segments = 8;
    
    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * width;
      // Add wave effect using sine function
      const waveX = waveOffset * Math.sin((i / segments) * Math.PI * 2 + (Date.now() * 0.002));
      const y = waveY + waveX;
      
      if (i === 0) {
        wavePoints.push(`M 0,${y}`);
      } else {
        wavePoints.push(`L ${x},${y}`);
      }
    }
    
    // Complete the path to form a closed shape
    wavePoints.push(`L ${width},${height} L 0,${height} Z`);
    
    return wavePoints.join(' ');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Wave Progress</h1>
        <p className="text-gray-600 mb-8">Liquid wave animation effect</p>
        
        <div className="flex flex-col items-center space-y-8">
          <div className="relative" style={{ width: size, height: size }}>
            {/* Background circle */}
            <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
              <circle
                cx={size / 2}
                cy={size / 2}
                r={size / 2 - 2}
                fill={backgroundColor}
                stroke="#e2e8f0"
                strokeWidth="1"
              />
              
              {/* Wave fill */}
              <path
                d={getWavePath(currentProgress)}
                fill={waveColor}
                fillOpacity="0.7"
              />
              
              {/* Inner circle for wave effect */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={size / 2 - 10}
                fill="none"
                stroke="rgba(255, 255, 255, 0.6)"
                strokeWidth="2"
              />
              
              {/* Center text */}
              {showPercentage && (
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dy=".3em"
                  className="text-xl font-semibold"
                  fill={waveColor}
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
                <option value="100">Small (100px)</option>
                <option value="120">Medium (120px)</option>
                <option value="150">Large (150px)</option>
                <option value="180">X-Large (180px)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Wave Color</label>
              <div className="flex space-x-2">
                {['#4A90E2', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'].map((color) => (
                  <button
                    key={color}
                    onClick={() => onWaveColorChange && onWaveColorChange(color)}
                    className={`w-6 h-6 rounded-full border-2 ${waveColor === color ? 'ring-2 ring-offset-2 ring-blue-500' : 'border-transparent'}`}
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

const WaveCircularProgressBarDemo = () => {
  const [progress, setProgress] = useState(65);
  const [size, setSize] = useState(120);
  const [waveColor, setWaveColor] = useState("#4A90E2");
  const [showPercentage, setShowPercentage] = useState(true);
  
  const handleAnimationStart = () => {
    console.log("Wave animation started");
  };
  
  const handleAnimationComplete = () => {
    console.log("Wave animation completed");
  };
  
  const resetToDefaults = () => {
    setProgress(65);
    setSize(120);
    setWaveColor("#4A90E2");
    setShowPercentage(true);
  };

  return (
    <WaveCircularProgressBar
      progress={progress}
      size={size}
      waveColor={waveColor}
      showPercentage={showPercentage}
      onStart={handleAnimationStart}
      onComplete={handleAnimationComplete}
      // Callbacks to update state in the demo component
      onChange={setProgress}
      onSizeChange={setSize}
      onWaveColorChange={setWaveColor}
      onTogglePercentage={setShowPercentage}
      onReset={resetToDefaults}
    />
  );
};

render(<WaveCircularProgressBarDemo />);
