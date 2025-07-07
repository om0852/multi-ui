const { motion } = window.FramerMotion || {};

const ScrollArea = ({
  orientation = "both",
  scrollbarThickness = 14,
  thumbColor = "#6366f1",
  trackColor = "#1e1b4b",
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
      className={`relative ${overflowClasses} rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 shadow-inner`}
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
          box-shadow: inset 0 0 10px rgba(99, 102, 241, 0.1);
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, ${thumbColor}, ${thumbColor}dd);
          border-radius: 12px;
          border: 3px solid transparent;
          background-clip: padding-box;
          transition: all 0.3s ease;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, ${thumbColor}dd, ${thumbColor});
          box-shadow: 0 0 15px ${thumbColor}33;
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
  const [thumbColor, setThumbColor] = useState("#6366f1");
  const [trackColor, setTrackColor] = useState("#1e1b4b");

  const planets = Array.from({ length: 12 }).map((_, i) => ({
    name: `Planet ${String.fromCharCode(65 + i)}`,
    type: ["Gas Giant", "Rocky Planet", "Ice World", "Super Earth"][i % 4],
    distance: Math.floor(Math.random() * 1000),
    habitability: Math.floor(Math.random() * 100),
    satellites: Math.floor(Math.random() * 15),
  }));

  return (
    <div className="p-4 space-y-6 bg-gradient-to-br from-slate-950 to-indigo-950 rounded-xl">
      <motion.div 
        className="space-y-4 p-6 bg-slate-900/80 backdrop-blur-xl rounded-xl border border-indigo-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-indigo-200">
            Space Explorer Console
          </h2>
          <motion.div
            className="text-xs font-medium text-indigo-300 px-3 py-1 bg-indigo-950 rounded-full border border-indigo-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Deep Space Navigation
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-indigo-200">Navigation Mode</label>
            <select
              className="w-full p-2 bg-slate-800 border border-indigo-800 rounded-lg text-indigo-200 focus:ring-2 focus:ring-indigo-500"
              value={orientation}
              onChange={(e) => setOrientation(e.target.value)}
            >
              <option value="vertical">Vertical Scan</option>
              <option value="horizontal">Horizontal Scan</option>
              <option value="both">Full Space Scan</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-indigo-200">
              Scanner Width: {scrollbarThickness}px
            </label>
            <input
              type="range"
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer"
              min="10"
              max="24"
              value={scrollbarThickness}
              onChange={(e) => setScrollbarThickness(Number(e.target.value))}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-indigo-200">Scanner Color</label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  className="h-8 w-12 rounded cursor-pointer bg-slate-800 border border-indigo-800"
                  value={thumbColor}
                  onChange={(e) => setThumbColor(e.target.value)}
                />
                <span className="text-xs text-indigo-300 font-mono">{thumbColor}</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-indigo-200">Space Background</label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  className="h-8 w-12 rounded cursor-pointer bg-slate-800 border border-indigo-800"
                  value={trackColor}
                  onChange={(e) => setTrackColor(e.target.value)}
                />
                <span className="text-xs text-indigo-300 font-mono">{trackColor}</span>
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
            className={`min-w-[600px] grid gap-3 p-4 bg-slate-900/60 backdrop-blur-sm rounded-lg ${
              orientation === "vertical" ? "h-[300px] grid-cols-1" : "grid-cols-2"
            }`}
          >
            {planets.map((planet, index) => (
              <motion.div
                key={index}
                className="p-4 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-lg border border-indigo-900 hover:border-indigo-700 transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.05,
                }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-indigo-100">{planet.name}</h3>
                    <p className="text-sm text-indigo-400">{planet.type}</p>
                  </div>
                  <div className="text-xs px-2 py-1 bg-indigo-900/50 text-indigo-300 rounded">
                    {planet.distance} light years
                  </div>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="flex justify-between text-xs text-indigo-300">
                    <span>Habitability</span>
                    <span>{planet.habitability}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div 
                      className="h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                      style={{ width: `${planet.habitability}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-indigo-400">
                    <span>Satellites</span>
                    <span>{planet.satellites}</span>
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
