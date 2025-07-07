const { motion } = require('framer-motion');
const React = require('react');

const ProgressBar18 = ({
  progress = 75,
  height = "h-4",
  color = "bg-cyan-400",
  backgroundColor = "bg-gray-900",
  rounded = true,
  animationDuration = 1.5,
  showCounter = true,
  neonIntensity = "medium",
  isPulsing = true
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

  // Calculate neon glow effect based on intensity
  const getNeonStyle = () => {
    const baseColor = color.replace('bg-', '');
    const colorMap = {
      'cyan-400': '#22d3ee',
      'pink-400': '#f472b6',
      'purple-500': '#a855f7',
      'blue-400': '#60a5fa',
      'green-400': '#4ade80',
      'red-500': '#ef4444',
      'yellow-400': '#facc15',
      'orange-500': '#f97316'
    };
    
    const hexColor = colorMap[baseColor] || '#22d3ee';
    
    switch(neonIntensity) {
      case 'low':
        return `0 0 5px #fff, 0 0 10px ${hexColor}80`;
      case 'high':
        return `0 0 5px #fff, 0 0 10px #fff, 0 0 20px ${hexColor}, 0 0 40px ${hexColor}80, 0 0 60px ${hexColor}40`;
      case 'pulse':
        return {
          boxShadow: [
            `0 0 5px #fff, 0 0 10px ${hexColor}80`,
            `0 0 5px #fff, 0 0 10px #fff, 0 0 20px ${hexColor}, 0 0 40px ${hexColor}80, 0 0 60px ${hexColor}40`,
            `0 0 5px #fff, 0 0 10px ${hexColor}80`
          ]
        };
      default: // medium
        return `0 0 5px #fff, 0 0 10px ${hexColor}, 0 0 20px ${hexColor}80`;
    }
  };

  // Get animation variants for the neon pulse effect
  const getPulseVariants = () => {
    if (!isPulsing) return {};
    
    return {
      animate: {
        opacity: [0.9, 1, 0.9],
        filter: ['brightness(1.1) drop-shadow(0 0 5px currentColor)', 'brightness(1.2) drop-shadow(0 0 15px currentColor)', 'brightness(1.1) drop-shadow(0 0 5px currentColor)']
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    };
  };

  // Neon color options
  const neonColors = [
    { name: 'Cyan', color: 'bg-cyan-400' },
    { name: 'Pink', color: 'bg-pink-400' },
    { name: 'Purple', color: 'bg-purple-500' },
    { name: 'Blue', color: 'bg-blue-400' },
    { name: 'Green', color: 'bg-green-400' },
    { name: 'Red', color: 'bg-red-500' },
    { name: 'Yellow', color: 'bg-yellow-400' },
    { name: 'Orange', color: 'bg-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Neon Progress Bar
        </h1>
        <p className="text-center text-gray-400 mb-8">
          A glowing progress bar with neon effects and customizable colors
        </p>
        
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
                      <span className="ml-2 text-xs px-2 py-0.5 bg-cyan-900 text-cyan-200 rounded-full">
                        {isPulsing ? 'Pulsing' : 'Glowing'}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={startAnimation}
                      className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-all shadow-lg hover:shadow-cyan-500/30"
                    >
                      {isAnimating ? 'Restart' : 'Animate'}
                    </button>
                    
                    <select 
                      className="bg-gray-700 text-gray-200 border border-gray-600 rounded-md px-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      value={neonIntensity}
                      onChange={(e) => {}}
                    >
                      <option value="low">Low Intensity</option>
                      <option value="medium">Medium Intensity</option>
                      <option value="high">High Intensity</option>
                      <option value="pulse">Pulse Effect</option>
                    </select>
                    
                    <div className="flex items-center space-x-2 px-3 border border-gray-600 rounded-md">
                      <input 
                        type="checkbox" 
                        id="togglePulse" 
                        checked={isPulsing} 
                        onChange={() => {}}
                        className="h-4 w-4 text-cyan-500 rounded border-gray-600 bg-gray-700 focus:ring-cyan-500"
                      />
                      <label htmlFor="togglePulse" className="text-sm text-gray-300">
                        Pulse
                      </label>
                    </div>
                  </div>
                </div>
                
                <div 
                  className={`w-full ${height} ${backgroundColor} ${rounded ? 'rounded-full' : ''} overflow-hidden relative`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <motion.div
                    className={`h-full ${color} ${rounded ? 'rounded-full' : ''} relative transition-all duration-300 ${isHovered ? 'brightness-110' : ''}`}
                    initial={{ width: 0 }}
                    animate={{ 
                      width: `${counter}%`,
                      ...(neonIntensity === 'pulse' ? getNeonStyle() : {}),
                      ...(isPulsing ? getPulseVariants().animate : {})
                    }}
                    transition={{
                      width: { duration: animationDuration, ease: "easeInOut" },
                      ...(isPulsing ? getPulseVariants().transition : {})
                    }}
                    style={neonIntensity !== 'pulse' ? { 
                      boxShadow: getNeonStyle(),
                      filter: 'brightness(1.1)'
                    } : {}}
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
              
              <div className="pt-2">
                <h3 className="text-sm font-medium text-gray-300 mb-3">Neon Colors</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {neonColors.map((neonColor) => (
                    <button
                      key={neonColor.color}
                      onClick={() => {}}
                      className={`h-10 rounded-md overflow-hidden relative group ${color === neonColor.color ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-800' : ''}`}
                      title={neonColor.name}
                    >
                      <div 
                        className={`w-full h-full ${neonColor.color} transition-all duration-200 group-hover:brightness-110`}
                      />
                      <div className={`absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 ${color === neonColor.color ? 'bg-opacity-30' : ''}`} />
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div>
                  <h3 className="text-sm font-medium text-gray-300 mb-1">Height</h3>
                  <select 
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
                  <h3 className="text-sm font-medium text-gray-300 mb-1">Animation Speed</h3>
                  <select 
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
                  <div className="flex items-center space-x-2 w-full">
                    <input 
                      type="checkbox" 
                      id="showCounter" 
                      checked={showCounter} 
                      onChange={() => {}}
                      className="h-4 w-4 text-cyan-500 rounded border-gray-600 bg-gray-700 focus:ring-cyan-500"
                    />
                    <label htmlFor="showCounter" className="text-sm font-medium text-gray-300">
                      Show Counter
                    </label>
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
                    <span className="font-medium text-cyan-400">65%</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-900 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-cyan-400 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ 
                        width: '65%',
                        boxShadow: '0 0 5px #fff, 0 0 10px #22d3ee, 0 0 20px #22d3ee80',
                        filter: 'brightness(1.1)'
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
                    <span className="font-medium text-pink-400">85%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-900 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-pink-400 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ 
                        width: '85%',
                        boxShadow: '0 0 5px #fff, 0 0 10px #f472b6, 0 0 20px #f472b680',
                        filter: 'brightness(1.1)'
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
                  <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-purple-500 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ 
                        width: '45%',
                        boxShadow: '0 0 5px #fff, 0 0 10px #a855f7, 0 0 20px #a855f780',
                        filter: 'brightness(1.1)'
                      }}
                      transition={{ duration: 1.5 }}
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-300 mb-2">High Intensity Neon</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Rendering complete</span>
                    <span className="font-medium text-blue-400">100%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-blue-400 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ 
                        width: '100%',
                        boxShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #60a5fa, 0 0 40px #60a5fa80, 0 0 60px #60a5fa40',
                        filter: 'brightness(1.2)'
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
  return <ProgressBar18 />;
};

render(<App />);
