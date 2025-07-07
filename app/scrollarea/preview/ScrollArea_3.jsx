const { motion } = window.FramerMotion || {};

const ScrollArea = ({
  orientation = "both",
  scrollbarThickness = 14,
  thumbColor = "#22d3ee",
  trackColor = "#1e293b",
  children,
}) => {
  const overflowClasses =
    orientation === "vertical"
      ? "overflow-y-auto"
      : orientation === "horizontal"
      ? "overflow-x-auto"
      : "overflow-auto";

  return (
    <div
      className={`relative ${overflowClasses} rounded-xl bg-gray-900/90 backdrop-blur-xl border border-gray-800`}
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: `${thumbColor} ${trackColor}`,
      }}
    >
      <style jsx>{`
        ::-webkit-scrollbar {
          width: ${orientation === "vertical" || orientation === "both"
            ? `${scrollbarThickness}px`
            : "0"};
          height: ${orientation === "horizontal" || orientation === "both"
            ? `${scrollbarThickness}px`
            : "0"};
        }
        ::-webkit-scrollbar-track {
          background: ${trackColor};
          border-radius: 12px;
          margin: 4px;
          border: 3px solid transparent;
          background-clip: padding-box;
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
        }
        ::-webkit-scrollbar-thumb {
          background: ${thumbColor};
          border-radius: 12px;
          border: 3px solid transparent;
          background-clip: padding-box;
          box-shadow: 0 0 15px ${thumbColor}66;
          transition: all 0.3s ease;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ${thumbColor}ee;
          box-shadow: 0 0 20px ${thumbColor}aa;
        }
        ::-webkit-scrollbar-corner {
          background: transparent;
        }
      `}</style>
      {children}
    </div>
  );
};

const ScrollAreaDemo = () => {
  const [orientation, setOrientation] = useState("both");
  const [scrollbarThickness, setScrollbarThickness] = useState(14);
  const [thumbColor, setThumbColor] = useState("#22d3ee");
  const [trackColor, setTrackColor] = useState("#1e293b");

  const items = Array.from({ length: 12 }).map((_, i) => ({
    title: `Project ${i + 1}`,
    status: ["Active", "Completed", "In Progress", "On Hold"][i % 4],
    progress: Math.floor(Math.random() * 100),
  }));

  return (
    <div className="p-4 space-y-6 bg-gray-900 rounded-xl">
      <motion.div 
        className="space-y-4 p-6 bg-gray-800/50 backdrop-blur-xl rounded-xl border border-gray-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
            Cyberpunk Scroller
          </h2>
          <motion.div
            className="text-xs font-medium text-cyan-400 px-3 py-1 bg-cyan-950 rounded-full border border-cyan-800"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Neo-Tokyo Style
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Scroll Mode</label>
            <select
              className="w-full p-2 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 focus:ring-2 focus:ring-cyan-500"
              value={orientation}
              onChange={(e) => setOrientation(e.target.value)}
            >
              <option value="vertical">Vertical Scan</option>
              <option value="horizontal">Horizontal Scan</option>
              <option value="both">Omni-Directional</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">
              Scanner Width: {scrollbarThickness}px
            </label>
            <input
              type="range"
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              min="10"
              max="24"
              value={scrollbarThickness}
              onChange={(e) => setScrollbarThickness(Number(e.target.value))}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Neon Glow</label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  className="h-8 w-12 rounded cursor-pointer bg-gray-900 border border-gray-700"
                  value={thumbColor}
                  onChange={(e) => setThumbColor(e.target.value)}
                />
                <span className="text-xs text-gray-400 font-mono">{thumbColor}</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Base Layer</label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  className="h-8 w-12 rounded cursor-pointer bg-gray-900 border border-gray-700"
                  value={trackColor}
                  onChange={(e) => setTrackColor(e.target.value)}
                />
                <span className="text-xs text-gray-400 font-mono">{trackColor}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ScrollArea
          orientation={orientation}
          scrollbarThickness={scrollbarThickness}
          thumbColor={thumbColor}
          trackColor={trackColor}
        >
          <div 
            className={`min-w-[600px] grid gap-3 p-4 bg-gray-800/50 backdrop-blur-xl rounded-lg border border-gray-700 ${
              orientation === "vertical" ? "h-[300px] grid-cols-1" : "grid-cols-2"
            }`}
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="p-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.05,
                }}
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-gray-200">{item.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.status === 'Active' ? 'bg-green-900/50 text-green-400' :
                    item.status === 'Completed' ? 'bg-blue-900/50 text-blue-400' :
                    item.status === 'In Progress' ? 'bg-yellow-900/50 text-yellow-400' :
                    'bg-gray-700 text-gray-400'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <div className="mt-2">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-400 mt-1 text-right">
                    {item.progress}% complete
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </motion.div>
    </div>
  );
};

render(<ScrollAreaDemo />);
