const { motion } = require('framer-motion');
const React = require('react');

const ProgressBar15 = ({
  progress = 75,
  height = "h-4",
  color = "bg-gradient-to-r from-blue-500 to-cyan-400",
  backgroundColor = "bg-gray-100",
  rounded = true,
  animationDuration = 1,
  showCounter = true,
  bounciness = 0.7
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

  // Calculate spring animation based on bounciness
  const getSpringConfig = () => {
    const stiffness = 100 + (bounciness * 200); // 100-300
    const damping = 10 + ((1 - bounciness) * 20); // 10-30
    
    return {
      type: "spring",
      stiffness: stiffness,
      damping: damping,
      duration: animationDuration,
      bounce: bounciness
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Bouncing Progress Bar
        </h1>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-6 text-gray-700">Interactive Demo</h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm font-medium text-gray-700">
                      Progress: {Math.round(counter)}%
                    </span>
                    {isAnimating && (
                      <span className="ml-2 text-xs px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full">
                        Bouncing...
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={startAnimation}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm"
                    >
                      Bounce It!
                    </button>
                    
                    <div className="flex items-center space-x-2 px-3 border rounded-md">
                      <span className="text-xs text-gray-600">Bounciness</span>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={bounciness}
                        onChange={(e) => {}}
                        className="w-20 h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
                      />
                      <span className="text-xs w-8 text-right">{bounciness.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
                
                <div 
                  className={`w-full ${height} ${backgroundColor} ${rounded ? 'rounded-full' : ''} overflow-hidden transition-all duration-300 ${isHovered ? 'shadow-inner' : ''}`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <motion.div
                    className={`h-full ${color} ${rounded ? 'rounded-full' : ''} origin-left`}
                    initial={{ scaleX: 0 }}
                    animate={{ 
                      scaleX: counter / 100,
                      transformOrigin: 'left center'
                    }}
                    transition={getSpringConfig()}
                  />
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-xs text-gray-500">0%</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={counter}
                    onChange={(e) => setCounter(parseInt(e.target.value))}
                    className="flex-1 h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
                  />
                  <span className="text-xs text-gray-500">100%</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">Subtle Bounce</h3>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-blue-500 rounded-full origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ 
                        scaleX: 0.65,
                        transformOrigin: 'left center'
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 15,
                        duration: 1.5
                      }}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">Energetic Bounce</h3>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ 
                        scaleX: 0.85,
                        transformOrigin: 'left center'
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 8,
                        duration: 1.5
                      }}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">Overdamped</h3>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ 
                        scaleX: 0.75,
                        transformOrigin: 'left center'
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 30,
                        duration: 1.5
                      }}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">Bouncy Ball</h3>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ 
                        scaleX: 0.55,
                        transformOrigin: 'left center'
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 5,
                        bounce: 0.8,
                        duration: 2
                      }}
                    />
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Customization</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Height</label>
                    <select 
                      className="w-full p-2 border border-gray-300 rounded-md text-sm"
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Animation Speed</label>
                    <select 
                      className="w-full p-2 border border-gray-300 rounded-md text-sm"
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
                        className="h-4 w-4 text-blue-500 rounded border-gray-300"
                      />
                      <label htmlFor="showCounter" className="text-sm font-medium text-gray-700">
                        Show Counter
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Usage Examples</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">File Upload</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>uploading-image.jpg</span>
                    <span className="font-medium">65%</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-blue-500 rounded-full origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ 
                        scaleX: 0.65,
                        transformOrigin: 'left center'
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        duration: 1.5
                      }}
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">System Update</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Installing updates...</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ 
                        scaleX: 0.85,
                        transformOrigin: 'left center'
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                        duration: 1.5
                      }}
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Processing Data</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Analyzing data...</span>
                    <span className="font-medium">45%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-green-400 to-cyan-500 rounded-full origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ 
                        scaleX: 0.45,
                        transformOrigin: 'left center'
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 12,
                        duration: 1.5
                      }}
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
  return <ProgressBar15 />;
};

render(<App />);
