const ParticleCircularProgressBar = ({
  progress,
  size = 120,
  ringColor = "#4A90E2",
  backgroundColor = "#e6e6e6",
  particleColor = "#FFD700",
  showPercentage = true,
  onStart,
  onComplete,
}) => {
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  
  // State for animation
  const [currentProgress, setCurrentProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [particles, setParticles] = useState([]);
  const [hydrated, setHydrated] = useState(false);
  
  // Set hydrated to true after component mounts (for SSR compatibility)
  useEffect(() => {
    setHydrated(true);
  }, []);
  
  // Generate particles around the progress circle
  const generateParticles = (count) => {
    const newParticles = [];
    for (let i = 0; i < count; i++) {
      const angle = (Math.random() * Math.PI * 2);
      const distance = radius - strokeWidth / 2 - 2;
      const x = Math.cos(angle) * distance + size / 2;
      const y = Math.sin(angle) * distance + size / 2;
      
      newParticles.push({
        id: i,
        x,
        y,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.5,
        angle,
        distance,
      });
    }
    return newParticles;
  };
  
  // Initialize particles
  useEffect(() => {
    if (hydrated) {
      setParticles(generateParticles(20));
    }
  }, [hydrated, size]);
  
  // Animate progress and particles
  useEffect(() => {
    if (!hydrated) return;
    
    if (onStart) onStart();
    setIsAnimating(true);
    
    const duration = 1500; // 1.5 seconds for the animation
    const startTime = Date.now();
    const startValue = 0;
    const endValue = progress;
    
    // Animate progress
    const animateProgress = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out function
      const easeOut = (t) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOut(progress);
      
      // Update current progress
      const newProgress = startValue + (endValue - startValue) * easedProgress;
      setCurrentProgress(newProgress);
      
      // Update particles
      setParticles(prevParticles => {
        return prevParticles.map(particle => {
          // Make particles move slightly for a dynamic effect
          const angle = particle.angle + (Math.PI * 2 * progress * 0.1);
          const x = Math.cos(angle) * particle.distance + size / 2;
          const y = Math.sin(angle) * particle.distance + size / 2;
          
          return {
            ...particle,
            x,
            y,
            angle,
            opacity: Math.sin(progress * Math.PI) * 0.5 + 0.5, // Fade in/out effect
          };
        });
      });
      
      // Continue animation if not complete
      if (progress < 1) {
        requestAnimationFrame(animateProgress);
      } else {
        setIsAnimating(false);
        if (onComplete) onComplete();
      }
    };
    
    const animationId = requestAnimationFrame(animateProgress);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [progress, hydrated]);
  
  const currentOffset = circumference - (currentProgress / 100) * circumference;
  
  // Don't render anything during SSR
  if (!hydrated) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Particle Progress</h1>
        <p className="text-gray-600 mb-8">Animated particles around the progress ring</p>
        
        <div className="flex flex-col items-center space-y-8">
          <div className="relative" style={{ width: size, height: size }}>
            <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
              {/* Background circle */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill={backgroundColor}
                stroke="#e2e8f0"
                strokeWidth="1"
              />
              
              {/* Progress ring */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={ringColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={currentOffset}
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
                style={{
                  transition: 'stroke-dashoffset 0.3s ease-out',
                  opacity: 0.8
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
                  fill={ringColor}
                >
                  {`${Math.round(currentProgress)}%`}
                </text>
              )}
              
              {/* Particles */}
              {particles.map((particle) => (
                <circle
                  key={particle.id}
                  cx={particle.x}
                  cy={particle.y}
                  r={particle.size}
                  fill={particleColor}
                  opacity={particle.opacity}
                  style={{
                    transition: 'all 0.3s ease-out',
                  }}
                />
              ))}
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Ring Color</label>
              <div className="flex space-x-2">
                {['#4A90E2', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'].map((color) => (
                  <button
                    key={`ring-${color}`}
                    onClick={() => onRingColorChange && onRingColorChange(color)}
                    className={`w-6 h-6 rounded-full border-2 ${ringColor === color ? 'ring-2 ring-offset-2 ring-blue-500' : 'border-transparent'}`}
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="w-full grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Particle Color</label>
              <div className="flex space-x-2">
                {['#FFD700', '#FF6B6B', '#51CF66', '#FF8787', '#FFD43B'].map((color) => (
                  <button
                    key={`particle-${color}`}
                    onClick={() => onParticleColorChange && onParticleColorChange(color)}
                    className={`w-6 h-6 rounded-full border-2 ${particleColor === color ? 'ring-2 ring-offset-2 ring-blue-500' : 'border-transparent'}`}
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Particle Count</label>
              <select
                value={particles.length}
                onChange={(e) => onParticleCountChange && onParticleCountChange(parseInt(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="10">Few (10)</option>
                <option value="20">Normal (20)</option>
                <option value="30">Many (30)</option>
                <option value="50">Lots (50)</option>
              </select>
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

const ParticleCircularProgressBarDemo = () => {
  const [progress, setProgress] = useState(65);
  const [size, setSize] = useState(120);
  const [ringColor, setRingColor] = useState("#4A90E2");
  const [particleColor, setParticleColor] = useState("#FFD700");
  const [particleCount, setParticleCount] = useState(20);
  const [showPercentage, setShowPercentage] = useState(true);
  
  const handleAnimationStart = () => {
    console.log("Particle animation started");
  };
  
  const handleAnimationComplete = () => {
    console.log("Particle animation completed");
  };
  
  const resetToDefaults = () => {
    setProgress(65);
    setSize(120);
    setRingColor("#4A90E2");
    setParticleColor("#FFD700");
    setParticleCount(20);
    setShowPercentage(true);
  };

  return (
    <ParticleCircularProgressBar
      progress={progress}
      size={size}
      ringColor={ringColor}
      particleColor={particleColor}
      showPercentage={showPercentage}
      onStart={handleAnimationStart}
      onComplete={handleAnimationComplete}
      // Callbacks to update state in the demo component
      onChange={setProgress}
      onSizeChange={setSize}
      onRingColorChange={setRingColor}
      onParticleColorChange={setParticleColor}
      onParticleCountChange={setParticleCount}
      onTogglePercentage={setShowPercentage}
      onReset={resetToDefaults}
    />
  );
};

render(<ParticleCircularProgressBarDemo />);
