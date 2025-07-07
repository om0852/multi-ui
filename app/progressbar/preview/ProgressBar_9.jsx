const { motion } = require('framer-motion');
const React = require('react');

const ProgressBar9 = ({
  progress = 75,
  show = true,
  onClose = () => console.log("Overlay closed"),
  barColor = "bg-gradient-to-r from-pink-500 to-yellow-500",
  overlayColor = "bg-black bg-opacity-60"
}) => {
  const [isOpen, setIsOpen] = React.useState(show);
  const [currentProgress, setCurrentProgress] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(show);
  }, [show]);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  const startAnimation = () => {
    setIsOpen(true);
    setIsAnimating(true);
    setCurrentProgress(0);
    
    const interval = setInterval(() => {
      setCurrentProgress(prev => {
        if (prev >= progress) {
          clearInterval(interval);
          setTimeout(() => setIsAnimating(false), 1000);
          return progress;
        }
        return prev + 1;
      });
    }, 30);
  };

  // Add custom animation for stripes
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes stripes {
        0% { background-position: 0 0; }
        100% { background-position: 50px 0; }
      }
      .animate-stripes {
        background-image: linear-gradient(
          45deg,
          rgba(255, 255, 255, 0.15) 25%,
          transparent 25%,
          transparent 50%,
          rgba(255, 255, 255, 0.15) 50%,
          rgba(255, 255, 255, 0.15) 75%,
          transparent 75%,
          transparent
        );
        background-size: 1rem 1rem;
        animation: stripes 1s linear infinite;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">Animated Striped Progress Bar</h1>
        
        <div className="space-y-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-2xl">
            <h2 className="text-xl font-semibold mb-6 text-white">Demo Controls</h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <button
                    onClick={startAnimation}
                    className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors shadow-lg"
                  >
                    Start Animation
                  </button>
                  <div className="text-white font-medium">
                    Progress: {currentProgress}%
                  </div>
                </div>
                
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={currentProgress}
                  onChange={(e) => setCurrentProgress(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-pink-200">Preview</h3>
                <div className="w-full h-4 bg-gray-800 bg-opacity-50 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${barColor} animate-stripes`}
                    style={{
                      backgroundSize: '200% 100%',
                      backgroundPosition: 'right center',
                    }}
                    initial={{ width: '0%' }}
                    animate={{ width: `${currentProgress}%` }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-pink-200">Gradient 1</h3>
                  <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-pink-500 to-yellow-500 animate-stripes"
                      initial={{ width: 0 }}
                      animate={{ width: '65%' }}
                      transition={{ duration: 1, delay: 0.1 }}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-pink-200">Gradient 2</h3>
                  <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500 animate-stripes"
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-pink-200">Gradient 3</h3>
                  <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-cyan-400 to-emerald-500 animate-stripes"
                      initial={{ width: 0 }}
                      animate={{ width: '45%' }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-48 bg-gray-900 bg-opacity-50 rounded-xl overflow-hidden flex items-center justify-center border border-gray-800">
            <div className="text-center">
              <p className="text-pink-200 mb-4">Click below to show the striped progress overlay</p>
              <button 
                onClick={startAnimation}
                className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors shadow-lg"
              >
                Show Overlay
              </button>
            </div>

            {isOpen && (
              <div 
                className={`fixed inset-0 z-50 flex items-center justify-center ${overlayColor} transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={handleClose}
              >
                <div 
                  className="relative w-11/12 md:w-2/3 lg:w-1/2 bg-gray-800 rounded-xl shadow-2xl p-6 mx-4 border border-pink-500/20"
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none transition-colors shadow-lg"
                    onClick={handleClose}
                  >
                    ✕
                  </button>

                  <h2 className="text-xl font-semibold text-white mb-4">Processing Your Request</h2>
                  
                  <div className="space-y-4">
                    <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${barColor} animate-stripes`}
                        style={{
                          backgroundSize: '200% 100%',
                          backgroundPosition: 'right center',
                        }}
                        initial={{ width: '0%' }}
                        animate={{ width: `${currentProgress}%` }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-pink-200">
                        {currentProgress < 30 && "Starting upload..."}
                        {currentProgress >= 30 && currentProgress < 70 && `Uploading... ${currentProgress}%`}
                        {currentProgress >= 70 && currentProgress < 100 && `Finishing up... ${currentProgress}%`}
                        {currentProgress === 100 && "Upload complete!"}
                      </span>
                      <span className="text-sm font-bold text-white bg-gray-700 px-2 py-1 rounded">
                        {currentProgress}%
                      </span>
                    </div>
                    
                    {currentProgress === 100 && (
                      <div className="mt-4 p-3 bg-green-900 bg-opacity-30 text-green-200 border border-green-500 rounded-lg text-sm">
                        ✅ Your files have been uploaded successfully!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return <ProgressBar9 />;
};

render(<App />);
