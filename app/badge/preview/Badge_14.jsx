/* ===== paste into react-live (scope: { React }) ===== */

/* ---- PulseGlowBadge component ---- */
const PulseGlowBadge = ({
  text,
  color = "bg-blue-500 dark:bg-blue-600",
  ...props
}) => (
  <div className="relative inline-block" {...props}>
    {/* Badge text */}
    <span
      className={`relative z-10 px-4 py-2 text-white font-semibold rounded-full ${color}`}
    >
      {text}
    </span>
    {/* Outer glowing pulse */}
    <div
      className={`absolute inset-0 w-full h-full rounded-full ${color} opacity-30 dark:opacity-40 blur-md animate-ping`}
    ></div>
  </div>
);

/* ---- demo ---- */
const BadgeDemo14 = () => (
  <div className="p-6 space-y-6 bg-white dark:bg-gray-900" style={{ minHeight: 300 }}>
    <h3 className="text-lg font-bold dark:text-white">Glowing Pulse Badge</h3>
    
    <div className="flex flex-wrap gap-6 items-center">
      <div className="space-y-2">
        <p className="text-sm text-gray-600 dark:text-gray-300">Default (Blue):</p>
        <PulseGlowBadge text="Live" />
      </div>
      
      <div className="space-y-2">
        <p className="text-sm text-gray-600 dark:text-gray-300">Custom color:</p>
        <PulseGlowBadge 
          text="Active" 
          color="bg-green-500 dark:bg-green-600"
        />
      </div>
    </div>
    
    <p className="text-sm text-gray-600 dark:text-gray-400">
      Features a glowing pulse animation effect
    </p>
  </div>
);

render(<BadgeDemo14 />);
