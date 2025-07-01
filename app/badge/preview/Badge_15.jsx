/* ===== paste into react-live (scope: { React }) ===== */

/* ---- PulseHoverBadge component ---- */
const PulseHoverBadge = ({ 
  text, 
  color = "bg-green-500 dark:bg-green-600",
  ...props 
}) => (
  <div
    className={`inline-block px-4 py-2 text-white font-semibold rounded-lg shadow-lg cursor-pointer 
    ${color} hover:animate-pulse transition-all duration-300`}
    {...props}
  >
    {text}
  </div>
);

/* ---- demo ---- */
const BadgeDemo15 = () => (
  <div className="p-6 space-y-6 bg-white dark:bg-gray-900" style={{ minHeight: 300 }}>
    <h3 className="text-lg font-bold dark:text-white">Hover Pulse Badge</h3>
    
    <div className="flex flex-wrap gap-6 items-center">
      <div className="space-y-2">
        <p className="text-sm text-gray-600 dark:text-gray-300">Default (Green):</p>
        <PulseHoverBadge text="Hover Me" />
      </div>
      
      <div className="space-y-2">
        <p className="text-sm text-gray-600 dark:text-gray-300">Custom color:</p>
        <PulseHoverBadge 
          text="Try Hovering" 
          color="bg-amber-500 dark:bg-amber-600"
        />
      </div>
    </div>
    
    <p className="text-sm text-gray-600 dark:text-gray-400">
      Hover over the badges to see the pulse effect
    </p>
  </div>
);

render(<BadgeDemo15 />);
