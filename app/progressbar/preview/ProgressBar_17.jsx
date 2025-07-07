const { motion } = require('framer-motion');
const React = require('react');

const ProgressBar17 = ({
  progress = 75,
  height = "h-4",
  gradient = "from-purple-500 via-pink-500 to-red-500",
  backgroundColor = "bg-gray-100",
  rounded = true,
  animationDuration = 1.5,
  showCounter = true,
  glowIntensity = "medium"
}) => {
  const [counter, setCounter] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);

  // Counter animation
  React.useEffect(() => {
    let timer;
    if (showCounter) {
      const increment = progress / (animationDuration * 30); // 30 FPS
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if (current >= progress) {
          current = progress;
          clearInterval(timer);
          setIsAnimating(false);
        } else {
          setIsAnimating(true);
        }
        setCounter(current);
      };
      
      updateCounter();
      timer = setInterval(updateCounter, 1000 / 30);
    } else {
      setCounter(progress);
    }
    return () => clearInterval(timer);
  }, [progress, animationDuration, showCounter]);

  const startAnimation = () => {
    setCounter(0);
    setIsAnimating(true);
    
    const increment = progress / (animationDuration * 30);
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= progress) {
        current = progress;
        clearInterval(timer);
        setIsAnimating(false);
      }
      setCounter(current);
    }, 1000 / 30);
    
    return () => clearInterval(timer);
  };

  // Calculate glow effect based on intensity
  const getGlowStyle = () => {
    switch(glowIntensity) {
      case 'low':
        return `0 0 10px rgba(192, 132, 252, 0.6), 0 0 20px rgba(192, 132, 252, 0.4)`;
      case 'high':
        return `0 0 20px rgba(192, 132, 252, 0.8), 0 0 40px rgba(192, 132, 252, 0.6), 0 0 60px rgba(192, 132, 252, 0.4)`;
      case 'neon':
        return `0 0 10px rgba(192, 132, 252, 0.8), 0 0 20px rgba(192, 132, 252, 0.6), 0 0 30px rgba(192, 132, 252, 0.4), 0 0 40px rgba(236, 72, 153, 0.3)`;
      default: // medium
        return `0 0 15px rgba(192, 132, 252, 0.7), 0 0 30px rgba(192, 132, 252, 0.5)`;
    }
  };

  // Get gradient colors for visualization
  const getGradientColors = (gradientName) => {
    const gradients = {
      'purple-pink': 'from-purple-500 via-pink-500 to-red-500',
      'blue-cyan': 'from-blue-500 via-cyan-400 to-emerald-400',
      'sunset': 'from-amber-500 via-pink-500 to-purple-600',
      'ocean': 'from-blue-400 via-cyan-400 to-emerald-400',
      'fire': 'from-amber-500 via-orange-500 to-red-500',
      'forest': 'from-green-400 via-emerald-500 to-teal-500',
      'cotton-candy': 'from-pink-300 via-purple-300 to-indigo-400',
      'sunrise': 'from-rose-400 via-amber-400 to-yellow-300'
    };
    return gradients[gradientName] || gradient;
  };

  // Get gradient colors for the glow effect
  const getGlowGradient = (gradientName) => {
    const gradients = {
      'purple-pink': 'rgba(168, 85, 247, 0.7), rgba(236, 72, 153, 0.7)',
      'blue-cyan': 'rgba(59, 130, 246, 0.7), rgba(34, 211, 238, 0.7)',
      'sunset': 'rgba(245, 158, 11, 0.7), rgba(236, 72, 153, 0.7)',
      'ocean': 'rgba(96, 165, 250, 0.7), rgba(34, 211, 238, 0.7)',
      'fire': 'rgba(245, 158, 11, 0.7), rgba(239, 68, 68, 0.7)',
      'forest': 'rgba(74, 222, 128, 0.7), rgba(20, 184, 166, 0.7)',
      'cotton-candy': 'rgba(249, 168, 212, 0.7), rgba(167, 139, 250, 0.7)',
      'sunrise': 'rgba(251, 113, 133, 0.7), rgba(253, 230, 138, 0.7)'
    };
    return gradients[gradientName] || 'rgba(168, 85, 247, 0.7), rgba(236, 72, 153, 0.7)';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Glowing Gradient Progress Bar
        </h1>
        
        <div className="space-y-8">
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold mb-6 text-gray-200">Interactive Demo</h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm font-medium text-gray-300">
                      Progress: {Math.round(counter)}%
                    </span>
                    {isAnimating && (
                      <span className="ml-2 text-xs px-2 py-0.5 bg-pink-900 text-pink-200 rounded-full">
                        Glowing
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={startAnimation}
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-md hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-pink-500/30"
                    >
                      Animate
                    </button>
                    
                    <select 
                      className="bg-gray-700 text-gray-200 border border-gray-600 rounded-md px-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                      value={glowIntensity}
                      onChange={(e) => {}}
                    >
                      <option value="low">Low Glow</option>
                      <option value="medium">Medium Glow</option>
                      <option value="high">High Glow</option>
                      <option value="neon">Neon Glow</option>
                    </select>
                  </div>
                </div>
                
                <div 
                  className={`w-full ${height} ${backgroundColor} ${rounded ? 'rounded-full' : ''} overflow-hidden relative`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <motion.div
                    className={`h-full bg-gradient-to-r ${gradient} ${rounded ? 'rounded-full' : ''} relative transition-all duration-300 ${isHovered ? 'brightness-110' : ''}`}
                    initial={{ width: 0 }}
                    animate={{ 
                      width: `${counter}%`,
                      boxShadow: getGlowStyle()
                    }}
                    transition={{
                      width: { duration: animationDuration, ease: "easeInOut" },
                      boxShadow: { duration: 0.5 }
                    }}
                  />
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-xs text-gray-400">0%</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={counter}
                    onChange={(e) => setCounter(parseInt(e.target.value))}
                    className="flex-1 h-1.5 bg-gray-700 rounded-full appearance-none cursor-pointer"
                  />
                  <span className="text-xs text-gray-400">100%</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                {['purple-pink', 'blue-cyan', 'sunset', 'ocean', 'fire', 'forest', 'cotton-candy', 'sunrise'].map((grad) => {
                  const isActive = gradient === getGradientColors(grad);
                  return (
                    <button
                      key={grad}
                      onClick={() => {}}
                      className={`h-10 rounded-md overflow-hidden relative group ${isActive ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-800' : ''}`}
                      title={grad.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    >
                      <div 
                        className={`w-full h-full bg-gradient-to-r ${getGradientColors(grad)}`}
                      />
                      <div className={`absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 ${isActive ? 'bg-opacity-30' : ''}`} />
                    </button>
                  );
                })}
              </div>
              
              <div className="pt-4">
                <h3 className="text-sm font-medium text-gray-300 mb-3">Customization</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Height</label>
                    <select 
                      className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                      value={height}
                      onChange={(e) => {}}
                    >
                      <option value="h-2">Thin (h-2)</option>
                      <option value="h-3">Small (h-3)</option>
                      <option value="h-4">Medium (h-4)</option>
                      <option value="h-5">Large (h-5)</option>
                      <option value="h-6">X-Large (h-6)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Animation Speed</label>
                    <select 
                      className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                      value={animationDuration}
                      onChange={(e) => {}}
                    >
                      <option value={0.5}>Fast (0.5s)</option>
                      <option value={1}>Normal (1s)</option>
                      <option value={1.5}>Slow (1.5s)</option>
                      <option value={2}>Very Slow (2s)</option>
                    </select>
                  </div>
                  
                  <div className="flex items-end">
                    <div className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        id="showCounter" 
                        checked={showCounter} 
                        onChange={() => {}}
                        className="h-4 w-4 text-pink-500 rounded border-gray-600 bg-gray-700 focus:ring-pink-500"
                      />
                      <label htmlFor="showCounter" className="text-sm font-medium text-gray-300">
                        Show Counter
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-gray-200">Usage Examples</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-300 mb-2">File Upload</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">uploading-image.jpg</span>
                    <span className="font-medium text-blue-400">65%</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ 
                        width: '65%',
                        boxShadow: '0 0 15px rgba(59, 130, 246, 0.7), 0 0 30px rgba(34, 211, 238, 0.5)'
                      }}
                      transition={{ duration: 1.5 }}
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-300 mb-2">System Update</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Installing updates...</span>
                    <span className="font-medium text-green-400">85%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ 
                        width: '85%',
                        boxShadow: '0 0 15px rgba(74, 222, 128, 0.7), 0 0 30px rgba(20, 184, 166, 0.5)'
                      }}
                      transition={{ duration: 1.5 }}
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-300 mb-2">Processing Data</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Analyzing data...</span>
                    <span className="font-medium text-purple-400">45%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ 
                        width: '45%',
                        boxShadow: '0 0 15px rgba(168, 85, 247, 0.7), 0 0 30px rgba(236, 72, 153, 0.5)'
                      }}
                      transition={{ duration: 1.5 }}
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-300 mb-2">Neon Effect</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Neon loading...</span>
                    <span className="font-medium text-cyan-400">75%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ 
                        width: '75%',
                        boxShadow: '0 0 10px rgba(34, 211, 238, 0.8), 0 0 20px rgba(34, 211, 238, 0.6), 0 0 30px rgba(34, 211, 238, 0.4)'
                      }}
                      transition={{ duration: 1.5 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return <ProgressBar17 />;
};

render(<App />);
