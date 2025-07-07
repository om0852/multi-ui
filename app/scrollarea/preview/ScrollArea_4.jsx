const { motion } = window.FramerMotion || {};

const ScrollArea = ({
  orientation = "both",
  scrollbarThickness = 14,
  thumbColor = "#059669",
  trackColor = "#d1fae5",
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
      className={`relative ${overflowClasses} rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 shadow-inner`}
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
          box-shadow: inset 0 0 10px rgba(0, 128, 0, 0.05);
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
  const [thumbColor, setThumbColor] = useState("#059669");
  const [trackColor, setTrackColor] = useState("#d1fae5");

  const plants = Array.from({ length: 12 }).map((_, i) => ({
    name: `Plant ${i + 1}`,
    species: ["Monstera", "Ficus", "Snake Plant", "Pothos"][i % 4],
    waterLevel: Math.floor(Math.random() * 100),
    lastWatered: `${Math.floor(Math.random() * 7) + 1} days ago`,
  }));

  return (
    <div className="p-4 space-y-6 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl">
      <motion.div 
        className="space-y-4 p-6 bg-white/80 backdrop-blur-xl rounded-xl shadow border border-green-100"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-emerald-800">
            Plant Care Dashboard
          </h2>
          <motion.div
            className="text-xs font-medium text-emerald-700 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Eco-Friendly UI
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-emerald-800">View Mode</label>
            <select
              className="w-full p-2 bg-white border border-emerald-200 rounded-lg text-emerald-800 focus:ring-2 focus:ring-emerald-500"
              value={orientation}
              onChange={(e) => setOrientation(e.target.value)}
            >
              <option value="vertical">Vertical Garden</option>
              <option value="horizontal">Horizontal Garden</option>
              <option value="both">Garden Overview</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-emerald-800">
              Scroll Bar Size: {scrollbarThickness}px
            </label>
            <input
              type="range"
              className="w-full h-2 bg-emerald-100 rounded-lg appearance-none cursor-pointer"
              min="10"
              max="24"
              value={scrollbarThickness}
              onChange={(e) => setScrollbarThickness(Number(e.target.value))}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-emerald-800">Leaf Color</label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  className="h-8 w-12 rounded cursor-pointer bg-white border border-emerald-200"
                  value={thumbColor}
                  onChange={(e) => setThumbColor(e.target.value)}
                />
                <span className="text-xs text-emerald-700 font-mono">{thumbColor}</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-emerald-800">Background Shade</label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  className="h-8 w-12 rounded cursor-pointer bg-white border border-emerald-200"
                  value={trackColor}
                  onChange={(e) => setTrackColor(e.target.value)}
                />
                <span className="text-xs text-emerald-700 font-mono">{trackColor}</span>
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
            className={`min-w-[600px] grid gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-lg ${
              orientation === "vertical" ? "h-[300px] grid-cols-1" : "grid-cols-2"
            }`}
          >
            {plants.map((plant, index) => (
              <motion.div
                key={index}
                className="p-4 bg-gradient-to-br from-white to-green-50 rounded-lg shadow-sm hover:shadow transition-all border border-green-100"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.05,
                }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-emerald-900">{plant.name}</h3>
                    <p className="text-sm text-emerald-700">{plant.species}</p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                    {plant.lastWatered}
                  </span>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-xs text-emerald-700 mb-1">
                    <span>Water Level</span>
                    <span>{plant.waterLevel}%</span>
                  </div>
                  <div className="w-full bg-emerald-100 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"
                      style={{ width: `${plant.waterLevel}%` }}
                    />
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
