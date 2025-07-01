/* ===== paste into react-live (scope: { React }) ===== */

/* ---- GradientBorderBadge component ---- */
const GradientBorderBadge = ({ 
  text, 
  color = "bg-slate-800 dark:bg-slate-900",
  ...props 
}) => (
  <div 
    className="p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg 
    hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-500
    dark:from-pink-700 dark:via-purple-700 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:via-purple-700 dark:hover:to-pink-700"
    {...props}
  >
    <div className={`${color} px-4 py-2 rounded-lg text-white font-semibold`}>
      {text}
    </div>
  </div>
);

/* ---- demo ---- */
const BadgeDemo9 = () => (
  <div className="p-6 space-y-6 bg-white dark:bg-gray-900" style={{ minHeight: 300 }}>
    <h3 className="text-lg font-bold dark:text-white">Gradient Border Badge</h3>
    <div className="flex flex-wrap gap-6 items-center">
      <div className="space-y-2">
        <p className="text-sm text-gray-600 dark:text-gray-300">Default:</p>
        <GradientBorderBadge text="Gradient" />
      </div>
      
      <div className="space-y-2">
        <p className="text-sm text-gray-600 dark:text-gray-300">Light variant:</p>
        <GradientBorderBadge 
          text="Light Mode" 
          color="bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
        />
      </div>
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-400">Hover to see gradient transition</p>
  </div>
);

render(<BadgeDemo9 />);
