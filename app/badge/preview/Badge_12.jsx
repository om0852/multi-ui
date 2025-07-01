/* ===== paste into react-live (scope: { React }) ===== */

/* ---- OutlineBadge component ---- */
const OutlineBadge = ({ 
  text, 
  color = "bg-emerald-500 dark:bg-emerald-600",
  ...props 
}) => (
  <div
    className={`inline-block px-4 py-2 text-white font-semibold rounded-lg ${color} 
    hover:ring-4 hover:ring-emerald-300 hover:ring-opacity-50 
    dark:hover:ring-emerald-400 dark:hover:ring-opacity-30
    transition-all duration-300 cursor-pointer`}
    {...props}
  >
    {text}
  </div>
);

/* ---- demo ---- */
const BadgeDemo12 = () => (
  <div className="p-6 space-y-6 bg-white dark:bg-gray-900" style={{ minHeight: 300 }}>
    <h3 className="text-lg font-bold dark:text-white">Outline on Hover Badge</h3>
    
    <div className="flex flex-wrap gap-6 items-center">
      <div className="space-y-2">
        <p className="text-sm text-gray-600 dark:text-gray-300">Default:</p>
        <OutlineBadge text="Hover Me" />
      </div>
      
      <div className="space-y-2">
        <p className="text-sm text-gray-600 dark:text-gray-300">Custom color:</p>
        <OutlineBadge 
          text="Custom Color" 
          color="bg-blue-500 dark:bg-blue-600"
          className="hover:ring-blue-300 dark:hover:ring-blue-400"
        />
      </div>
    </div>
    
    <p className="text-sm text-gray-600 dark:text-gray-400">
      Hover to see the outline effect
    </p>
  </div>
);

render(<BadgeDemo12 />);
