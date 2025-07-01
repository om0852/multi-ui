/* ===== paste into react-live (scope: { React, motion }) ===== */

const Histogram = ({
  data,
  bins = 10,
  width = 600,
  height = 400,
  barColor = '#3B82F6',
  hoverColor = '#2563EB',
  showTooltip = true,
  animationDuration = 0.5,
  ...props
}) => {
  const [hoveredBar, setHoveredBar] = React.useState(null);

  const padding = 40;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const histogramData = React.useMemo(() => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const binWidth = range / bins;

    const histogram = Array(bins).fill(0);
    data.forEach(value => {
      let binIndex = Math.floor((value - min) / binWidth);
      if (binIndex === bins) binIndex = bins - 1; // edge case for max value
      histogram[binIndex]++;
    });

    return { bins: histogram, binWidth, min, max };
  }, [data, bins]);

  const maxCount = Math.max(...histogramData.bins, 1);
  const barWidth = chartWidth / bins;

  const yScale = count => (count / maxCount) * chartHeight;

  return (
    <div className="relative bg-white" style={{ width, height }} {...props}>
      <svg width={width} height={height}>
        {/* Axes */}
        <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#E5E7EB" />
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#E5E7EB" />

        {/* Bars */}
        {histogramData.bins.map((count, i) => {
          const barHeight = yScale(count);
          const x = padding + i * barWidth;
          const y = height - padding - barHeight;

          return (
            <motion.rect
              key={i}
              x={x}
              y={y}
              width={barWidth - 2}
              height={barHeight}
              fill={hoveredBar === i ? hoverColor : barColor}
              initial={{ height: 0, y: height - padding }}
              animate={{ height: barHeight, y }}
              transition={{ duration: animationDuration }}
              onMouseEnter={() => setHoveredBar(i)}
              onMouseLeave={() => setHoveredBar(null)}
            />
          );
        })}

        {/* X-axis labels */}
        {Array.from({ length: bins + 1 }).map((_, i) => (
          <text
            key={i}
            x={padding + i * barWidth}
            y={height - padding + 15}
            fontSize="12"
            textAnchor={i === bins ? 'end' : 'middle'}
          >
            {Math.round(histogramData.min + i * histogramData.binWidth)}
          </text>
        ))}

        {/* Y-axis labels */}
        {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
          <text
            key={i}
            x={padding - 10}
            y={height - padding - t * chartHeight}
            fontSize="12"
            textAnchor="end"
            dominantBaseline="middle"
          >
            {Math.round(maxCount * t)}
          </text>
        ))}
      </svg>

      {/* Tooltip */}
      {showTooltip && hoveredBar !== null && (
        <div
          className="absolute bg-white p-2 rounded shadow-lg text-sm"
          style={{
            left: padding + hoveredBar * barWidth + barWidth / 2,
            top: height - padding - yScale(histogramData.bins[hoveredBar]) - 40,
            transform: 'translateX(-50%)'
          }}
        >
          <strong>Range:</strong> {Math.round(histogramData.min + hoveredBar * histogramData.binWidth)} –{' '}
          {Math.round(histogramData.min + (hoveredBar + 1) * histogramData.binWidth)}
          <br />
          <strong>Count:</strong> {histogramData.bins[hoveredBar]}
        </div>
      )}
    </div>
  );
};

/* ——— demo ——— */
const demoData = Array.from({ length: 200 }, () => Math.random() * 100);
render(<Histogram data={demoData} className={"bg-white"} />);
