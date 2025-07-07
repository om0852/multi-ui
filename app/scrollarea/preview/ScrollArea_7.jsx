const { motion } = window.FramerMotion || {};

const ScrollArea = ({
  orientation = "both",
  scrollbarThickness = 14,
  thumbColor = "#0ea5e9",
  trackColor = "#0c4a6e",
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
      className={`relative ${overflowClasses} rounded-2xl bg-gradient-to-br from-sky-950 to-blue-950 shadow-inner`}
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
          box-shadow: inset 0 0 10px rgba(14, 165, 233, 0.1);
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

const getConditionIcon = (condition) => {
  const icons = {
    'Sunny': '☀️',
    'Cloudy': '☁️',
    'Rainy': '🌧️',
    'Stormy': '⛈️',
  };
  return icons[condition] || '🌡️';
};

const getTemperatureColor = (temp) => {
  if (temp > 30) return 'text-red-400';
  if (temp > 20) return 'text-orange-400';
  if (temp > 10) return 'text-yellow-400';
  if (temp > 0) return 'text-blue-200';
  return 'text-blue-100';
};

const ScrollAreaDemo = () => {
  const [orientation, setOrientation] = useState("both");
  const [scrollbarThickness, setScrollbarThickness] = useState(14);
  const [thumbColor, setThumbColor] = useState("#0ea5e9");
  const [trackColor, setTrackColor] = useState("#0c4a6e");

  const weatherStations = Array.from({ length: 12 }).map((_, i) => ({
    id: `Station_${i + 1}`,
    location: ["Mountain Peak", "Coastal Bay", "Desert Plains", "Forest Valley"][i % 4],
    temperature: Math.floor(Math.random() * 40) - 10,
    humidity: Math.floor(Math.random() * 100),
    windSpeed: Math.floor(Math.random() * 50),
    precipitation: Math.floor(Math.random() * 100),
    condition: ["Sunny", "Cloudy", "Rainy", "Stormy"][Math.floor(Math.random() * 4)],
  }));

  return (
    <div className="p-4 space-y-6 bg-gradient-to-br from-sky-950 to-blue-950 rounded-xl">
      <motion.div 
        className="space-y-4 p-6 bg-sky-900/20 backdrop-blur-xl rounded-xl border border-sky-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-sky-200">
            Weather Monitoring System
          </h2>
          <motion.div
            className="text-xs font-medium text-sky-300 px-3 py-1 bg-sky-950 rounded-full border border-sky-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Live Weather Data
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-sky-200">View Mode</label>
            <select
              className="w-full p-2 bg-sky-950 border border-sky-800 rounded-lg text-sky-200 focus:ring-2 focus:ring-sky-500"
              value={orientation}
              onChange={(e) => setOrientation(e.target.value)}
            >
              <option value="vertical">Regional View</option>
              <option value="horizontal">Timeline View</option>
              <option value="both">Global View</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-sky-200">
              Data Stream Width: {scrollbarThickness}px
            </label>
            <input
              type="range"
              className="w-full h-2 bg-sky-950 rounded-lg appearance-none cursor-pointer"
              min="10"
              max="24"
              value={scrollbarThickness}
              onChange={(e) => setScrollbarThickness(Number(e.target.value))}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-sky-200">Stream Color</label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  className="h-8 w-12 rounded cursor-pointer bg-sky-950 border border-sky-800"
                  value={thumbColor}
                  onChange={(e) => setThumbColor(e.target.value)}
                />
                <span className="text-xs text-sky-300 font-mono">{thumbColor}</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-sky-200">Background Tone</label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  className="h-8 w-12 rounded cursor-pointer bg-sky-950 border border-sky-800"
                  value={trackColor}
                  onChange={(e) => setTrackColor(e.target.value)}
                />
                <span className="text-xs text-sky-300 font-mono">{trackColor}</span>
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
            className={`min-w-[600px] grid gap-3 p-4 bg-sky-900/20 backdrop-blur-sm rounded-lg ${
              orientation === "vertical" ? "h-[300px] grid-cols-1" : "grid-cols-2"
            }`}
          >
            {weatherStations.map((station, index) => (
              <motion.div
                key={index}
                className="p-4 bg-gradient-to-br from-sky-900/40 to-blue-900/40 rounded-lg border border-sky-800 hover:border-sky-600 transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.05,
                }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-sky-100">{station.location}</h3>
                    <p className="text-sm text-sky-400">{station.id}</p>
                  </div>
                  <div className="text-3xl">
                    {getConditionIcon(station.condition)}
                  </div>
                </div>
                <div className="mt-3 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-3xl font-bold ${getTemperatureColor(station.temperature)}`}>
                      {station.temperature}°C
                    </span>
                    <span className="text-sm text-sky-300">{station.condition}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-sky-300">
                    <div className="flex items-center space-x-1">
                      <span>💨</span>
                      <span>{station.windSpeed} km/h</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>💧</span>
                      <span>{station.humidity}%</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>🌧️</span>
                      <span>{station.precipitation}%</span>
                    </div>
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
