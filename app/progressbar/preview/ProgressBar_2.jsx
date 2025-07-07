const { motion } = require('framer-motion');
const React = require('react');

const ProgressBar2 = ({
  progress = 65,
  onStart = () => console.log("Animation started"),
  onComplete = () => console.log("Animation completed"),
}) => {
  const [currentProgress, setCurrentProgress] = React.useState(0);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onStart();
      setCurrentProgress(progress);
    }, 100);
    return () => clearTimeout(timeout);
  }, [progress, onStart]);

  React.useEffect(() => {
    if (currentProgress === progress) {
      onComplete();
    }
  }, [currentProgress, progress, onComplete]);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Animated Progress Bar</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Default</h3>
          <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
              style={{ width: `${currentProgress}%` }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.02 }}
            />
          </div>
          <div className="mt-2 text-sm text-blue-700 font-medium text-center">
            {currentProgress}%
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Different States</h3>
          <div className="space-y-4">
            <div>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                  style={{ width: '35%' }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                />
              </div>
              <div className="mt-1 text-sm text-green-700 font-medium text-center">35% - Getting Started</div>
            </div>

            <div>
              <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
                  style={{ width: '65%' }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </div>
              <div className="mt-1 text-sm text-amber-700 font-medium text-center">65% - In Progress</div>
            </div>

            <div>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-400 to-pink-500 rounded-full"
                  style={{ width: '90%' }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </div>
              <div className="mt-1 text-sm text-red-700 font-medium text-center">90% - Almost There!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <ProgressBar2 />
    </div>
  );
};

render(<App />);
