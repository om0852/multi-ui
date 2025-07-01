/* ===== paste into react-live (scope: { React }) ===== */

/* ---- PulseBadge component ---- */
const PulseBadge = ({
  text,
  color = "bg-red-500 dark:bg-red-600",
  ...props
}) => (
  <div className="relative inline-block" {...props}>
    <span
      className={`relative z-10 inline-block px-3 py-1 text-white text-sm font-bold rounded-full ${color}`}
    >
      {text}
    </span>
    <span
      className={`absolute inset-0 w-full h-full rounded-full border-2 border-opacity-50 border-current animate-ping`}
    ></span>
  </div>
);

/* ---- demo ---- */
const BadgeDemo13 = () => (
  <div className="p-6 space-y-6 bg-white dark:bg-gray-900" style={{ minHeight: 300 }}>
    <h3 className="text-lg font-bold dark:text-white">Ping Badge</h3>
    
    <div className="flex flex-wrap gap-6 items-center">
      <div className="space-y-2">
        <p className="text-sm text-gray-600 dark:text-gray-300">Default (Red):</p>
        <PulseBadge text="New" />
      </div>
      
      <div className="space-y-2">
        <p className="text-sm text-gray-600 dark:text-gray-300">Custom color:</p>
        <PulseBadge 
          text="Alert" 
          color="bg-purple-500 dark:bg-purple-600"
        />
      </div>
    </div>
    
    <p className="text-sm text-gray-600 dark:text-gray-400">
      The badge has a continuous ping animation
    </p>
  </div>
);

render(<BadgeDemo13 />);
