/* ===== paste into react-live (scope: { React, motion }) ===== */

const AnimatedHorizontalBarChart = ({ data, cfg, className = "" }) => {
    const [hov, setHov] = React.useState(null);
  
    const W = 600, H = 400, M = { t: 20, r: 50, b: 20, l: 100 };
    const keys = Object.keys(cfg);
    const max = Math.max(...data.flatMap(d => keys.map(k => +d[k] || 0)));
  
    const ys = i => M.t + i * ((H - M.t - M.b) / data.length);
    const xs = v => M.l + (v / max) * (W - M.l - M.r);
    const bh = (H - M.t - M.b) / (data.length * keys.length);
  
    return (
      <svg className={`w-full ${className}`} viewBox={`0 0 ${W} ${H}`}>
        {/* Axes */}
        <line x1={M.l} y1={M.t} x2={M.l} y2={H - M.b} stroke="#000" />
        <line x1={M.l} y1={H - M.b} x2={W - M.r} y2={H - M.b} stroke="#000" />
  
        {/* Grid lines + X axis labels */}
        {Array.from({ length: 5 }).map((_, i) => {
          const v = (max / 5) * (i + 1), x = xs(v);
          return (
            <g key={i}>
              <line x1={x} y1={M.t} x2={x} y2={H - M.b} stroke="#ccc" strokeDasharray="4 2" />
              <text x={x} y={H - M.b + 15} fontSize="12" textAnchor="middle">
                {Math.round(v)}
              </text>
            </g>
          );
        })}
  
        {/* Y axis labels */}
        {data.map((d, i) => (
          <text
            key={i}
            x={M.l - 10}
            y={ys(i) + (keys.length * bh) / 2}
            fontSize="12"
            textAnchor="end"
          >
            {d.month}
          </text>
        ))}
  
        {/* Bars */}
        {data.map((d, i) =>
          keys.map((k, ki) => {
            const val = +d[k] || 0;
            const id = `${i}-${k}`;
            const isOn = hov?.id === id;
            const y = ys(i) + ki * bh;
            const barW = xs(val) - M.l;
  
            return (
              <g
                key={id}
                onMouseEnter={() => setHov({ id, label: cfg[k].label, x: xs(val) + 10, y: y + bh / 2 })}
                onMouseLeave={() => setHov(null)}
              >
                <motion.rect
                  x={M.l}
                  y={y}
                  width={barW}
                  height={bh - 4}
                  fill={cfg[k].color}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transform={`translate(${M.l},0) scaleX(1)`}
                  transition={{ duration: 0.5 }}
                />
              </g>
            );
          })
        )}
  
        {/* Tooltip */}
        {hov && (
          <motion.text
            x={hov.x}
            y={hov.y}
            fontSize="12"
            fill="#000"
            textAnchor="start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {hov.label}
          </motion.text>
        )}
      </svg>
    );
  };
  
  /* ——— demo ——— */
  const demoData = [
    { month: "Jan", desktop: 186, mobile: 80 },
    { month: "Feb", desktop: 305, mobile: 200 },
    { month: "Mar", desktop: 237, mobile: 120 },
    { month: "Apr", desktop: 73,  mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "Jun", desktop: 214, mobile: 140 },
  ];
  const demoCfg = {
    desktop: { label: "Desktop", color: "#2563eb" },
    mobile:  { label: "Mobile",  color: "#60a5fa" },
  };
  
  render(<AnimatedHorizontalBarChart data={demoData} cfg={demoCfg} className="bg-white" />);
  