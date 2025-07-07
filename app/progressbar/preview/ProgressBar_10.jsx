const { motion } = require('framer-motion');
const React = require('react');

const ProgressBar10 = ({
  progress = 75,
  height = "h-4",
  color = "bg-gradient-to-r from-pink-500 to-yellow-500",
  backgroundColor = "bg-gray-200",
  rounded = true,
  animationDuration = 0.5,
  onStart = () => console.log("Animation started"),
  onComplete = () => console.log("Animation completed"),
  showCounter = true,
}) => {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    let timer;
    if (showCounter && progress > 0) {
      const increment = progress / (animationDuration * 60);
      timer = setInterval(() => {
        setCounter((prev) => {
          if (prev + increment >= progress) {
            clearInterval(timer);
            return progress;
          }
          return prev + increment;
        });
      }, 1000 / 60);
    } else {
      setCounter(progress);
    }
    return () => clearInterval(timer);
  }, [progress, animationDuration, showCounter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Gradient Progress Bar</h1>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-6 text-gray-700">Interactive Demo</h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-gray-700">Progress: {Math.round(counter)}%</label>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">Show Counter</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={showCounter} 
                        onChange={() => {}}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                    </label>
                  </div>
                </div>
                <ProgressBar10 
                  progress={progress}
                  height="h-3"
                  color={color}
                  backgroundColor="bg-gray-100"
                  rounded={true}
                  animationDuration={1}
                  showCounter={showCounter}
                />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={(e) => {}}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">Gradient 1</h3>
                  <ProgressBar10 
                    progress={65} 
                    color="bg-gradient-to-r from-pink-500 to-yellow-500"
                    height="h-3"
                    animationDuration={1.5}
                  />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">Gradient 2</h3>
                  <ProgressBar10 
                    progress={85} 
                    color="bg-gradient-to-r from-purple-500 to-blue-500"
                    height="h-3"
                    animationDuration={1.5}
                  />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">Gradient 3</h3>
                  <ProgressBar10 
                    progress={45} 
                    color="bg-gradient-to-r from-cyan-400 to-emerald-500"
                    height="h-3"
                    animationDuration={1.5}
                  />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">Gradient 4</h3>
                  <ProgressBar10 
                    progress={75} 
                    color="bg-gradient-to-r from-amber-400 to-orange-500"
                    height="h-3"
                    animationDuration={1.5}
                  />
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Customization</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Height</label>
                    <select 
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={height}
                      onChange={(e) => {}}
                    >
                      <option value="h-1">Thin (h-1)</option>
                      <option value="h-2">Small (h-2)</option>
                      <option value="h-3">Medium (h-3)</option>
                      <option value="h-4">Large (h-4)</option>
                      <option value="h-5">X-Large (h-5)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Animation Speed</label>
                    <select 
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={animationDuration}
                      onChange={(e) => {}}
                    >
                      <option value={0.5}>Fast (0.5s)</option>
                      <option value={1}>Normal (1s)</option>
                      <option value={1.5}>Slow (1.5s)</option>
                      <option value={2}>Very Slow (2s)</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id="rounded" 
                      checked={rounded} 
                      onChange={() => {}}
                      className="h-4 w-4 text-blue-500 rounded border-gray-300"
                    />
                    <label htmlFor="rounded" className="text-sm font-medium text-gray-700">
                      Rounded Corners
                    </label>
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
  return <ProgressBar10 />;
};

render(<App />);
