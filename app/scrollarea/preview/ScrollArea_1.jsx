const ScrollArea = ({
  orientation = "vertical",
  scrollbarThickness = 10,
  thumbColor = "#4f46e5",
  trackColor = "#f1f5f9",
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
      className={`relative ${overflowClasses} rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg`}
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: `${thumbColor} ${trackColor}`,
        width: "300px",
        height: "200px",
        padding: "1rem"
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
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom right, ${thumbColor}, ${thumbColor}dd);
          border-radius: 12px;
          border: 3px solid transparent;
          background-clip: padding-box;
          transition: all 0.3s ease;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom right, ${thumbColor}dd, ${thumbColor});
          box-shadow: 0 0 10px ${thumbColor}66;
        }
        ::-webkit-scrollbar-corner {
          background: transparent;
        }
      `}</style>
      {Array(10).fill(0).map((_, i) => (
        <div key={i} className="mb-4 p-2 bg-white/10 rounded-lg">
          Scrollable content item {i + 1}
        </div>
      ))}
    </div>
  );
};

render(
  <div className="p-4">
    <h2 className="text-xl font-bold mb-4">Custom Scroll Area</h2>
    <ScrollArea 
      orientation="vertical"
      scrollbarThickness={10}
      thumbColor="#4f46e5"
      trackColor="#f1f5f9"
    />
  </div>
);
