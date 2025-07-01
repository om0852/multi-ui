/* ===== paste into react-live (scope: { React, useEffect }) ===== */

/* ---- GlowBadge component ---- */
const GlowBadge = ({ text, color = "bg-indigo-500", ...props }) => {
  // Add keyframes for the glow effect
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes glow {
        0% { box-shadow: 0 0 5px rgba(0, 0, 0, 0); }
        50% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.8); }
        100% { box-shadow: 0 0 5px rgba(0, 0, 0, 0); }
      }
      .animate-glow { animation: glow 2s infinite; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <span
      className={`inline-block px-4 py-2 text-white text-sm font-bold rounded-full shadow-lg ${color} relative animate-glow`}
      {...props}
    >
      {text}
    </span>
  );
};

/* ---- demo ---- */
const BadgeDemo8 = () => (
  <div className="p-6 space-y-6 bg-white" style={{ minHeight: 300 }}>
    <h3 className="text-lg font-bold">Glow Badge</h3>
    <div className="flex flex-wrap gap-6 items-center">
      <div className="space-y-2">
        <p className="text-sm text-gray-600">Default glow:</p>
        <GlowBadge text="New Feature" />
      </div>
      
      <div className="space-y-2">
        <p className="text-sm text-gray-600">Custom color:</p>
        <GlowBadge 
          text="Hot" 
          color="bg-red-500"
          style={{
            '--tw-shadow-color': 'rgba(239, 68, 68, 0.8)'
          }}
        />
      </div>
    </div>
    <p className="text-sm text-gray-600">The badge has a pulsing glow effect</p>
  </div>
);

render(<BadgeDemo8 />);
