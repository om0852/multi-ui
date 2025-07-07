const { motion } = require('framer-motion');
const React = require('react');

const ProgressBar7 = ({
  progress = 65,
  show = true,
  onClose = () => console.log("Overlay closed"),
  barColor = "bg-gradient-to-r from-purple-500 to-indigo-500",
  overlayColor = "bg-black bg-opacity-70",
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

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Animated Progress Overlay</h1>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Demo Controls</h2>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={startAnimation}
                  className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                >
                  Start Progress
                </button>
                <button
                  onClick={() => setCurrentProgress(0)}
                  className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                >
                  Reset
                </button>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Progress: {currentProgress}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={currentProgress}
                    onChange={(e) => setCurrentProgress(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
              
              <div className="pt-2">
                <div className="text-sm font-medium text-gray-700 mb-2">Preview</div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    className={`h-full ${barColor} rounded-full`}
                    initial={{ width: "0%", scaleX: 0 }}
                    animate={{ 
                      width: `${currentProgress}%`,
                      scaleX: 1
                    }}
                    transition={{ 
                      duration: 0.8, 
                      ease: "easeOut" 
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-48 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-600 mb-4">Click below to show the progress overlay</p>
              <button 
                onClick={startAnimation}
                className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
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
                  className="relative w-11/12 md:w-2/3 lg:w-1/2 bg-white rounded-xl shadow-2xl p-6 mx-4"
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none transition-colors"
                    onClick={handleClose}
                  >
                    ✕
                  </button>

                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Processing Your Request</h2>
                  
                  <div className="space-y-4">
                    <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${barColor} rounded-full`}
                        initial={{ width: "0%", scaleX: 0 }}
                        animate={{ 
                          width: `${currentProgress}%`,
                          scaleX: 1
                        }}
                        transition={{ 
                          duration: 0.8, 
                          ease: "easeOut" 
                        }}
                      />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">
                        {currentProgress < 30 && "Starting..."}
                        {currentProgress >= 30 && currentProgress < 70 && "In progress..."}
                        {currentProgress >= 70 && currentProgress < 100 && "Almost done..."}
                        {currentProgress === 100 && "Completed!"}
                      </span>
                      <span className="text-sm font-bold text-gray-800">
                        {currentProgress}%
                      </span>
                    </div>
                    
                    {currentProgress === 100 && (
                      <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg text-sm">
                        ✅ Process completed successfully!
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
  return <ProgressBar7 />;
};

render(<App />);
