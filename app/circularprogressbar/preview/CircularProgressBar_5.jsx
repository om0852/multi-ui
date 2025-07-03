const TexturedCircularProgressBar = ({
  progress,
  size = 120,
  strokeWidth = 12,
  textureImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnIHZpZXdCb3g9JzAgMCAxMCAxMCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTAnIGhlaWdodD0nMTAnIGZpbGw9JyNlMGVmZjAnLz48cGF0aCBkPSdNMCAwTDEwIDEwTTEwIDBMIDAgMTAnIHN0cm9rZT0nI2QwZDlkMCcgLz48L3N2Zz4=",
  ringColor = "#4A90E2",
  backgroundColor = "#f0f0f0",
  showPercentage = true,
  onStart,
  onComplete,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  
  // State for animation
  const [currentProgress, setCurrentProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [textureRotation, setTextureRotation] = useState(0);
  const [animationFrame, setAnimationFrame] = useState(null);
  
  // Animate progress
  useEffect(() => {
    if (onStart) onStart();
    setIsAnimating(true);
    
    const duration = 1500; // 1.5 seconds for the animation
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
    setAnimationFrame(animationId);
    
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [progress]);
  
  // Animate texture rotation
  useEffect(() => {
    let frameId;
    let startTime = null;
    
    const rotateTexture = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Rotate the texture slowly (one full rotation every 20 seconds)
      setTextureRotation((elapsed * 0.05) % 360);
      
      // Continue the animation
      frameId = requestAnimationFrame(rotateTexture);
    };
    
    // Start the rotation animation
    frameId = requestAnimationFrame(rotateTexture);
    
    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);
  
  const currentOffset = circumference - (currentProgress / 100) * circumference;
  
  // Generate a unique ID for the pattern to avoid conflicts
  const patternId = `texture-pattern-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Textured Progress</h1>
        <p className="text-gray-600 mb-8">Elegant textured progress indicator</p>
        
        <div className="flex flex-col items-center space-y-8">
          <div className="relative" style={{ width: size, height: size }}>
            <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
              <defs>
                {/* Texture pattern */}
                <pattern
                  id={patternId}
                  patternUnits="userSpaceOnUse"
                  width="10"
                  height="10"
                  patternTransform={`rotate(${textureRotation} ${size/2} ${size/2})`}
                >
                  <image
                    xlinkHref={textureImage}
                    width="10"
                    height="10"
                    preserveAspectRatio="none"
                  />
                </pattern>
                
                {/* Gradient for the progress ring */}
                <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={ringColor} />
                  <stop offset="100%" stopColor={ringColor} stopOpacity="0.8" />
                </linearGradient>
                
                {/* Clip path for the progress ring */}
                <clipPath id="progress-clip">
                  <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="white"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={currentOffset}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                  />
                </clipPath>
              </defs>
              
              {/* Background circle */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill={backgroundColor}
                stroke="#e2e8f0"
                strokeWidth="1"
              />
              
              {/* Textured progress ring */}
              <g clipPath="url(#progress-clip)">
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill={`url(#${patternId})`}
                  stroke="url(#progress-gradient)"
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                  style={{
                    transition: 'stroke-dashoffset 0.3s ease-out',
                  }}
                />
              </g>
              
              {/* Center text */}
              {showPercentage && (
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dy=".3em"
                  className="text-xl font-semibold"
                  fill={ringColor}
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Stroke</label>
              <select
                value={strokeWidth}
                onChange={(e) => onStrokeWidthChange && onStrokeWidthChange(parseInt(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="8">Thin (8px)</option>
                <option value="12">Normal (12px)</option>
                <option value="16">Thick (16px)</option>
                <option value="20">Bold (20px)</option>
              </select>
            </div>
          </div>
          
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">Texture</label>
            <div className="grid grid-cols-4 gap-2">
              {[
                { 
                  name: 'Diagonal', 
                  value: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnIHZpZXdCb3g9JzAgMCAxMCAxMCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTAnIGhlaWdodD0nMTAnIGZpbGw9JyNlMGVmZjAnLz48cGF0aCBkPSdNMCAwTDEwIDEwTTEwIDBMIDAgMTAnIHN0cm9rZT0nI2QwZDlkMCcgc3Ryb2tlLXdpZHRoPScxJy8+PC9zdmc+"
                },
                { 
                  name: 'Dots', 
                  value: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnIHZpZXdCb3g9JzAgMCAxMCAxMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTAnIGhlaWdodD0nMTAnIGZpbGw9JyNlMGVmZjAnLz48Y2lyY2xlIGN4PScyJyBjeT0nMicgcj0nMScgZmlsbD0nI2QwZDlkMCcvPjwvc3ZnPg=="
                },
                { 
                  name: 'Grid', 
                  value: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnIHZpZXdCb3g9JzAgMCAxMCAxMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTAnIGhlaWdodD0nMTAnIGZpbGw9JyNlMGVmZjAnLz48cGF0aCBkPSdNIDAgNSBMIDEwIDUnIHN0cm9rZT0nI2QwZDlkMCcgc3Ryb2tlLXdpZHRoPScxJy8+PHBhdGggZD0nTSA1IDAgTCA1IDEwJyBzdHJva2U9JyNkMGQ5ZDAnIHN0cm9rZS13aWR0aD0nMScvPjwvc3ZnPg=="
                },
                { 
                  name: 'Cross', 
                  value: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnIHZpZXdCb3g9JzAgMCAxMCAxMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTAnIGhlaWdodD0nMTAnIGZpbGw9JyNlMGVmZjAnLz48cGF0aCBkPSdNIDAgMCBMIDEwIDEwIE0gMTAgMCBMIDAgMTAiIHN0cm9rZT0nI2QwZDlkMCcgc3Ryb2tlLXdpZHRoPScxJy8+PC9zdmc+"
                }
              ].map((texture, index) => (
                <button
                  key={index}
                  onClick={() => onTextureChange && onTextureChange(texture.value)}
                  className={`p-2 border rounded-md flex items-center justify-center ${
                    textureImage === texture.value ? 'ring-2 ring-offset-2 ring-blue-500 border-transparent' : 'border-gray-300'
                  }`}
                  title={texture.name}
                >
                  <div 
                    className="w-8 h-8 rounded"
                    style={{
                      backgroundImage: `url('${texture.value}')`,
                      backgroundSize: 'cover',
                      backgroundColor: backgroundColor
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">Ring Color</label>
            <div className="flex space-x-2">
              {['#4A90E2', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'].map((color) => (
                <button
                  key={color}
                  onClick={() => onRingColorChange && onRingColorChange(color)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    ringColor === color ? 'ring-2 ring-offset-2 ring-blue-500' : 'border-transparent'
                  }`}
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

const TexturedCircularProgressBarDemo = () => {
  const [progress, setProgress] = useState(65);
  const [size, setSize] = useState(120);
  const [strokeWidth, setStrokeWidth] = useState(12);
  const [ringColor, setRingColor] = useState("#4A90E2");
  const [textureImage, setTextureImage] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnIHZpZXdCb3g9JzAgMCAxMCAxMCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTAnIGhlaWdodD0nMTAnIGZpbGw9JyNlMGVmZjAnLz48cGF0aCBkPSdNMCAwTDEwIDEwTTEwIDBMIDAgMTAnIHN0cm9rZT0nI2QwZDlkMCcgc3Ryb2tlLXdpZHRoPScxJy8+PC9zdmc+");
  const [showPercentage, setShowPercentage] = useState(true);
  
  const handleAnimationStart = () => {
    console.log("Textured animation started");
  };
  
  const handleAnimationComplete = () => {
    console.log("Textured animation completed");
  };
  
  const resetToDefaults = () => {
    setProgress(65);
    setSize(120);
    setStrokeWidth(12);
    setRingColor("#4A90E2");
    setTextureImage("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnIHZpZXdCb3g9JzAgMCAxMCAxMCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTAnIGhlaWdodD0nMTAnIGZpbGw9JyNlMGVmZjAnLz48cGF0aCBkPSdNMCAwTDEwIDEwTTEwIDBMIDAgMTAnIHN0cm9rZT0nI2QwZDlkMCcgc3Ryb2tlLXdpZHRoPScxJy8+PC9zdmc+");
    setShowPercentage(true);
  };

  return (
    <TexturedCircularProgressBar
      progress={progress}
      size={size}
      strokeWidth={strokeWidth}
      textureImage={textureImage}
      ringColor={ringColor}
      showPercentage={showPercentage}
      onStart={handleAnimationStart}
      onComplete={handleAnimationComplete}
      // Callbacks to update state in the demo component
      onChange={setProgress}
      onSizeChange={setSize}
      onStrokeWidthChange={setStrokeWidth}
      onTextureChange={setTextureImage}
      onRingColorChange={setRingColor}
      onTogglePercentage={setShowPercentage}
      onReset={resetToDefaults}
    />
  );
};

render(<TexturedCircularProgressBarDemo />);
