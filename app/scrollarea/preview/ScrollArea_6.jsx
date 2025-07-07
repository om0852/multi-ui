const { motion } = window.FramerMotion || {};

const ScrollArea = ({
  orientation = "both",
  scrollbarThickness = 14,
  thumbColor = "#06b6d4",
  trackColor = "#164e63",
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
      className={`relative ${overflowClasses} rounded-2xl bg-gradient-to-br from-zinc-950 to-cyan-950 shadow-inner`}
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
          box-shadow: inset 0 0 10px rgba(6, 182, 212, 0.1);
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
  const [thumbColor, setThumbColor] = useState("#06b6d4");
  const [trackColor, setTrackColor] = useState("#164e63");

  const circuits = Array.from({ length: 12 }).map((_, i) => ({
    id: `CPU_${i + 1}`,
    type: ["Processing Unit", "Memory Controller", "I/O Interface", "Data Bus"][i % 4],
    clockSpeed: Math.floor(Math.random() * 5000) + 1000,
    powerDraw: Math.floor(Math.random() * 100),
    temperature: Math.floor(Math.random() * 40) + 40,
    status: ["Active", "Standby", "Optimizing"][Math.floor(Math.random() * 3)],
  }));

  const getStatusColor = (status) => {
    return {
      'Active': 'bg-green-900/30 text-green-400 border-green-800',
      'Standby': 'bg-yellow-900/30 text-yellow-400 border-yellow-800',
      'Optimizing': 'bg-blue-900/30 text-blue-400 border-blue-800',
    }[status] || 'bg-gray-900/30 text-gray-400 border-gray-800';
  };

  return (
    <div className="p-4 space-y-6 bg-gradient-to-br from-zinc-950 to-cyan-950 rounded-xl">
      <motion.div 
        className="space-y-4 p-6 bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-cyan-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-cyan-200">
            Circuit Control Matrix
          </h2>
          <motion.div
            className="text-xs font-medium text-cyan-300 px-3 py-1 bg-cyan-950 rounded-full border border-cyan-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            System Monitor v2.0
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-cyan-200">Scan Pattern</label>
            <select
              className="w-full p-2 bg-zinc-800 border border-cyan-800 rounded-lg text-cyan-200 focus:ring-2 focus:ring-cyan-500"
              value={orientation}
              onChange={(e) => setOrientation(e.target.value)}
            >
              <option value="vertical">Vertical Scan</option>
              <option value="horizontal">Horizontal Scan</option>
              <option value="both">Matrix Scan</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-cyan-200">
              Data Bus Width: {scrollbarThickness}px
            </label>
            <input
              type="range"
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
              min="10"
              max="24"
              value={scrollbarThickness}
              onChange={(e) => setScrollbarThickness(Number(e.target.value))}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-cyan-200">Signal Color</label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  className="h-8 w-12 rounded cursor-pointer bg-zinc-800 border border-cyan-800"
                  value={thumbColor}
                  onChange={(e) => setThumbColor(e.target.value)}
                />
                <span className="text-xs text-cyan-300 font-mono">{thumbColor}</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-cyan-200">Circuit Base</label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  className="h-8 w-12 rounded cursor-pointer bg-zinc-800 border border-cyan-800"
                  value={trackColor}
                  onChange={(e) => setTrackColor(e.target.value)}
                />
                <span className="text-xs text-cyan-300 font-mono">{trackColor}</span>
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
            className={`min-w-[600px] grid gap-3 p-4 bg-zinc-900/60 backdrop-blur-sm rounded-lg ${
              orientation === "vertical" ? "h-[300px] grid-cols-1" : "grid-cols-2"
            }`}
          >
            {circuits.map((circuit, index) => (
              <motion.div
                key={index}
                className="p-4 bg-gradient-to-br from-zinc-900 to-cyan-950 rounded-lg border border-cyan-900 hover:border-cyan-700 transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.05,
                }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-cyan-100">{circuit.id}</h3>
                    <p className="text-sm text-cyan-400">{circuit.type}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full border ${getStatusColor(circuit.status)}`}>
                    {circuit.status}
                  </span>
                </div>
                <div className="mt-3 space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-cyan-500">Clock Speed</p>
                      <p className="text-sm text-cyan-200">{circuit.clockSpeed} MHz</p>
                    </div>
                    <div>
                      <p className="text-xs text-cyan-500">Power Draw</p>
                      <p className="text-sm text-cyan-200">{circuit.powerDraw}W</p>
                    </div>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-1.5">
                    <div 
                      className="h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500"
                      style={{ width: `${circuit.powerDraw}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-cyan-400">
                    <span>Temperature: {circuit.temperature}°C</span>
                    <span>{circuit.powerDraw}% Load</span>
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
